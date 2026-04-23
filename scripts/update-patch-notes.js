#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const APP_ID = 2868840;
const NEWS_URL = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${APP_ID}&count=80&maxlength=0&format=json`;
const RSS_URL = `https://steamcommunity.com/games/${APP_ID}/rss`;
const OUTPUT_PATH = path.join(__dirname, '..', 'patch-notes-data.js');
const MAX_ITEMS = 36;

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
    decodeEntities(String(value || '')
    .replace(/\[img\]([\s\S]*?)\[\/img\]/gi, '')
    .replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi, '$2 ($1)')
    .replace(/\[(?:\/)?(?:b|i|u|h1|h2|h3|h4|list|olist|quote|code)\]/gi, '')
    .replace(/\[\*\]/g, '- '))
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

function normalizeImageUrl(value) {
  const raw = decodeEntities(value || '').trim();
  if (!raw) return '';
  if (raw.startsWith('{STEAM_CLAN_IMAGE}/')) {
    return raw.replace('{STEAM_CLAN_IMAGE}/', 'https://clan.akamai.steamstatic.com/images/');
  }
  if (/^\/\//.test(raw)) return `https:${raw}`;
  if (/^https?:\/\//i.test(raw)) return raw;
  return '';
}

function extractImage(contents) {
  const text = String(contents || '');
  const bbcode = text.match(/\[img\]([\s\S]*?)\[\/img\]/i);
  if (bbcode) return normalizeImageUrl(bbcode[1]);
  const html = text.match(/<img[^>]+src=["']([^"']+)["']/i);
  return html ? normalizeImageUrl(html[1]) : '';
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
  if (lower.includes('neowsletter') || lower.includes('roadmap')) return 'news';
  return 'news';
}

function isPatchNote(title) {
  return /(patch notes|major update|hotfix)/i.test(title);
}

function isOfficialSteamNews(item) {
  const feed = String(item.feedname || item.feedlabel || '').toLowerCase();
  const url = String(item.url || '').toLowerCase();
  return feed.includes('steam_community_announcements') || url.includes('steam_community_announcements') || Number(item.feed_type) === 1;
}

function sourceLabel(item) {
  if (isOfficialSteamNews(item)) return 'Steam Community';
  return item.feedlabel || item.feedname || item.author || 'Steam News';
}

function itemUrl(item) {
  const url = String(item.url || '');
  if (url) return url;
  return item.gid ? `https://steamcommunity.com/games/${APP_ID}/announcements/detail/${item.gid}` : '';
}

function buildKoreanDigest(title, summary, kind) {
  const lowered = String(title || '').toLowerCase();
  if (kind === 'major') return '대형 업데이트의 핵심 변경점, 신규 콘텐츠, 밸런스 조정, UI 개선을 한 번에 정리한 글입니다.';
  if (kind === 'hotfix') return '긴급 수정과 소프트락, 충돌, 멀티플레이 문제 같은 안정성 개선을 빠르게 확인할 수 있습니다.';
  if (kind === 'patch' || lowered.includes('patch')) return '최신 패치의 밸런스, 버그 수정, 현지화, 편의성 변경을 보기 쉽게 모았습니다.';
  if (lowered.includes('neowsletter')) return '개발진이 전하는 로드맵, 통계, Q&A, 향후 업데이트 방향을 한국어 독자가 보기 쉽게 정리했습니다.';
  if (lowered.includes('roadmap')) return '향후 콘텐츠와 시스템 업데이트 방향을 파악하기 좋은 Steam 뉴스입니다.';
  const first = stripHtml(summary).split('\n').find(Boolean);
  return first || 'Steam 뉴스 허브에 올라온 Slay the Spire 2 관련 소식을 모았습니다.';
}

function normalizeNewsItem(item) {
  const title = decodeEntities(item.title || '');
  const link = decodeEntities(itemUrl(item));
  const publishedAt = item.date ? new Date(Number(item.date) * 1000).toISOString() : new Date().toISOString();
  const id = String(item.gid || link.split('/').pop() || `${Date.parse(publishedAt)}-${title}`).replace(/[^A-Za-z0-9_-]/g, '');
  const body = stripHtml(item.contents || '');
  const summary = buildSummary(item.contents || '');
  const kind = classifyPatch(title);
  return {
    id,
    title,
    link,
    pubDate: new Date(publishedAt).toUTCString(),
    publishedAt,
    kind,
    category: isPatchNote(title) ? 'patch' : 'news',
    sourceLabel: sourceLabel(item),
    author: item.author || '',
    official: isOfficialSteamNews(item),
    external: Boolean(item.is_external_url) && !isOfficialSteamNews(item),
    image: extractImage(item.contents || ''),
    summary,
    summaryKo: buildKoreanDigest(title, summary, kind),
    body
  };
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
  const apiPayload = JSON.parse(await fetchText(NEWS_URL));
  const newsItems = (((apiPayload || {}).appnews || {}).newsitems || [])
    .filter((item) => Number(item.appid || APP_ID) === APP_ID)
    .map(normalizeNewsItem);

  const rss = await fetchText(RSS_URL).catch(() => '');
  const rssItems = Array.from(rss.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .map((match) => match[1])
    .map((block) => normalizeNewsItem({
      gid: String(decodeEntities(xmlField(block, 'link'))).split('/').pop(),
      title: decodeEntities(xmlField(block, 'title')),
      url: decodeEntities(xmlField(block, 'link')),
      date: Date.parse(decodeEntities(xmlField(block, 'pubDate'))) / 1000,
      author: 'Steam',
      contents: xmlField(block, 'description'),
      feedlabel: 'Steam RSS',
      feedname: 'steam_community_announcements',
      feed_type: 1,
      appid: APP_ID
    }));

  const seen = new Set();
  const items = newsItems.concat(rssItems)
    .filter((item) => item.title && item.link)
    .filter((item) => {
      const publishedHour = item.publishedAt ? item.publishedAt.slice(0, 13) : '';
      const key = `${item.title.toLowerCase()}|${publishedHour}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, MAX_ITEMS);

  const payload = {
    source: NEWS_URL,
    rssSource: RSS_URL,
    generatedAt: new Date().toISOString(),
    items
  };

  const output = [
    'window.STS2_PATCH_NOTES = ',
    JSON.stringify(payload, null, 2),
    ';\n'
  ].join('');

  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
  process.stdout.write(`Updated ${OUTPUT_PATH} with ${items.length} Steam news items.\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
