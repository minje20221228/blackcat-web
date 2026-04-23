(function () {
  let data = window.STS2_PATCH_NOTES || { items: [] };
  let params = new URLSearchParams(window.location.search);
  let noteId = params.get('id') || '';
  let language = ((localStorage.getItem('sts2-site-language') || navigator.language || 'ko').toLowerCase().startsWith('ko')) ? 'ko' : 'en';

  function decode(text) {
    return String(text || '')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, '\'');
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatDate(value) {
    let stamp = Date.parse(value);
    if (!Number.isFinite(stamp)) return value || '';
    return new Intl.DateTimeFormat(language === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(stamp);
  }

  function translatePatchTitleToKo(title) {
    return decode(String(title || ''))
      .replace(/Major Update/gi, '메이저 업데이트')
      .replace(/Minor Update/gi, '마이너 업데이트')
      .replace(/Beta Hotfix Patch Notes/gi, '베타 핫픽스 패치노트')
      .replace(/Hotfix Patch Notes/gi, '핫픽스 패치노트')
      .replace(/Patch Notes/gi, '패치노트')
      .replace(/The Neowsletter/gi, '네오우 소식지');
  }

  function getCategoryLabel(note) {
    let category = note && note.category === 'patch' ? 'patch' : 'news';
    if (language === 'ko') {
      return category === 'patch' ? '패치노트' : '뉴스';
    }
    return category === 'patch' ? 'Patch Notes' : 'News';
  }

  function getKindLabel(note) {
    let kind = String((note && note.kind) || 'news').toLowerCase();
    let labels = {
      ko: { major: '대형 업데이트', hotfix: '핫픽스', beta: '베타', patch: '패치', news: '뉴스', announcement: '공지' },
      en: { major: 'Major Update', hotfix: 'Hotfix', beta: 'Beta', patch: 'Patch', news: 'News', announcement: 'Announcement' }
    };
    let bucket = labels[language === 'ko' ? 'ko' : 'en'];
    return bucket[kind] || bucket.news;
  }

  function translatePatchTextToKo(text) {
    let result = decode(text)
      .replace(/^General:/gm, '일반:')
      .replace(/^Balance:/gm, '밸런스:')
      .replace(/^CONTENT & BALANCE/gm, '콘텐츠 및 밸런스')
      .replace(/^QUALITY OF LIFE:/gm, '편의성 개선:')
      .replace(/^PERFORMANCE:/gm, '성능:')
      .replace(/^ART:/gm, '아트:')
      .replace(/^USER INTERFACE & EXPERIENCE:/gm, 'UI 및 사용 경험:')
      .replace(/^WRITING:/gm, '문구:')
      .replace(/^BUG FIXES:/gm, '버그 수정:')
      .replace(/^Localization:/gm, '현지화:')
      .replace(/^LOCALIZATION:/gm, '현지화:')
      .replace(/^MODDING:/gm, '모딩:')
      .replace(/^Events:/gm, '이벤트:')
      .replace(/^Multiplayer:/gm, '멀티플레이:')
      .replace(/^Enemies:/gm, '적:')
      .replace(/^Potions & Relics:/gm, '포션 및 유물:')
      .replace(/^Potions &amp; Relics:/gm, '포션 및 유물:')
      .replace(/^Ancients:/gm, '고대자:')
      .replace(/^Ironclad:/gm, '아이언클래드:')
      .replace(/^Silent:/gm, '사일런트:')
      .replace(/^Regent:/gm, '리젠트:')
      .replace(/^Necrobinder:/gm, '네크로바인더:')
      .replace(/^Defect:/gm, '디펙트:')
      .replace(/\bFixed\b/g, '수정')
      .replace(/\bAdded\b/g, '추가')
      .replace(/\bChanged\b/g, '변경')
      .replace(/\bUpdated\b/g, '업데이트')
      .replace(/\bImproved\b/g, '개선')
      .replace(/\bRemoved\b/g, '제거')
      .replace(/\bBuffed\b/g, '상향')
      .replace(/\bNerfed\b/g, '하향')
      .replace(/\bDraw\b/g, '드로우')
      .replace(/\bcards\b/g, '카드')
      .replace(/\bcard\b/g, '카드')
      .replace(/\bRelic\b/g, '유물')
      .replace(/\brelic\b/g, '유물')
      .replace(/\bPotion\b/g, '포션')
      .replace(/\bpotion\b/g, '포션')
      .replace(/\bBlock\b/g, '방어도')
      .replace(/\bStrength\b/g, '힘')
      .replace(/\bDexterity\b/g, '민첩')
      .replace(/\bFocus\b/g, '집중')
      .replace(/\bWeak\b/g, '약화')
      .replace(/\bVulnerable\b/g, '취약')
      .replace(/\bPoison\b/g, '독')
      .replace(/\bEnergy\b/g, '에너지')
      .replace(/\bturn\b/g, '턴')
      .replace(/\bcombat\b/g, '전투')
      .replace(/\bdamage\b/g, '피해')
      .replace(/\n{3,}/g, '\n\n');
    return result;
  }

  function safeExternalUrl(value) {
    try {
      let url = new URL(String(value || ''), window.location.origin);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '#';
    } catch (error) {
      return '#';
    }
  }

  let note = data.items.find(function (item) {
    let itemId = item.id || String(item.link || '').split('/').pop();
    return itemId === noteId;
  }) || data.items[0];

  if (!note) {
    document.getElementById('patch-note-title').textContent = 'Patch note not found';
    return;
  }

  try {
    localStorage.setItem('sts2-site-language', language);
  } catch (error) {}
  document.documentElement.lang = language === 'ko' ? 'ko' : 'en';
  document.title = language === 'ko' ? translatePatchTitleToKo(note.title) : note.title;

  document.getElementById('patch-note-kicker').textContent = language === 'ko' ? 'Steam 뉴스룸' : 'Steam Newsroom';
  document.getElementById('patch-note-title').textContent = language === 'ko' ? translatePatchTitleToKo(note.title) : decode(note.title);
  document.getElementById('patch-note-source').textContent = language === 'ko' ? 'Steam 원문' : 'Steam Source';
  document.getElementById('patch-note-source').href = safeExternalUrl(note.link);
  document.getElementById('patch-note-summary-heading').textContent = language === 'ko' ? '한국어 요약' : 'Summary';
  document.getElementById('patch-note-body-heading').textContent = language === 'ko' ? 'Steam 원문 내용' : 'Steam Source Content';
  document.getElementById('patch-note-meta').innerHTML =
    '<span class="patch-pill">' + escapeHtml(language === 'ko' ? '게시일' : 'Published') + ': ' + escapeHtml(formatDate(note.publishedAt || note.pubDate)) + '</span>' +
    '<span class="patch-pill">' + escapeHtml(getCategoryLabel(note)) + '</span>' +
    '<span class="patch-pill">' + escapeHtml(getKindLabel(note)) + '</span>' +
    '<span class="patch-pill">' + escapeHtml(decode(note.sourceLabel || 'Steam')) + '</span>';
  let image = document.getElementById('patch-note-image');
  if (image && note.image) {
    image.src = note.image;
    image.hidden = false;
  }
  document.getElementById('patch-note-summary').textContent = language === 'ko'
    ? translatePatchTextToKo(note.summaryKo || note.summary || '')
    : decode(note.summary || '');
  document.getElementById('patch-note-body').textContent = language === 'ko'
    ? translatePatchTextToKo(note.body || '')
    : decode(note.body || '');
})();
