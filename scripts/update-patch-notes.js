#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const RSS_URL = 'https://steamcommunity.com/games/2868840/rss';
const OUTPUT_PATH = path.join(__dirname, '..', 'patch-notes-data.js');
const MAX_ITEMS = 8;

function decodeEntities(value) {
  let result = String(value || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  let previous = '';
  while (result !== previous) {
    previous = result;
    result = result
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&apos;/g, '\'')
      .replace(/&amp;/g, '&');
  }
  return result;
}

function stripHtml(value) {
  return decodeEntities(
    decodeEntities(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
    .trim()
  );
}

function xmlField(block, tag) {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? match[1].trim() : '';
}

function classifyPatch(title) {
  const lower = title.toLowerCase();
  if (lower.includes('major update')) return 'major';
  if (lower.includes('hotfix')) return 'hotfix';
  if (lower.includes('beta')) return 'beta';
  if (lower.includes('patch')) return 'patch';
  return 'announcement';
}

function isPatchNote(title) {
  return /(patch notes|major update|hotfix)/i.test(title);
}

function buildSummary(text) {
  const lines = stripHtml(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.slice(0, 6).join('\n');
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'blackcat-web patch sync/1.0'
    }
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function main() {
  const rss = await fetchText(RSS_URL);
  const items = Array.from(rss.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .map((match) => match[1])
    .map((block) => {
      const title = decodeEntities(xmlField(block, 'title'));
      const description = xmlField(block, 'description');
      const link = decodeEntities(xmlField(block, 'link'));
      const pubDate = decodeEntities(xmlField(block, 'pubDate'));
      const id = String(link).split('/').pop();
      return {
        id,
        title,
        link,
        pubDate,
        publishedAt: new Date(pubDate).toISOString(),
        kind: classifyPatch(title),
        summary: buildSummary(description),
        body: stripHtml(description)
      };
    })
    .filter((item) => item.title && item.link && isPatchNote(item.title))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, MAX_ITEMS);

  const payload = {
    source: RSS_URL,
    generatedAt: new Date().toISOString(),
    items
  };

  const output = [
    'window.STS2_PATCH_NOTES = ',
    JSON.stringify(payload, null, 2),
    ';\n'
  ].join('');

  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
  process.stdout.write(`Updated ${OUTPUT_PATH} with ${items.length} patch notes.\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
