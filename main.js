let PLAYABLE_CHARACTERS = ['Ironclad', 'Silent', 'Regent', 'Necrobinder', 'Defect'];
let STORAGE_KEY = 'sts2-build-lab-builds-v1';
let PINNED_KEY = 'sts2-build-lab-pins-v1';
let languages = ['en', 'ko', 'ja', 'es'];

let CHARACTER_INFO = {
  Ironclad: {
    hp: 80,
    relic: 'Burning Blood',
    identity: 'Strength, self-damage, Exhaust',
    summary: 'Frontloaded damage shells that pivot between Strength scaling, self-damage payoffs, and exhaust control.'
  },
  Silent: {
    hp: 70,
    relic: 'Ring of the Snake',
    identity: 'Discard, Shiv, Poison',
    summary: 'Flexible tempo builds with discard smoothing, Sly payoffs, Shiv bursts, and poison inevitability.'
  },
  Regent: {
    hp: 72,
    relic: 'Divine Right',
    identity: 'Stars, control, payoff turns',
    summary: 'Star-heavy setups that alternate between efficient board control and explosive payoff turns.'
  },
  Necrobinder: {
    hp: 68,
    relic: 'Bound Phylactery',
    identity: 'Summon, Doom, Osty, Souls',
    summary: 'Summon routing, Doom thresholds, and soul management create highly technical grindy kill patterns.'
  },
  Defect: {
    hp: 75,
    relic: 'Cracked Core',
    identity: 'Orbs, Focus, Evoke',
    summary: 'Orb cycling and Focus engines enable either quick Lightning tempo or slow inevitability.'
  }
};

let localizedTerms = {
  characters: {
    Ironclad: { en: 'Ironclad', ko: '아이언클래드', ja: 'アイアンクラッド', es: 'Ironclad' },
    Silent: { en: 'Silent', ko: '사일런트', ja: 'サイレント', es: 'Silent' },
    Regent: { en: 'Regent', ko: '리젠트', ja: 'リージェント', es: 'Regent' },
    Necrobinder: { en: 'Necrobinder', ko: '네크로바인더', ja: 'ネクロバインダー', es: 'Necrobinder' },
    Defect: { en: 'Defect', ko: '디펙트', ja: 'ディフェクト', es: 'Defect' },
    Colorless: { en: 'Colorless', ko: '무색', ja: '無色', es: 'Incolora' }
  },
  relics: {
    'Burning Blood': { en: 'Burning Blood', ko: '불타는 피', ja: '燃える血', es: 'Sangre Ardiente' },
    'Ring of the Snake': { en: 'Ring of the Snake', ko: '뱀의 반지', ja: '蛇の指輪', es: 'Anillo de la Serpiente' },
    'Divine Right': { en: 'Divine Right', ko: '신성한 권리', ja: '神授の権利', es: 'Derecho Divino' },
    'Bound Phylactery': { en: 'Bound Phylactery', ko: '속박된 성물함', ja: '縛られたフィラクテリー', es: 'Filacteria Ligada' },
    'Cracked Core': { en: 'Cracked Core', ko: '금 간 코어', ja: 'ひび割れたコア', es: 'Nucleo Agrietado' }
  },
  identities: {
    'Strength, self-damage, Exhaust': { en: 'Strength, self-damage, Exhaust', ko: '힘, 자해, 소진', ja: '筋力、自傷、廃棄', es: 'Fuerza, autodaño, Agotamiento' },
    'Discard, Shiv, Poison': { en: 'Discard, Shiv, Poison', ko: '버리기, 쉬브, 독', ja: '捨て札、シヴ、毒', es: 'Descartar, Shiv, Veneno' },
    'Stars, control, payoff turns': { en: 'Stars, control, payoff turns', ko: '별, 제어, 폭발 턴', ja: '星、制圧、決めターン', es: 'Estrellas, control, turnos de remate' },
    'Summon, Doom, Osty, Souls': { en: 'Summon, Doom, Osty, Souls', ko: '소환, 둠, 오스티, 영혼', ja: '召喚、ドゥーム、オスティ、魂', es: 'Invocar, Doom, Osty, Almas' },
    'Orbs, Focus, Evoke': { en: 'Orbs, Focus, Evoke', ko: '오브, 집중, 개방', ja: 'オーブ、集中、喚起', es: 'Orbes, Concentracion, Evocar' }
  },
  types: {
    Attack: { en: 'Attack', ko: '공격', ja: '攻撃', es: 'Ataque' },
    Skill: { en: 'Skill', ko: '스킬', ja: 'スキル', es: 'Habilidad' },
    Power: { en: 'Power', ko: '파워', ja: 'パワー', es: 'Poder' },
    Status: { en: 'Status', ko: '상태', ja: '状態', es: 'Estado' },
    Curse: { en: 'Curse', ko: '저주', ja: '呪い', es: 'Maldicion' }
  },
  rarities: {
    Starter: { en: 'Starter', ko: '시작', ja: 'スターター', es: 'Inicial' },
    Common: { en: 'Common', ko: '일반', ja: 'コモン', es: 'Comun' },
    Uncommon: { en: 'Uncommon', ko: '언커먼', ja: 'アンコモン', es: 'Poco comun' },
    Rare: { en: 'Rare', ko: '레어', ja: 'レア', es: 'Rara' },
    Special: { en: 'Special', ko: '특수', ja: '特殊', es: 'Especial' }
  }
};

let uiText = {
  en: {
    heroTitle: 'Build Lab',
    heroText: '',
    sortLabel: 'Sort',
    sortOptions: { latest: 'Latest', popular: 'Pinned' },
    themeLabel: 'Theme',
    languageLabel: 'Language',
    themeOptions: { dark: 'Dark', light: 'Light' },
    librarySortOptions: { name: 'Name', cost: 'Cost', rarity: 'Rarity', type: 'Type' },
    characterKicker: 'Characters',
    characterHeading: 'Choose a character',
    buildlistKicker: 'Build List',
    buildlistHeading: 'Starter and saved builds',
    buildlistNote: '',
    builderKicker: 'Builder',
    builderHeading: 'Create and save a build',
    builderNote: '',
    editorKicker: 'Deck Sheet',
    editorHeading: 'Selected cards',
    libraryKicker: 'Library',
    libraryHeading: 'All available cards',
    libraryNote: '',
    fields: {
      title: 'Build title',
      author: 'Author',
      character: 'Character',
      summary: 'Summary',
      notes: 'Notes',
      search: 'Search cards',
      type: 'Type',
      rarity: 'Rarity',
      cost: 'Cost',
      librarySort: 'Library Sort'
    },
    placeholders: {
      title: 'Example: Zero-cost Sly Tempo',
      author: 'Name or handle',
      summary: 'How does this build win and what is it trying to assemble?',
      notes: 'Route notes, upgrade priorities, elite targets, risky inclusions.',
      search: 'Search by card name or text'
    },
    buttons: {
      newBuild: 'New build',
      duplicateBuild: 'Duplicate',
      saveBuild: 'Save build',
      deleteBuild: 'Delete',
      addBase: 'Add base',
      addUpgraded: 'Add +',
      remove: 'Remove',
      upgrade: 'Toggle +',
      pin: 'Pin',
      unpin: 'Unpin',
      source: 'Source'
    },
    labels: {
      hp: 'Health',
      relic: 'Relic',
      identity: 'Identity',
      builds: 'Builds',
      cards: 'Cards',
      cardCount: 'Card Count',
      uniqueCards: 'Unique Cards',
      avgCost: 'Avg Cost',
      upgraded: 'Upgraded',
      updated: 'Updated',
      pinned: 'Pinned',
      sample: 'Starter',
      custom: 'Custom',
      all: 'All'
    },
    empty: {
      builds: 'No builds yet for this character. Save one from the editor to populate the list.',
      selected: 'No cards selected yet. Add cards from the library on the right.',
      library: 'No cards matched the current filters.'
    },
    status: {
      saved: 'Build saved.',
      deleted: 'Build deleted.',
      needCards: 'Add at least one card before saving.',
      reset: 'Started a new empty build.',
      duplicated: 'Build duplicated into the editor.',
      loaded: 'Build loaded into the editor.'
    },
  },
  ko: {
    heroTitle: '빌드 랩',
    sortLabel: '정렬',
    sortOptions: { latest: '최신순', popular: '고정순' },
    themeLabel: '테마',
    languageLabel: '언어',
    themeOptions: { dark: '다크', light: '라이트' },
    librarySortOptions: { name: '이름순', cost: '코스트순', rarity: '희귀도순', type: '타입순' },
    characterKicker: '캐릭터',
    characterHeading: '캐릭터 선택',
    buildlistKicker: '빌드 목록',
    buildlistHeading: '기본 빌드와 저장 빌드',
    buildlistNote: '',
    builderKicker: '빌드 편집기',
    builderHeading: '직접 빌드 만들기',
    builderNote: '',
    editorKicker: '덱 시트',
    editorHeading: '선택한 카드',
    libraryKicker: '카드 라이브러리',
    libraryHeading: '사용 가능한 전체 카드',
    libraryNote: '',
    fields: {
      title: '빌드 제목',
      author: '작성자',
      character: '캐릭터',
      summary: '요약',
      notes: '운영 메모',
      search: '카드 검색',
      type: '타입',
      rarity: '희귀도',
      cost: '코스트',
      librarySort: '라이브러리 정렬'
    },
    placeholders: {
      title: '예: 0코 슬라이 템포',
      author: '닉네임 또는 이름',
      summary: '이 빌드가 무엇을 모으고 어떻게 이기는지 적어 주세요.',
      notes: '루트, 강화 우선순위, 엘리트 기준, 위험 카드 등을 적어 주세요.',
      search: '카드 이름이나 텍스트 검색'
    },
    buttons: {
      newBuild: '새 빌드',
      duplicateBuild: '복제',
      saveBuild: '저장',
      deleteBuild: '삭제',
      addBase: '기본 추가',
      addUpgraded: '+ 추가',
      remove: '제거',
      upgrade: '+ 전환',
      pin: '고정',
      unpin: '고정 해제',
      source: '출처'
    },
    labels: {
      hp: '체력',
      relic: '시작 유물',
      identity: '핵심 기믹',
      builds: '빌드 수',
      cards: '카드 수',
      cardCount: '총 카드 수',
      uniqueCards: '고유 카드 수',
      avgCost: '평균 코스트',
      upgraded: '업그레이드',
      updated: '업데이트',
      pinned: '고정',
      sample: '기본',
      custom: '사용자',
      all: '전체'
    },
    empty: {
      builds: '이 캐릭터에는 아직 저장된 빌드가 없습니다. 오른쪽 편집기에서 저장하면 목록에 추가됩니다.',
      selected: '아직 선택된 카드가 없습니다. 오른쪽 라이브러리에서 카드를 추가해 주세요.',
      library: '현재 필터에 맞는 카드가 없습니다.'
    },
    status: {
      saved: '빌드를 저장했습니다.',
      deleted: '빌드를 삭제했습니다.',
      needCards: '카드를 1장 이상 추가한 뒤 저장해 주세요.',
      reset: '새 빈 빌드를 시작했습니다.',
      duplicated: '현재 빌드를 복제해 편집기로 가져왔습니다.',
      loaded: '빌드를 편집기로 불러왔습니다.'
    },
  }
};

let refs = {
  heroTitle: document.getElementById('hero-title'),  sortLabel: document.getElementById('sort-label'),
  sortSelect: document.getElementById('sort-select'),
  themeLabel: document.getElementById('theme-label'),
  themeSelect: document.getElementById('theme-select'),
  themeOptionDark: document.getElementById('theme-option-dark'),
  themeOptionLight: document.getElementById('theme-option-light'),
  languageLabel: document.getElementById('language-label'),
  languageSelect: document.getElementById('language-select'),
  characterKicker: document.getElementById('character-kicker'),
  characterHeading: document.getElementById('character-heading'),
  characterTabs: document.getElementById('character-tabs'),
  characterSummary: document.getElementById('character-summary'),
  buildlistKicker: document.getElementById('buildlist-kicker'),
  buildlistHeading: document.getElementById('buildlist-heading'),  buildList: document.getElementById('build-list'),
  builderKicker: document.getElementById('builder-kicker'),
  builderHeading: document.getElementById('builder-heading'),  editorKicker: document.getElementById('editor-kicker'),
  editorHeading: document.getElementById('editor-heading'),
  libraryKicker: document.getElementById('library-kicker'),
  libraryHeading: document.getElementById('library-heading'),  buildStatus: document.getElementById('build-status'),  selectedCards: document.getElementById('selected-cards'),
  libraryList: document.getElementById('library-list'),
  buildTitleInput: document.getElementById('build-title-input'),
  buildAuthorInput: document.getElementById('build-author-input'),
  buildCharacterSelect: document.getElementById('build-character-select'),
  buildSummaryInput: document.getElementById('build-summary-input'),
  buildNotesInput: document.getElementById('build-notes-input'),
  cardSearchInput: document.getElementById('card-search-input'),
  typeFilterSelect: document.getElementById('type-filter-select'),
  rarityFilterSelect: document.getElementById('rarity-filter-select'),
  costFilterSelect: document.getElementById('cost-filter-select'),
  librarySortSelect: document.getElementById('library-sort-select'),
  newBuildButton: document.getElementById('new-build-button'),
  duplicateBuildButton: document.getElementById('duplicate-build-button'),
  saveBuildButton: document.getElementById('save-build-button'),
  deleteBuildButton: document.getElementById('delete-build-button'),
  fieldTitleLabel: document.getElementById('field-title-label'),
  fieldAuthorLabel: document.getElementById('field-author-label'),
  fieldCharacterLabel: document.getElementById('field-character-label'),
  fieldSummaryLabel: document.getElementById('field-summary-label'),
  fieldNotesLabel: document.getElementById('field-notes-label'),
  fieldSearchLabel: document.getElementById('field-search-label'),
  fieldTypeLabel: document.getElementById('field-type-label'),
  fieldRarityLabel: document.getElementById('field-rarity-label'),
  fieldCostLabel: document.getElementById('field-cost-label'),
  fieldLibrarySortLabel: document.getElementById('field-library-sort-label')
};

let allCards = (window.STS2_CARDS_DATA || []).map((card) => ({
  ...card,
  imageUrl: card.image ? `https://sts2.wiki${card.image}` : '',
  portraitImageUrl: card.portraitUrl ? `https://sts2.wiki${card.portraitUrl}` : ''
})).sort((a, b) => {
  if (a.character !== b.character) {
    return a.character.localeCompare(b.character);
  }
  if ((a.sortCost ?? 999) !== (b.sortCost ?? 999)) {
    return (a.sortCost ?? 999) - (b.sortCost ?? 999);
  }
  return a.name.localeCompare(b.name);
});

let cardMap = new Map(allCards.map((card) => [card.id, card]));

let state = {
  currentLanguage: detectPreferredLanguage(),
  currentTheme: detectPreferredTheme(),
  currentSort: 'latest',
  activeCharacter: PLAYABLE_CHARACTERS[0],
  activeBuildId: null,
  savedBuilds: loadSavedBuilds(),
  pinnedIds: loadPinnedIds(),
  filters: {
    search: '',
    type: 'all',
    rarity: 'all',
    cost: 'all',
    librarySort: 'name'
  },
  draft: createEmptyBuild(PLAYABLE_CHARACTERS[0])
};

function detectPreferredLanguage() {
  let browserLanguage = (navigator.language || 'en').toLowerCase().split('-')[0];
  return languages.includes(browserLanguage) ? browserLanguage : 'ko';
}

function detectPreferredTheme() {
  let stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return 'dark';
}

function ui() {
  return uiText[state.currentLanguage] || uiText.en;
}

function getLocalizedTerm(group, value) {
  let entry = localizedTerms[group]?.[value];
  return entry?.[state.currentLanguage] || entry?.en || value;
}

function getCharacterLabel(character) {
  return getLocalizedTerm('characters', character);
}

function getRelicLabel(relic) {
  return getLocalizedTerm('relics', relic);
}

function getIdentityLabel(identity) {
  return getLocalizedTerm('identities', identity);
}

function getTypeLabel(type) {
  return getLocalizedTerm('types', type);
}

function getRarityLabel(rarity) {
  return getLocalizedTerm('rarities', rarity);
}

function getCardName(card, upgraded = false) {
  return upgraded ? card.upgradedName || `${card.name}+` : card.name;
}

function getCardText(card, upgraded = false) {
  return upgraded ? card.upgradedDescription || card.description : card.description;
}

function getCardSearchText(card) {
  return [
    card.name,
    card.upgradedName,
    card.description,
    card.upgradedDescription,
    getCharacterLabel(card.character),
    getTypeLabel(card.type),
    getRarityLabel(card.rarity)
  ].filter(Boolean).join(' ').toLowerCase();
}

function getLocaleTag() {
  return {
    en: 'en-US',
    ko: 'ko-KR',
    ja: 'ja-JP',
    es: 'es-ES'
  }[state.currentLanguage] || 'en-US';
}

function applyTheme() {
  document.documentElement.dataset.theme = state.currentTheme;
}

function createId() {
  return `build-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createEmptyBuild(character) {
  return {
    id: createId(),
    character,
    title: '',
    author: '',
    summary: '',
    notes: '',
    cards: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    isSample: false
  };
}

function loadSavedBuilds() {
  try {
    let raw = window.localStorage.getItem(STORAGE_KEY);
    let parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function persistSavedBuilds() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedBuilds));
}

function loadPinnedIds() {
  try {
    let raw = window.localStorage.getItem(PINNED_KEY);
    let parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    return new Set();
  }
}

function persistPinnedIds() {
  window.localStorage.setItem(PINNED_KEY, JSON.stringify([...state.pinnedIds]));
}

function starterCardsForCharacter(character) {
  return allCards
    .filter((card) => card.character === character && ['Starter', 'Common', 'Uncommon'].includes(card.rarity) && ['Attack', 'Skill', 'Power'].includes(card.type))
    .slice(0, 10)
    .map((card) => ({ cardId: card.id, quantity: 1, upgraded: false }));
}

function createSampleBuilds() {
  return PLAYABLE_CHARACTERS.map((character) => ({
    id: `sample-${character.toLowerCase()}`,
    character,
    title: `${character} Starter Shell`,
    author: 'Build Lab',
    summary: `Starter shell generated from the current ${character} card pool. Use it as a base and branch from there.`,
    notes: `Sample shell generated from the full STS2 card list on ${formatDate(Date.UTC(2026, 2, 26))}. Replace filler cards, tune upgrades, and add Colorless flex slots.`,
    cards: starterCardsForCharacter(character),
    createdAt: Date.UTC(2026, 2, 26),
    updatedAt: Date.UTC(2026, 2, 26),
    isSample: true
  }));
}

let sampleBuilds = createSampleBuilds();

function formatDate(timestamp) {
  return new Intl.DateTimeFormat(getLocaleTag(), {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(timestamp);
}

function formatNumber(value) {
  return new Intl.NumberFormat(getLocaleTag(), { maximumFractionDigits: 1 }).format(value);
}

function availableCardsForCharacter(character) {
  return allCards.filter((card) => card.character === character || card.character === 'Colorless');
}

function buildCards(build) {
  return build.cards
    .map((entry) => {
      let card = cardMap.get(entry.cardId);
      if (!card) {
        return null;
      }
      return { ...entry, card };
    })
    .filter(Boolean);
}

function summarizeBuild(build) {
  let cards = buildCards(build);
  let cardCount = cards.reduce((sum, entry) => sum + entry.quantity, 0);
  let uniqueCards = cards.length;
  let upgraded = cards.filter((entry) => entry.upgraded).length;
  let numericCards = cards.filter((entry) => Number.isFinite(entry.card.sortCost));
  let weightedCost = numericCards.reduce((sum, entry) => sum + entry.card.sortCost * entry.quantity, 0);
  let weightedCount = numericCards.reduce((sum, entry) => sum + entry.quantity, 0);
  let avgCost = weightedCount ? weightedCost / weightedCount : 0;
  return { cardCount, uniqueCards, upgraded, avgCost };
}

function getAllBuilds() {
  return [...sampleBuilds, ...state.savedBuilds];
}

function getBuildById(id) {
  return getAllBuilds().find((build) => build.id === id) || null;
}

function buildsForActiveCharacter() {
  let builds = getAllBuilds().filter((build) => build.character === state.activeCharacter);
  let sorted = [...builds].sort((a, b) => {
    if (state.currentSort === 'popular') {
      let pinDiff = Number(state.pinnedIds.has(b.id)) - Number(state.pinnedIds.has(a.id));
      if (pinDiff) {
        return pinDiff;
      }
      return summarizeBuild(b).cardCount - summarizeBuild(a).cardCount || b.updatedAt - a.updatedAt;
    }
    return b.updatedAt - a.updatedAt;
  });
  return sorted;
}

function ensureActiveBuild() {
  let builds = buildsForActiveCharacter();
  if (!builds.length) {
    state.activeBuildId = null;
    if (state.draft.character !== state.activeCharacter) {
      state.draft = createEmptyBuild(state.activeCharacter);
    }
    return;
  }

  if (state.activeBuildId && !builds.some((build) => build.id === state.activeBuildId)) {
    state.activeBuildId = null;
  }
}

function resetDraft(character = state.activeCharacter) {
  state.activeBuildId = null;
  state.draft = createEmptyBuild(character);
  showStatus(ui().status.reset);
  render();
}

function loadBuildIntoDraft(buildId) {
  let build = getBuildById(buildId);
  if (!build) {
    return;
  }
  state.activeBuildId = build.id;
  state.draft = clone(build);
  state.draft.character = build.character;
  showStatus(ui().status.loaded);
  render();
}

function saveCurrentBuild() {
  if (!state.draft.cards.length) {
    showStatus(ui().status.needCards);
    return;
  }

  let now = Date.now();
  let draft = clone(state.draft);
  draft.character = state.activeCharacter;
  draft.updatedAt = now;
  draft.title = draft.title.trim() || `${getCharacterLabel(state.activeCharacter)} ${ui().labels.custom} Build`;
  draft.author = draft.author.trim() || 'Local Player';
  draft.summary = draft.summary.trim() || 'Custom build saved in this browser.';
  draft.notes = draft.notes.trim();
  draft.isSample = false;

  let isEditableExisting = state.activeBuildId && !String(state.activeBuildId).startsWith('sample-') && state.savedBuilds.some((build) => build.id === state.activeBuildId);

  if (isEditableExisting) {
    draft.id = state.activeBuildId;
    draft.createdAt = state.savedBuilds.find((build) => build.id === state.activeBuildId)?.createdAt || now;
    state.savedBuilds = state.savedBuilds.map((build) => build.id === draft.id ? draft : build);
  } else {
    draft.id = createId();
    draft.createdAt = now;
    state.savedBuilds.unshift(draft);
    state.activeBuildId = draft.id;
  }

  state.draft = clone(draft);
  persistSavedBuilds();
  showStatus(ui().status.saved);
  render();
}

function duplicateCurrentBuild() {
  let duplicate = clone(state.draft);
  duplicate.id = createId();
  duplicate.title = duplicate.title ? `${duplicate.title} Copy` : `${getCharacterLabel(state.activeCharacter)} Copy`;
  duplicate.createdAt = Date.now();
  duplicate.updatedAt = Date.now();
  duplicate.isSample = false;
  state.activeBuildId = null;
  state.draft = duplicate;
  showStatus(ui().status.duplicated);
  render();
}

function deleteCurrentBuild() {
  if (!state.activeBuildId || String(state.activeBuildId).startsWith('sample-')) {
    resetDraft(state.activeCharacter);
    return;
  }

  state.savedBuilds = state.savedBuilds.filter((build) => build.id !== state.activeBuildId);
  state.pinnedIds.delete(state.activeBuildId);
  persistSavedBuilds();
  persistPinnedIds();
  state.activeBuildId = null;
  state.draft = createEmptyBuild(state.activeCharacter);
  showStatus(ui().status.deleted);
  render();
}

function togglePinned(buildId) {
  if (state.pinnedIds.has(buildId)) {
    state.pinnedIds.delete(buildId);
  } else {
    state.pinnedIds.add(buildId);
  }
  persistPinnedIds();
  renderBuildList();
}

function updateDraftField(field, value) {
  state.draft[field] = value;
}

function addCardToDraft(cardId, upgraded) {
  let existing = state.draft.cards.find((entry) => entry.cardId === cardId && entry.upgraded === upgraded);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.draft.cards.push({ cardId, quantity: 1, upgraded: Boolean(upgraded) });
  }
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function adjustCardQuantity(cardId, upgraded, delta) {
  let entry = state.draft.cards.find((item) => item.cardId === cardId && item.upgraded === upgraded);
  if (!entry) {
    return;
  }
  entry.quantity += delta;
  if (entry.quantity <= 0) {
    state.draft.cards = state.draft.cards.filter((item) => !(item.cardId === cardId && item.upgraded === upgraded));
  }
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function removeCard(cardId, upgraded) {
  state.draft.cards = state.draft.cards.filter((item) => !(item.cardId === cardId && item.upgraded === upgraded));
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function toggleUpgrade(cardId, upgraded) {
  let entry = state.draft.cards.find((item) => item.cardId === cardId && item.upgraded === upgraded);
  if (!entry) {
    return;
  }
  let target = state.draft.cards.find((item) => item.cardId === cardId && item.upgraded !== upgraded);
  if (target) {
    target.quantity += entry.quantity;
    removeCard(cardId, upgraded);
    return;
  }
  entry.upgraded = !entry.upgraded;
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function filteredCards() {
  let cards = availableCardsForCharacter(state.activeCharacter).filter((card) => {
    let search = state.filters.search.trim().toLowerCase();
    let textMatch = !search || getCardSearchText(card).includes(search);
    let typeMatch = state.filters.type === 'all' || card.type === state.filters.type;
    let rarityMatch = state.filters.rarity === 'all' || card.rarity === state.filters.rarity;
    let costMatch = state.filters.cost === 'all' || String(card.cost) === state.filters.cost;
    return textMatch && typeMatch && rarityMatch && costMatch;
  });

  return cards.sort((a, b) => {
    if (state.filters.librarySort === 'cost') {
      return (a.sortCost ?? 999) - (b.sortCost ?? 999) || getCardName(a).localeCompare(getCardName(b), getLocaleTag());
    }
    if (state.filters.librarySort === 'rarity') {
      return getRarityLabel(a.rarity).localeCompare(getRarityLabel(b.rarity), getLocaleTag()) || getCardName(a).localeCompare(getCardName(b), getLocaleTag());
    }
    if (state.filters.librarySort === 'type') {
      return getTypeLabel(a.type).localeCompare(getTypeLabel(b.type), getLocaleTag()) || getCardName(a).localeCompare(getCardName(b), getLocaleTag());
    }
    return getCardName(a).localeCompare(getCardName(b), getLocaleTag());
  });
}

function showStatus(message) {
  refs.buildStatus.textContent = message;
}

function optionList(values, allLabel, labelForValue = (value) => value) {
  return [`<option value="all">${escapeHtml(allLabel)}</option>`]
    .concat(values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(labelForValue(value))}</option>`))
    .join('');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderStaticText() {
  let currentUi = ui();
  document.documentElement.lang = state.currentLanguage;
  document.title = `Slay the Spire 2 ${currentUi.heroTitle}`;
  refs.heroTitle.textContent = currentUi.heroTitle;
  refs.sortLabel.textContent = currentUi.sortLabel;
  refs.themeLabel.textContent = currentUi.themeLabel;
  refs.languageLabel.textContent = currentUi.languageLabel;
  refs.themeOptionDark.textContent = currentUi.themeOptions.dark;
  refs.themeOptionLight.textContent = currentUi.themeOptions.light;
  refs.sortSelect.innerHTML = `
    <option value="latest">${currentUi.sortOptions.latest}</option>
    <option value="popular">${currentUi.sortOptions.popular}</option>
  `;
  refs.characterKicker.textContent = currentUi.characterKicker;
  refs.characterHeading.textContent = currentUi.characterHeading;
  refs.buildlistKicker.textContent = currentUi.buildlistKicker;
  refs.buildlistHeading.textContent = currentUi.buildlistHeading;
  refs.builderKicker.textContent = currentUi.builderKicker;
  refs.builderHeading.textContent = currentUi.builderHeading;
  refs.editorKicker.textContent = currentUi.editorKicker;
  refs.editorHeading.textContent = currentUi.editorHeading;
  refs.libraryKicker.textContent = currentUi.libraryKicker;
  refs.libraryHeading.textContent = currentUi.libraryHeading;
  refs.newBuildButton.textContent = currentUi.buttons.newBuild;
  refs.duplicateBuildButton.textContent = currentUi.buttons.duplicateBuild;
  refs.saveBuildButton.textContent = currentUi.buttons.saveBuild;
  refs.deleteBuildButton.textContent = currentUi.buttons.deleteBuild;
  refs.fieldTitleLabel.textContent = currentUi.fields.title;
  refs.fieldAuthorLabel.textContent = currentUi.fields.author;
  refs.fieldCharacterLabel.textContent = currentUi.fields.character;
  refs.fieldSummaryLabel.textContent = currentUi.fields.summary;
  refs.fieldNotesLabel.textContent = currentUi.fields.notes;
  refs.fieldSearchLabel.textContent = currentUi.fields.search;
  refs.fieldTypeLabel.textContent = currentUi.fields.type;
  refs.fieldRarityLabel.textContent = currentUi.fields.rarity;
  refs.fieldCostLabel.textContent = currentUi.fields.cost;
  refs.fieldLibrarySortLabel.textContent = currentUi.fields.librarySort;
  refs.buildTitleInput.placeholder = currentUi.placeholders.title;
  refs.buildAuthorInput.placeholder = currentUi.placeholders.author;
  refs.buildSummaryInput.placeholder = currentUi.placeholders.summary;
  refs.buildNotesInput.placeholder = currentUi.placeholders.notes;
  refs.cardSearchInput.placeholder = currentUi.placeholders.search;

}

function renderCharacterTabs() {
  refs.characterTabs.innerHTML = '';
  PLAYABLE_CHARACTERS.forEach((character) => {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'character-tab';
    button.dataset.character = character;
    button.innerHTML = `<strong>${escapeHtml(getCharacterLabel(character))}</strong>`;
    if (character === state.activeCharacter) {
      button.classList.add('is-active');
    }
    refs.characterTabs.appendChild(button);
  });
}

function renderCharacterSummary() {
  let info = CHARACTER_INFO[state.activeCharacter];
  refs.characterSummary.innerHTML = '';

  [
    { label: ui().labels.hp, value: info.hp },
    { label: ui().labels.relic, value: getRelicLabel(info.relic) },
    { label: ui().labels.identity, value: getIdentityLabel(info.identity) }
  ].forEach((item) => {
    let card = document.createElement('article');
    card.className = 'summary-card';
    card.innerHTML = `
      <span class="summary-label">${item.label}</span>
      <p class="summary-value">${item.value}</p>
    `;
    refs.characterSummary.appendChild(card);
  });
}

function renderBuildList() {
  let builds = buildsForActiveCharacter();
  refs.buildList.innerHTML = '';

  if (!builds.length) {
    refs.buildList.innerHTML = `<div class="empty-state">${ui().empty.builds}</div>`;
    return;
  }

  builds.forEach((build, index) => {
    let article = document.createElement('article');
    article.className = 'build-card';
    article.dataset.buildId = build.id;
    if (build.id === state.activeBuildId) {
      article.classList.add('is-active');
    }

    article.innerHTML = `
      <div>
        <p class="section-kicker">${build.isSample ? ui().labels.sample : ui().labels.custom}</p>
        <h3 class="build-title">${escapeHtml(build.title)}</h3>
      </div>
      <div>
        <div class="build-card-actions">
          <button class="pill-button" type="button" data-pin-build="${build.id}">${state.pinnedIds.has(build.id) ? ui().buttons.unpin : ui().buttons.pin}</button>
        </div>
        <div class="build-rank">${String(index + 1).padStart(2, '0')}</div>
      </div>
    `;

    refs.buildList.appendChild(article);
  });
}

function renderEditorFields() {
  refs.buildTitleInput.value = state.draft.title;
  refs.buildAuthorInput.value = state.draft.author;
  refs.buildSummaryInput.value = state.draft.summary;
  refs.buildNotesInput.value = state.draft.notes;
  refs.buildCharacterSelect.innerHTML = PLAYABLE_CHARACTERS.map((character) => `<option value="${character}">${escapeHtml(getCharacterLabel(character))}</option>`).join('');
  refs.buildCharacterSelect.value = state.activeCharacter;
  refs.deleteBuildButton.disabled = !state.activeBuildId || String(state.activeBuildId).startsWith('sample-');
}

function renderSelectedCards() {
  let items = buildCards(state.draft);
  refs.selectedCards.innerHTML = '';

  if (!items.length) {
    refs.selectedCards.innerHTML = `<div class="empty-state">${ui().empty.selected}</div>`;
    return;
  }

  items.sort((a, b) => (a.card.sortCost ?? 999) - (b.card.sortCost ?? 999) || getCardName(a.card).localeCompare(getCardName(b.card), getLocaleTag()));

  items.forEach((entry) => {
    let text = getCardText(entry.card, entry.upgraded);
    let card = document.createElement('article');
    card.className = 'selected-card';
    card.innerHTML = `
      <div class="selected-card-head">
        <div>
          <p class="selected-card-name">${escapeHtml(getCardName(entry.card, entry.upgraded))}</p>
          <div class="card-meta">
            <span class="build-meta">${escapeHtml(getTypeLabel(entry.card.type))}</span>
            <span class="build-meta">${escapeHtml(getRarityLabel(entry.card.rarity))}</span>
            <span class="build-meta">${entry.card.cost}</span>
          </div>
        </div>
        <span class="stat-chip">x${entry.quantity}</span>
      </div>
      <p class="selected-card-text">${escapeHtml(text)}</p>
      <div class="selected-card-controls">
        <button class="pill-button" type="button" data-adjust-card="${entry.card.id}" data-upgraded="${entry.upgraded}" data-delta="-1">-1</button>
        <button class="pill-button" type="button" data-adjust-card="${entry.card.id}" data-upgraded="${entry.upgraded}" data-delta="1">+1</button>
        <button class="pill-button" type="button" data-toggle-upgrade="${entry.card.id}" data-upgraded="${entry.upgraded}">${ui().buttons.upgrade}</button>
        <button class="pill-button" type="button" data-remove-card="${entry.card.id}" data-upgraded="${entry.upgraded}">${ui().buttons.remove}</button>
      </div>
    `;
    refs.selectedCards.appendChild(card);
  });
}

function renderFilters() {
  let cards = availableCardsForCharacter(state.activeCharacter);
  let types = [...new Set(cards.map((card) => card.type))].sort((a, b) => getTypeLabel(a).localeCompare(getTypeLabel(b), getLocaleTag()));
  let rarities = [...new Set(cards.map((card) => card.rarity))].sort((a, b) => getRarityLabel(a).localeCompare(getRarityLabel(b), getLocaleTag()));
  let costs = [...new Set(cards.map((card) => String(card.cost)))].sort((a, b) => {
    let aNum = Number(a);
    let bNum = Number(b);
    if (Number.isFinite(aNum) && Number.isFinite(bNum)) {
      return aNum - bNum;
    }
    return a.localeCompare(b);
  });

  refs.typeFilterSelect.innerHTML = optionList(types, ui().labels.all, getTypeLabel);
  refs.rarityFilterSelect.innerHTML = optionList(rarities, ui().labels.all, getRarityLabel);
  refs.costFilterSelect.innerHTML = optionList(costs, ui().labels.all);
  refs.librarySortSelect.innerHTML = `
    <option value="name">${ui().librarySortOptions.name}</option>
    <option value="cost">${ui().librarySortOptions.cost}</option>
    <option value="rarity">${ui().librarySortOptions.rarity}</option>
    <option value="type">${ui().librarySortOptions.type}</option>
  `;
  refs.cardSearchInput.value = state.filters.search;
  refs.typeFilterSelect.value = state.filters.type;
  refs.rarityFilterSelect.value = state.filters.rarity;
  refs.costFilterSelect.value = state.filters.cost;
  refs.librarySortSelect.value = state.filters.librarySort;
}

function renderLibrary() {
  renderFilters();
  let cards = filteredCards();
  refs.libraryList.innerHTML = '';

  if (!cards.length) {
    refs.libraryList.innerHTML = `<div class="empty-state">${ui().empty.library}</div>`;
    return;
  }

  cards.forEach((card) => {
    let article = document.createElement('article');
    article.className = 'library-card';
    article.innerHTML = `
      <div class="library-card-main">
        <img class="library-thumb" src="${escapeHtml(card.portraitImageUrl || card.imageUrl)}" alt="${escapeHtml(getCardName(card))}">
        <div>
          <div class="library-card-head">
            <div>
              <p class="library-card-name">${escapeHtml(getCardName(card))}</p>
              <div class="card-meta">
                <span class="build-meta">${escapeHtml(getCharacterLabel(card.character))}</span>
                <span class="build-meta">${escapeHtml(getTypeLabel(card.type))}</span>
                <span class="build-meta">${escapeHtml(getRarityLabel(card.rarity))}</span>
                <span class="build-meta">${card.cost}</span>
              </div>
            </div>
          </div>
          <p class="library-card-text">${escapeHtml(getCardText(card))}</p>
          <div class="library-card-actions">
            <button class="pill-button pill-button-primary" type="button" data-add-card="${card.id}" data-upgraded="false">${ui().buttons.addBase}</button>
            <button class="pill-button" type="button" data-add-card="${card.id}" data-upgraded="true">${ui().buttons.addUpgraded}</button>
            <a class="pill-button" href="${escapeHtml(card.sourceUrl)}" target="_blank" rel="noreferrer">${ui().buttons.source}</a>
          </div>
        </div>
      </div>
    `;
    refs.libraryList.appendChild(article);
  });
}

function renderEditor() {
  renderEditorFields();
  renderSelectedCards();
  renderLibrary();
}

function render() {
  ensureActiveBuild();
  applyTheme();
  renderStaticText();
  refs.languageSelect.value = state.currentLanguage;
  refs.themeSelect.value = state.currentTheme;
  refs.sortSelect.value = state.currentSort;
  renderCharacterTabs();
  renderCharacterSummary();
  renderBuildList();
  renderEditor();
}

refs.languageSelect.addEventListener('change', (event) => {
  state.currentLanguage = languages.includes(event.target.value) ? event.target.value : 'en';
  render();
});

refs.themeSelect.addEventListener('change', (event) => {
  state.currentTheme = event.target.value === 'light' ? 'light' : 'dark';
  window.localStorage.setItem('theme', state.currentTheme);
  applyTheme();
});

refs.sortSelect.addEventListener('change', (event) => {
  state.currentSort = event.target.value === 'popular' ? 'popular' : 'latest';
  renderBuildList();
});

refs.characterTabs.addEventListener('click', (event) => {
  let button = event.target.closest('[data-character]');
  if (!button) {
    return;
  }
  state.activeCharacter = button.dataset.character;
  state.filters = { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' };
  state.activeBuildId = null;
  state.draft = createEmptyBuild(state.activeCharacter);
  render();
});

refs.buildList.addEventListener('click', (event) => {
  let pinButton = event.target.closest('[data-pin-build]');
  if (pinButton) {
    event.stopPropagation();
    togglePinned(pinButton.dataset.pinBuild);
    return;
  }

  let buildCard = event.target.closest('[data-build-id]');
  if (!buildCard) {
    return;
  }
  loadBuildIntoDraft(buildCard.dataset.buildId);
});

refs.newBuildButton.addEventListener('click', () => {
  resetDraft(state.activeCharacter);
});

refs.duplicateBuildButton.addEventListener('click', () => {
  duplicateCurrentBuild();
});

refs.saveBuildButton.addEventListener('click', () => {
  saveCurrentBuild();
});

refs.deleteBuildButton.addEventListener('click', () => {
  deleteCurrentBuild();
});

refs.buildTitleInput.addEventListener('input', (event) => updateDraftField('title', event.target.value));
refs.buildAuthorInput.addEventListener('input', (event) => updateDraftField('author', event.target.value));
refs.buildSummaryInput.addEventListener('input', (event) => updateDraftField('summary', event.target.value));
refs.buildNotesInput.addEventListener('input', (event) => updateDraftField('notes', event.target.value));
refs.buildCharacterSelect.addEventListener('change', (event) => {
  state.activeCharacter = event.target.value;
  state.activeBuildId = null;
  state.draft.character = event.target.value;
  state.draft.cards = state.draft.cards.filter((entry) => {
    let card = cardMap.get(entry.cardId);
    return card && (card.character === state.activeCharacter || card.character === 'Colorless');
  });
  render();
});

refs.cardSearchInput.addEventListener('input', (event) => {
  state.filters.search = event.target.value;
  renderLibrary();
});

refs.typeFilterSelect.addEventListener('change', (event) => {
  state.filters.type = event.target.value;
  renderLibrary();
});

refs.rarityFilterSelect.addEventListener('change', (event) => {
  state.filters.rarity = event.target.value;
  renderLibrary();
});

refs.costFilterSelect.addEventListener('change', (event) => {
  state.filters.cost = event.target.value;
  renderLibrary();
});

refs.librarySortSelect.addEventListener('change', (event) => {
  state.filters.librarySort = event.target.value;
  renderLibrary();
});

refs.libraryList.addEventListener('click', (event) => {
  let button = event.target.closest('[data-add-card]');
  if (!button) {
    return;
  }
  addCardToDraft(button.dataset.addCard, button.dataset.upgraded === 'true');
});

refs.selectedCards.addEventListener('click', (event) => {
  let adjust = event.target.closest('[data-adjust-card]');
  if (adjust) {
    adjustCardQuantity(adjust.dataset.adjustCard, adjust.dataset.upgraded === 'true', Number(adjust.dataset.delta));
    return;
  }

  let remove = event.target.closest('[data-remove-card]');
  if (remove) {
    removeCard(remove.dataset.removeCard, remove.dataset.upgraded === 'true');
    return;
  }

  let upgrade = event.target.closest('[data-toggle-upgrade]');
  if (upgrade) {
    toggleUpgrade(upgrade.dataset.toggleUpgrade, upgrade.dataset.upgraded === 'true');
  }
});

render();
