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
      .replace(/Beta Hotfix Patch Notes/gi, '베타 핫픽스 패치노트')
      .replace(/Hotfix Patch Notes/gi, '핫픽스 패치노트')
      .replace(/Patch Notes/gi, '패치노트')
      .replace(/The Neowsletter/gi, '네오우 소식지');
  }

  function translatePatchTextToKo(text) {
    let result = decode(text)
      .replace(/^General:/gm, '일반:')
      .replace(/^Balance:/gm, '밸런스:')
      .replace(/^CONTENT & BALANCE/gm, '콘텐츠 및 밸런스')
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

  let note = data.items.find(function (item) {
    let itemId = item.id || String(item.link || '').split('/').pop();
    return itemId === noteId;
  }) || data.items[0];

  if (!note) {
    document.getElementById('patch-note-title').textContent = 'Patch note not found';
    return;
  }

  localStorage.setItem('sts2-site-language', language);
  document.documentElement.lang = language === 'ko' ? 'ko' : 'en';
  document.title = language === 'ko' ? translatePatchTitleToKo(note.title) : note.title;

  document.getElementById('patch-note-kicker').textContent = language === 'ko' ? 'Steam 패치노트' : 'Steam Patch Note';
  document.getElementById('patch-note-title').textContent = language === 'ko' ? translatePatchTitleToKo(note.title) : decode(note.title);
  document.getElementById('patch-note-source').textContent = language === 'ko' ? 'Steam 원문' : 'Steam Source';
  document.getElementById('patch-note-source').href = note.link;
  document.getElementById('patch-note-summary-heading').textContent = language === 'ko' ? '한국어 요약' : 'Summary';
  document.getElementById('patch-note-body-heading').textContent = language === 'ko' ? '원문' : 'Original';
  document.getElementById('patch-note-meta').innerHTML =
    '<span class="patch-pill">' + (language === 'ko' ? '게시일' : 'Published') + ': ' + formatDate(note.publishedAt || note.pubDate) + '</span>' +
    '<span class="patch-pill">Steam</span>';
  document.getElementById('patch-note-summary').textContent = language === 'ko'
    ? translatePatchTextToKo(note.summaryKo || note.summary || '')
    : decode(note.summary || '');
  document.getElementById('patch-note-body').textContent = language === 'ko'
    ? translatePatchTextToKo(note.body || '')
    : decode(note.body || '');
})();
