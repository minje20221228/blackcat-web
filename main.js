let PLAYABLE_CHARACTERS = ['Ironclad', 'Silent', 'Regent', 'Necrobinder', 'Defect'];
let STORAGE_KEY = 'sts2-build-lab-builds-v2';
let PINNED_KEY = 'sts2-build-lab-pins-v2';
let languages = ['en', 'ko', 'ja', 'es'];

let CHARACTER_INFO = {
  Ironclad: {
    hp: 80,
    relic: 'Burning Blood',
    identity: 'Strength, self-damage, Exhaust',
    summary: {
      en: 'A frontloaded bruiser built around Strength scaling, self-damage payoffs, and Exhaust routing.',
      ko: '힘 스택, 자해 보상, 소진 운영으로 압박하는 정면 돌파형 캐릭터.'
    },
    starterDeck: ['Strike x5', 'Defend x4', 'Bash x1']
  },
  Silent: {
    hp: 70,
    relic: 'Ring of the Snake',
    identity: 'Discard, Shiv, Poison',
    summary: {
      en: 'A tempo character that bends fights through Discard, Shiv bursts, and Poison scaling.',
      ko: '버리기 압축, 쉬브 폭딜, 독 누적으로 리듬을 만드는 템포형 캐릭터.'
    },
    starterDeck: ['Strike x5', 'Defend x5', 'Neutralize x1', 'Survivor x1']
  },
  Regent: {
    hp: 75,
    relic: 'Divine Right',
    identity: 'Stars, control, payoff turns',
    summary: {
      en: 'A setup-heavy character that turns Star generation into large celestial payoff turns.',
      ko: '별 자원을 모아 폭발 턴과 제어력을 만드는 세팅형 캐릭터.'
    },
    starterDeck: ['Strike x4', 'Defend x4', 'Falling Star x1', 'Venerate x1']
  },
  Necrobinder: {
    hp: 66,
    relic: 'Bound Phylactery',
    identity: 'Summon, Doom, Osty, Souls',
    summary: {
      en: 'A technical summoner using Souls, Doom thresholds, and board presence from Osty.',
      ko: '영혼 관리와 소환물, 둠 임계치를 함께 굴리는 고난도 소환형 캐릭터.'
    },
    starterDeck: ['Strike x5', 'Defend x5', 'Bodyguard x1', 'Unleash x1']
  },
  Defect: {
    hp: 70,
    relic: 'Cracked Core',
    identity: 'Orbs, Focus, Evoke',
    summary: {
      en: 'An engine character that scales through Orb sequencing, Focus, and Evoke timing.',
      ko: '오브, 집중, 발동 순서를 굴려 엔진을 완성하는 빌드형 캐릭터.'
    },
    starterDeck: ['Strike x4', 'Defend x4', 'Zap x1', 'Dualcast x1']
  }
};

let CHARACTER_RELICS = {
  Ironclad: [
    { name: 'Burning Blood', tier: 'Starter', description: { en: 'At the end of combat, heal 6 HP.', ko: '전투 종료 시 체력을 6 회복합니다.' } },
    { name: 'Black Blood', tier: 'Boss', description: { en: 'At the end of combat, heal 12 HP.', ko: '전투 종료 시 체력을 12 회복합니다.' } },
    { name: 'Paper Frog', tier: 'Rare', description: { en: 'Enemies with Vulnerable take more damage than normal.', ko: '취약 상태의 적이 평소보다 더 큰 피해를 받습니다.' } },
    { name: 'Red Skull', tier: 'Common', description: { en: 'Gain extra Strength while at low HP.', ko: '체력이 낮을 때 추가 힘을 얻습니다.' } }
  ],
  Silent: [
    { name: 'Ring of the Snake', tier: 'Starter', description: { en: 'At the start of combat, draw 2 additional cards.', ko: '전투 시작 시 카드를 2장 더 뽑습니다.' } },
    { name: 'Ring of the Serpent', tier: 'Boss', description: { en: 'At the start of your turn, draw 1 additional card.', ko: '매 턴 시작 시 카드를 1장 더 뽑습니다.' } },
    { name: 'Snecko Skull', tier: 'Rare', description: { en: 'Poison you apply is increased.', ko: '적에게 거는 독 수치가 증가합니다.' } },
    { name: 'The Specimen', tier: 'Rare', description: { en: 'When an enemy dies, transfer its Poison to another enemy.', ko: '적이 죽으면 그 적의 독이 다른 적에게 이전됩니다.' } }
  ],
  Regent: [
    { name: 'Divine Right', tier: 'Starter', description: { en: 'Starts fights with extra support for Star generation.', ko: '전투 시작 시 별 자원 운영을 돕는 보너스를 얻습니다.' } },
    { name: 'Royal Censer', tier: 'Rare', description: { en: 'Improves long setup turns and celestial payoff lines.', ko: '긴 세팅 턴 이후 천체 계열 보상을 더 크게 만듭니다.' } },
    { name: 'Astral Dial', tier: 'Rare', description: { en: 'Smooths conversion from generated Stars into burst turns.', ko: '생성한 별 자원을 폭발 턴으로 더 부드럽게 연결합니다.' } },
    { name: 'Asterism', tier: 'Boss', description: { en: 'Stabilizes Star flow for larger Regent payoff turns.', ko: '별 자원 흐름을 안정화해 리젠트의 폭발 턴을 강화합니다.' } }
  ],
  Necrobinder: [
    { name: 'Bound Phylactery', tier: 'Starter', description: { en: 'Stabilizes Soul flow so summon lines come online faster.', ko: '영혼 순환을 안정화해 소환 운영을 더 빨리 켭니다.' } },
    { name: 'Soul Cage', tier: 'Rare', description: { en: 'Preserves and recycles Soul value in longer fights.', ko: '영혼 가치를 보존해 장기전 운영을 돕습니다.' } },
    { name: 'Funeral Bell', tier: 'Rare', description: { en: 'Improves Doom and sacrifice-oriented game plans.', ko: '둠과 희생 중심 운영의 보상을 키워 줍니다.' } },
    { name: 'Wake Candle', tier: 'Common', description: { en: 'Helps Ethereal and sacrifice lines stabilize faster.', ko: '에테리얼과 희생 운영을 더 안정적으로 연결합니다.' } }
  ],
  Defect: [
    { name: 'Cracked Core', tier: 'Starter', description: { en: 'At the start of each combat, Channel 1 Lightning.', ko: '전투 시작 시 번개 오브를 채널링합니다.' } },
    { name: 'Frozen Core', tier: 'Boss', description: { en: 'At the end of your turn, Channel Frost if you have empty orb slots.', ko: '턴 종료 시 빈 오브 슬롯이 있으면 냉기 오브를 채널링합니다.' } },
    { name: 'Data Disk', tier: 'Common', description: { en: 'Start each combat with 1 Focus.', ko: '전투 시작 시 집중 1을 얻습니다.' } },
    { name: 'Emotion Chip', tier: 'Rare', description: { en: 'Losing HP opens extra Orb comeback windows.', ko: '체력을 잃을 때 오브 운영의 반격 각을 열어 줍니다.' } }
  ]
};

let GLOBAL_RELICS = [
  { name: 'Anchor', tier: 'Common', description: { en: 'Start each combat with 10 Block.', ko: '전투 시작 시 방어도 10을 얻습니다.' } },
  { name: 'Ancient Tea Set', tier: 'Common', description: { en: 'After a Rest Site, start the next combat with 2 extra Energy.', ko: '휴식처 방문 후 다음 전투에서 에너지 2를 추가로 얻습니다.' } },
  { name: 'Bag of Marbles', tier: 'Common', description: { en: 'At the start of combat, apply Vulnerable to all enemies.', ko: '전투 시작 시 모든 적에게 취약을 겁니다.' } },
  { name: 'Bag of Preparation', tier: 'Common', description: { en: 'At the start of combat, draw 2 additional cards.', ko: '전투 시작 시 카드를 2장 더 뽑습니다.' } },
  { name: 'Blood Vial', tier: 'Common', description: { en: 'At the start of combat, heal 2 HP.', ko: '전투 시작 시 체력을 2 회복합니다.' } },
  { name: 'Bronze Scales', tier: 'Common', description: { en: 'Start combat with Thorns.', ko: '전투 시작 시 가시를 얻습니다.' } },
  { name: 'Centennial Puzzle', tier: 'Uncommon', description: { en: 'The first time you lose HP each combat, draw 3 cards.', ko: '전투마다 처음 체력을 잃을 때 카드를 3장 뽑습니다.' } },
  { name: 'Dream Catcher', tier: 'Common', description: { en: 'Whenever you Rest, see a card reward.', ko: '휴식할 때 카드 보상을 확인합니다.' } },
  { name: 'Happy Flower', tier: 'Common', description: { en: 'Every 3 turns, gain 1 Energy.', ko: '3턴마다 에너지 1을 얻습니다.' } },
  { name: 'Lantern', tier: 'Common', description: { en: 'Start each combat with 1 additional Energy.', ko: '전투 시작 시 추가 에너지 1을 얻습니다.' } },
  { name: 'Oddly Smooth Stone', tier: 'Common', description: { en: 'Gain 1 Dexterity.', ko: '민첩 1을 얻습니다.' } },
  { name: 'Orichalcum', tier: 'Common', description: { en: 'If you end your turn without Block, gain 6 Block.', ko: '방어도 없이 턴을 끝내면 방어도 6을 얻습니다.' } },
  { name: 'Preserved Insect', tier: 'Common', description: { en: 'Elite enemies start combat with less HP.', ko: '엘리트 적이 더 낮은 체력으로 전투를 시작합니다.' } },
  { name: 'Regal Pillow', tier: 'Uncommon', description: { en: 'Resting heals more HP.', ko: '휴식 시 체력을 더 많이 회복합니다.' } },
  { name: 'Vajra', tier: 'Common', description: { en: 'Gain 1 Strength.', ko: '힘 1을 얻습니다.' } },
  { name: 'War Paint', tier: 'Common', description: { en: 'Upgrade 2 random Skills.', ko: '무작위 스킬 카드 2장을 강화합니다.' } },
  { name: 'Whetstone', tier: 'Common', description: { en: 'Upgrade 2 random Attacks.', ko: '무작위 공격 카드 2장을 강화합니다.' } },
  { name: 'Horn Cleat', tier: 'Uncommon', description: { en: 'Every 2 turns, gain 14 Block.', ko: '2턴마다 방어도 14를 얻습니다.' } },
  { name: 'Incense Burner', tier: 'Rare', description: { en: 'Every 6 turns, gain 1 Intangible.', ko: '6턴마다 무형 1을 얻습니다.' } },
  { name: 'Toxic Egg', tier: 'Boss', description: { en: 'Skills added to your deck are upgraded.', ko: '덱에 추가하는 스킬 카드가 강화된 상태로 들어옵니다.' } }
];

let localizedTerms = {
  characters: {
    Ironclad: { en: 'Ironclad', ko: '아이언클래드', ja: 'アイアンクラッド', es: 'Ironclad' },
    Silent: { en: 'Silent', ko: '사일런트', ja: 'サイレント', es: 'Silent' },
    Regent: { en: 'Regent', ko: '리젠트', ja: 'リージェント', es: 'Regent' },
    Necrobinder: { en: 'Necrobinder', ko: '네크로바인더', ja: 'ネクロバインダー', es: 'Necrobinder' },
    Defect: { en: 'Defect', ko: '디펙트', ja: 'ディフェクト', es: 'Defect' },
    Colorless: { en: 'Colorless', ko: '무색', ja: '無色', es: 'Incolora' }
  },
  identities: {
    'Strength, self-damage, Exhaust': { en: 'Strength, self-damage, Exhaust', ko: '힘, 자해, 소진' },
    'Discard, Shiv, Poison': { en: 'Discard, Shiv, Poison', ko: '버리기, 쉬브, 독' },
    'Stars, control, payoff turns': { en: 'Stars, control, payoff turns', ko: '별, 제어, 폭발 턴' },
    'Summon, Doom, Osty, Souls': { en: 'Summon, Doom, Osty, Souls', ko: '소환, 둠, 오스티, 영혼' },
    'Orbs, Focus, Evoke': { en: 'Orbs, Focus, Evoke', ko: '오브, 집중, 발동' },
    Starter: { en: 'Starter', ko: '시작 유물' },
    Common: { en: 'Common', ko: '공용 유물' },
    Uncommon: { en: 'Uncommon', ko: '언커먼 유물' },
    Rare: { en: 'Rare', ko: '희귀 유물' },
    Boss: { en: 'Boss', ko: '보스 유물' },
    Shop: { en: 'Shop', ko: '상점 유물' },
    Event: { en: 'Event', ko: '이벤트 유물' },
    Ancient: { en: 'Ancient', ko: '고대 유물' }
  },
  types: {
    Attack: { en: 'Attack', ko: '공격' },
    Skill: { en: 'Skill', ko: '스킬' },
    Power: { en: 'Power', ko: '파워' },
    Status: { en: 'Status', ko: '상태' },
    Curse: { en: 'Curse', ko: '저주' }
  },
  rarities: {
    Starter: { en: 'Starter', ko: '시작' },
    Common: { en: 'Common', ko: '일반' },
    Uncommon: { en: 'Uncommon', ko: '언커먼' },
    Rare: { en: 'Rare', ko: '레어' },
    Special: { en: 'Special', ko: '특수' },
    Ancient: { en: 'Ancient', ko: '고대' },
    Status: { en: 'Status', ko: '상태' },
    Curse: { en: 'Curse', ko: '저주' }
  }
};

let RELIC_IMAGE_MAP = {
  'Burning Blood': 'burning_blood',
  'Black Blood': 'black_blood',
  'Paper Frog': 'paper_frog',
  'Red Skull': 'red_skull',
  'Ring of the Snake': 'ring_of_the_snake',
  'Ring of the Serpent': 'ring_of_the_serpent',
  'Snecko Skull': 'snecko_skull',
  'The Specimen': 'the_specimen',
  'Divine Right': 'divine_right',
  'Royal Censer': 'royal_censer',
  'Astral Dial': 'astral_dial',
  'Asterism': 'asterism',
  'Bound Phylactery': 'bound_phylactery',
  'Soul Cage': 'soul_cage',
  'Funeral Bell': 'funeral_bell',
  'Wake Candle': 'wake_candle',
  'Cracked Core': 'cracked_core',
  'Frozen Core': 'frozen_core',
  'Data Disk': 'data_disk',
  'Emotion Chip': 'emotion_chip',
  'Anchor': 'anchor',
  'Ancient Tea Set': 'ancient_tea_set',
  'Bag of Marbles': 'bag_of_marbles',
  'Bag of Preparation': 'bag_of_preparation',
  'Blood Vial': 'blood_vial',
  'Bronze Scales': 'bronze_scales',
  'Centennial Puzzle': 'centennial_puzzle',
  'Dream Catcher': 'dream_catcher',
  'Happy Flower': 'happy_flower',
  'Lantern': 'lantern',
  'Oddly Smooth Stone': 'oddly_smooth_stone',
  'Orichalcum': 'orichalcum',
  'Preserved Insect': 'preserved_insect',
  'Regal Pillow': 'regal_pillow',
  'Vajra': 'vajra',
  'War Paint': 'war_paint',
  'Whetstone': 'whetstone',
  'Horn Cleat': 'horn_cleat',
  'Incense Burner': 'incense_burner',
  'Toxic Egg': 'toxic_egg',
  'Chemical X': 'chemical_x',
  'Cauldron': 'cauldron',
  'Brimstone': 'brimstone',
  'Dolly\'s Mirror': 'dollys_mirror',
  'Big Mushroom': 'big_mushroom',
  'Darkstone Periapt': 'darkstone_periapt',
  'Golden Pearl': 'golden_pearl'
};

let CARD_LOCALIZATION_TABLE = window.STS2_CARD_LOCALIZATION || {
  ko: {},
  ja: {},
  es: {}
};

let RELIC_NAME_MAP = {
  'Burning Blood': { ko: '불타는 피' },
  'Black Blood': { ko: '검은 피' },
  'Paper Frog': { ko: '종이 개구리' },
  'Red Skull': { ko: '붉은 해골' },
  'Ring of the Snake': { ko: '뱀의 반지' },
  'Ring of the Serpent': { ko: '뱀신의 반지' },
  'Snecko Skull': { ko: '스네코 해골' },
  'The Specimen': { ko: '표본 병' },
  'Divine Right': { ko: '신성한 권리' },
  'Royal Censer': { ko: '왕실 향로' },
  'Astral Dial': { ko: '성계 다이얼' },
  'Asterism': { ko: '성군' },
  'Bound Phylactery': { ko: '속박된 성물함' },
  'Soul Cage': { ko: '영혼 우리' },
  'Funeral Bell': { ko: '장례 종' },
  'Wake Candle': { ko: '각성 촛불' },
  'Cracked Core': { ko: '금 간 코어' },
  'Frozen Core': { ko: '얼어붙은 코어' },
  'Data Disk': { ko: '데이터 디스크' },
  'Emotion Chip': { ko: '감정 칩' },
  'Anchor': { ko: '닻' },
  'Ancient Tea Set': { ko: '오래된 다기 세트' },
  'Bag of Marbles': { ko: '구슬 주머니' },
  'Bag of Preparation': { ko: '준비 주머니' },
  'Blood Vial': { ko: '혈액 바이알' },
  'Bronze Scales': { ko: '청동 비늘' },
  'Centennial Puzzle': { ko: '백주년 퍼즐' },
  'Dream Catcher': { ko: '드림캐처' },
  'Happy Flower': { ko: '행복한 꽃' },
  'Lantern': { ko: '랜턴' },
  'Oddly Smooth Stone': { ko: '이상하게 매끈한 돌' },
  'Orichalcum': { ko: '오리칼쿰' },
  'Preserved Insect': { ko: '보존된 곤충' },
  'Regal Pillow': { ko: '호화 베개' },
  'Vajra': { ko: '바즈라' },
  'War Paint': { ko: '전쟁 채색' },
  'Whetstone': { ko: '숫돌' },
  'Horn Cleat': { ko: '뿔 클리트' },
  'Incense Burner': { ko: '향로' },
  'Toxic Egg': { ko: '맹독 알' },
  'Chemical X': { ko: '케미컬 X' },
  'Cauldron': { ko: '가마솥' },
  'Brimstone': { ko: '유황' },
  'Dolly\'s Mirror': { ko: '돌리의 거울' },
  'Big Mushroom': { ko: '거대 버섯' },
  'Darkstone Periapt': { ko: '암흑석 부적' },
  'Golden Pearl': { ko: '황금 진주' }
};

let uiText = {
  en: {
    heroTitle: 'Build Lab',
    nav: { cards: 'Cards', relics: 'Relics', builds: 'Builds' },
    sortLabel: 'Sort',
    sortOptions: { latest: 'Latest', popular: 'Pinned' },
    characterKicker: 'Characters',
    characterHeading: 'Choose a character',
    libraryKicker: 'Cards',
    libraryHeading: 'Card Library',
    relicsKicker: 'Relics',
    relicsHeading: 'Full Relic Collection',
    buildlistKicker: 'Builds',
    buildlistHeading: 'Saved player builds',
    builderKicker: 'Build Editor',
    builderHeading: 'Edit and save a build',
    editorKicker: 'Deck Sheet',
    editorHeading: 'Selected cards',
    pickerKicker: 'Card Picker',
    pickerHeading: 'Add cards to this build',
    pickerNote: 'Use the shared card filters, then push cards into the editor here.',
    relicSections: { character: 'Character Relics', global: 'Shared Relics' },
    librarySortOptions: { name: 'Name', cost: 'Cost', rarity: 'Rarity', type: 'Type' },
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
      librarySort: 'Card sort'
    },
    placeholders: {
      title: 'Example: Zero-cost Sly Tempo',
      author: 'Name or handle',
      summary: 'How does this build win and what is it trying to assemble?',
      notes: 'Route notes, upgrade priorities, elite targets, risky inclusions.',
      search: 'Search by card name or text'
    },
    buttons: {
      newBuild: 'Open editor',
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
      relic: 'Start relic',
      identity: 'Identity',
      starterDeck: 'Starter deck',
      cardCount: 'Card Count',
      uniqueCards: 'Unique Cards',
      avgCost: 'Avg Cost',
      updated: 'Updated',
      all: 'All',
      noImage: 'No image',
      draft: 'Draft',
      saved: 'Saved',
      energy: 'Energy',
      upgraded: 'Upgraded'
    },
    empty: {
      builds: 'No saved builds for this character yet. Open the editor and save one.',
      selected: 'No cards selected yet. Add cards from the picker.',
      library: 'No cards matched the current filters.',
      relics: 'No relic notes are available for this character yet.'
    },
    status: {
      saved: 'Build saved.',
      deleted: 'Build deleted.',
      needCards: 'Add at least one card before saving.',
      reset: 'Build editor opened with an empty draft.',
      duplicated: 'Draft duplicated.',
      loaded: 'Build loaded into the editor.'
    }
  },
  ko: {
    heroTitle: '빌드 랩',
    nav: { cards: '카드', relics: '유물', builds: '빌드' },
    sortLabel: '정렬',
    sortOptions: { latest: '최신순', popular: '고정순' },
    characterKicker: '캐릭터',
    characterHeading: '캐릭터 선택',
    libraryKicker: '카드',
    libraryHeading: '카드 라이브러리',
    relicsKicker: '유물',
    relicsHeading: '전체 유물 컬렉션',
    buildlistKicker: '빌드',
    buildlistHeading: '저장된 유저 빌드',
    builderKicker: '빌드 편집기',
    builderHeading: '빌드 수정 및 저장',
    editorKicker: '덱 시트',
    editorHeading: '선택한 카드',
    pickerKicker: '카드 선택',
    pickerHeading: '이 빌드에 카드 추가',
    pickerNote: '카드 화면과 같은 필터를 그대로 쓰면서 여기서 빌드에 카드를 넣을 수 있습니다.',
    relicSections: { character: '캐릭터 전용 유물', global: '공용 전체 유물' },
    librarySortOptions: { name: '이름순', cost: '코스트순', rarity: '희귀도순', type: '타입순' },
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
      librarySort: '카드 정렬'
    },
    placeholders: {
      title: '예: 0코 슬라이 템포',
      author: '닉네임 또는 이름',
      summary: '이 빌드가 무엇을 모으고 어떻게 이기는지 적어 주세요.',
      notes: '루트, 강화 우선순위, 엘리트 기준, 위험 카드 등을 적어 주세요.',
      search: '카드 이름이나 텍스트 검색'
    },
    buttons: {
      newBuild: '편집기 열기',
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
      starterDeck: '시작 덱',
      cardCount: '총 카드 수',
      uniqueCards: '고유 카드 수',
      avgCost: '평균 코스트',
      updated: '업데이트',
      all: '전체',
      noImage: '이미지 없음',
      draft: '초안',
      saved: '저장됨',
      energy: '에너지',
      upgraded: '강화 후'
    },
    empty: {
      builds: '이 캐릭터에는 아직 저장된 빌드가 없습니다. 편집기를 열고 저장하면 여기에 올라옵니다.',
      selected: '아직 선택된 카드가 없습니다. 오른쪽 카드 선택 영역에서 추가해 주세요.',
      library: '현재 필터에 맞는 카드가 없습니다.',
      relics: '이 캐릭터의 유물 정보가 아직 없습니다.'
    },
    status: {
      saved: '빌드를 저장했습니다.',
      deleted: '빌드를 삭제했습니다.',
      needCards: '카드를 1장 이상 추가한 뒤 저장해 주세요.',
      reset: '빈 빌드 편집기를 열었습니다.',
      duplicated: '현재 초안을 복제했습니다.',
      loaded: '빌드를 편집기로 불러왔습니다.'
    }
  }
};

GLOBAL_RELICS = GLOBAL_RELICS.concat([
  { name: 'Chemical X', tier: 'Shop', description: { en: 'The effects of your cost X cards are increased by 2.', ko: 'X 코스트 카드의 효과가 2 증가합니다.' } },
  { name: 'Cauldron', tier: 'Shop', description: { en: 'Upon pickup, brew 5 random potions.', ko: '획득 시 무작위 물약 5개를 제조합니다.' } },
  { name: 'Brimstone', tier: 'Shop', description: { en: 'At the start of your turn, gain 2 Strength and ALL enemies gain 1 Strength.', ko: '턴 시작 시 힘 2를 얻고 모든 적이 힘 1을 얻습니다.' } },
  { name: 'Dolly\'s Mirror', tier: 'Shop', description: { en: 'Upon pickup, obtain an additional copy of a card in your Deck.', ko: '획득 시 덱의 카드 1장을 복사합니다.' } },
  { name: 'Big Mushroom', tier: 'Event', description: { en: 'Upon pickup, raise your Max HP by 20. At the start of each combat, draw 2 fewer cards.', ko: '획득 시 최대 체력을 20 올립니다. 전투 시작 시 카드 2장을 덜 뽑습니다.' } },
  { name: 'Darkstone Periapt', tier: 'Event', description: { en: 'Whenever you obtain a Curse, raise your Max HP by 6.', ko: '저주를 얻을 때마다 최대 체력이 6 증가합니다.' } },
  { name: 'Golden Pearl', tier: 'Ancient', description: { en: 'Upon pickup, gain 150 Gold.', ko: '획득 시 골드 150을 얻습니다.' } }
]);

let refs = {
  heroTitle: document.getElementById('hero-title'),
  navCards: document.getElementById('nav-cards'),
  navRelics: document.getElementById('nav-relics'),
  navBuilds: document.getElementById('nav-builds'),
  languageButton: document.getElementById('language-button'),
  languageMenu: document.getElementById('language-menu'),
  themeLightButton: document.getElementById('theme-light-button'),
  themeDarkButton: document.getElementById('theme-dark-button'),
  characterKicker: document.getElementById('character-kicker'),
  characterHeading: document.getElementById('character-heading'),
  characterTabs: document.getElementById('character-tabs'),
  characterSummary: document.getElementById('character-summary'),
  cardsPanel: document.getElementById('cards-panel'),
  relicsPanel: document.getElementById('relics-panel'),
  buildsPanel: document.getElementById('builds-panel'),
  libraryKicker: document.getElementById('library-kicker'),
  libraryHeading: document.getElementById('library-heading'),
  relicsKicker: document.getElementById('relics-kicker'),
  relicsHeading: document.getElementById('relics-heading'),
  relicsGrid: document.getElementById('relics-grid'),
  buildlistKicker: document.getElementById('buildlist-kicker'),
  buildlistHeading: document.getElementById('buildlist-heading'),
  sortLabel: document.getElementById('sort-label'),
  sortSelect: document.getElementById('sort-select'),
  buildStatus: document.getElementById('build-status'),
  buildList: document.getElementById('build-list'),
  builderPanel: document.getElementById('builder-panel'),
  builderKicker: document.getElementById('builder-kicker'),
  builderHeading: document.getElementById('builder-heading'),
  editorKicker: document.getElementById('editor-kicker'),
  editorHeading: document.getElementById('editor-heading'),
  pickerKicker: document.getElementById('picker-kicker'),
  pickerHeading: document.getElementById('picker-heading'),
  pickerNote: document.getElementById('picker-note'),
  selectedCards: document.getElementById('selected-cards'),
  editorLibraryList: document.getElementById('editor-library-list'),
  libraryList: document.getElementById('library-list'),
  fieldTitleLabel: document.getElementById('field-title-label'),
  fieldAuthorLabel: document.getElementById('field-author-label'),
  fieldCharacterLabel: document.getElementById('field-character-label'),
  fieldSummaryLabel: document.getElementById('field-summary-label'),
  fieldNotesLabel: document.getElementById('field-notes-label'),
  fieldSearchLabel: document.getElementById('field-search-label'),
  fieldTypeLabel: document.getElementById('field-type-label'),
  fieldRarityLabel: document.getElementById('field-rarity-label'),
  fieldCostLabel: document.getElementById('field-cost-label'),
  fieldLibrarySortLabel: document.getElementById('field-library-sort-label'),
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
  deleteBuildButton: document.getElementById('delete-build-button')
};

let allCards = (window.STS2_CARDS_DATA || []).map(function (card) {
  return Object.assign({}, card, {
    imageUrl: card.image ? 'https://sts2.wiki' + card.image : '',
    portraitImageUrl: card.portraitUrl ? 'https://sts2.wiki' + card.portraitUrl : ''
  });
}).sort(function (a, b) {
  if (a.character !== b.character) {
    return a.character.localeCompare(b.character);
  }
  if ((a.sortCost ?? 999) !== (b.sortCost ?? 999)) {
    return (a.sortCost ?? 999) - (b.sortCost ?? 999);
  }
  return a.name.localeCompare(b.name);
});

let cardMap = new Map(allCards.map(function (card) { return [card.id, card]; }));

let state = {
  currentLanguage: detectPreferredLanguage(),
  currentTheme: detectPreferredTheme(),
  currentSort: 'latest',
  currentView: 'cards',
  activeCharacter: PLAYABLE_CHARACTERS[0],
  activeBuildId: null,
  editorOpen: false,
  savedBuilds: loadSavedBuilds(),
  pinnedIds: loadPinnedIds(),
  filters: { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' },
  draft: createEmptyBuild(PLAYABLE_CHARACTERS[0])
};

function detectPreferredLanguage() {
  let browserLanguage = (navigator.language || 'en').toLowerCase().split('-')[0];
  return languages.includes(browserLanguage) ? browserLanguage : 'ko';
}

function detectPreferredTheme() {
  return 'dark';
}

function ui() {
  return uiText[state.currentLanguage] || uiText.ko;
}

function getLocalizedTerm(group, value) {
  let bucket = localizedTerms[group] || {};
  let entry = bucket[value];
  return entry ? (entry[state.currentLanguage] || entry.ko || entry.en || value) : value;
}

function getCharacterLabel(character) { return getLocalizedTerm('characters', character); }
function getIdentityLabel(identity) { return getLocalizedTerm('identities', identity); }
function getTypeLabel(type) { return getLocalizedTerm('types', type); }
function getRarityLabel(rarity) { return getLocalizedTerm('rarities', rarity); }
function getRelicLabel(relic) { let entry = RELIC_NAME_MAP[relic]; return state.currentLanguage === 'ko' && entry ? entry.ko : relic; }

function slugifyAssetName(value) {
  return String(value).toLowerCase().replace(/['’.]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function getRelicImageUrl(name) {
  let mapped = RELIC_IMAGE_MAP[name] || slugifyAssetName(name);
  return 'https://sts2.wiki/media/relics/' + mapped + '.png';
}

function translateCardTextToKo(text) {
  let result = text;
  let replacements = [
    ['ALL enemies', '모든 적'],
    ['Colorless Energy', '무색 에너지'],
    ['Energy', '에너지'],
    ['Exhaust.', '소진.'],
    ['Retain.', '보유.'],
    ['Innate.', '선천성.'],
    ['Ethereal.', '에테리얼.'],
    ['Unplayable.', '사용 불가.'],
    ['Deal ', '피해 '],
    [' damage', ' 피해'],
    ['Gain ', '획득: '],
    [' Block', ' 방어도'],
    ['Draw ', '카드를 '],
    [' cards.', '장 뽑습니다.'],
    [' cards', '장'],
    [' card.', '장 뽑습니다.'],
    [' card', '장'],
    ['Discard ', '버립니다: '],
    ['Upgrade ', '강화: '],
    ['Channel ', '채널링: '],
    ['Lightning', '번개'],
    ['Frost', '냉기'],
    ['Vulnerable', '취약'],
    ['Weak', '약화'],
    ['Poison', '독'],
    ['Strength', '힘'],
    ['Dexterity', '민첩'],
    ['Focus', '집중'],
    ['Summon ', '소환 '],
    ['Whenever ', '매번 '],
    ['At the start of your turn, ', '내 턴 시작 시 '],
    ['At the start of combat, ', '전투 시작 시 '],
    ['At the end of your turn, ', '턴 종료 시 '],
    ['to your Hand', '손으로'],
    ['into your Hand', '손으로'],
    ['your Hand', '손패'],
    ['Draw Pile', '드로우 더미'],
    ['Discard Pile', '버린 카드 더미'],
    ['this turn', '이번 턴'],
    ['free to play', '소모 없이 사용 가능'],
    ['random', '무작위'],
    ['Upgrade it', '그 카드를 강화합니다'],
    ['Upgrade ALL your cards', '모든 카드를 강화합니다']
  ];
  replacements.forEach(function (pair) { result = result.split(pair[0]).join(pair[1]); });
  return result;
}

function getCharacterSummary(character) {
  let info = CHARACTER_INFO[character];
  return info && info.summary ? (info.summary[state.currentLanguage] || info.summary.ko || info.summary.en) : '';
}

function getLocaleTag() {
  return { en: 'en-US', ko: 'ko-KR', ja: 'ja-JP', es: 'es-ES' }[state.currentLanguage] || 'ko-KR';
}

function applyTheme() {
  document.documentElement.dataset.theme = state.currentTheme;
}

function toggleTheme() {
  state.currentTheme = 'dark';
  window.localStorage.setItem('theme', 'dark');
  applyTheme();
  renderViewState();
}

function createId() {
  return 'build-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createEmptyBuild(character) {
  return { id: createId(), character: character, title: '', author: '', summary: '', notes: '', cards: [], createdAt: Date.now(), updatedAt: Date.now() };
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

function persistSavedBuilds() { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedBuilds)); }

function loadPinnedIds() {
  try {
    let raw = window.localStorage.getItem(PINNED_KEY);
    let parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    return new Set();
  }
}

function persistPinnedIds() { window.localStorage.setItem(PINNED_KEY, JSON.stringify(Array.from(state.pinnedIds))); }

function availableCardsForCharacter(character) {
  return allCards.filter(function (card) { return card.character === character || card.character === 'Colorless'; });
}

function buildCards(build) {
  return build.cards.map(function (entry) {
    let card = cardMap.get(entry.cardId);
    return card ? Object.assign({}, entry, { card: card }) : null;
  }).filter(Boolean);
}

function summarizeBuild(build) {
  let cards = buildCards(build);
  let cardCount = cards.reduce(function (sum, entry) { return sum + entry.quantity; }, 0);
  let uniqueCards = cards.length;
  let numericCards = cards.filter(function (entry) { return Number.isFinite(entry.card.sortCost); });
  let weightedCost = numericCards.reduce(function (sum, entry) { return sum + entry.card.sortCost * entry.quantity; }, 0);
  let weightedCount = numericCards.reduce(function (sum, entry) { return sum + entry.quantity; }, 0);
  let avgCost = weightedCount ? weightedCost / weightedCount : 0;
  return { cardCount: cardCount, uniqueCards: uniqueCards, avgCost: avgCost };
}

function buildsForActiveCharacter() {
  let builds = state.savedBuilds.filter(function (build) { return build.character === state.activeCharacter; });
  return builds.slice().sort(function (a, b) {
    if (state.currentSort === 'popular') {
      let pinDiff = Number(state.pinnedIds.has(b.id)) - Number(state.pinnedIds.has(a.id));
      if (pinDiff) { return pinDiff; }
    }
    return b.updatedAt - a.updatedAt;
  });
}

function ensureActiveBuild() {
  if (state.activeBuildId && !state.savedBuilds.some(function (build) { return build.id === state.activeBuildId; })) {
    state.activeBuildId = null;
  }
  if (state.draft.character !== state.activeCharacter) {
    state.draft.character = state.activeCharacter;
  }
}

function openEditor(mode) {
  state.currentView = 'builds';
  state.editorOpen = true;
  if (mode === 'new') {
    state.activeBuildId = null;
    state.draft = createEmptyBuild(state.activeCharacter);
    showStatus(ui().status.reset);
  }
  render();
}

function loadBuildIntoDraft(buildId) {
  let build = state.savedBuilds.find(function (item) { return item.id === buildId; });
  if (!build) { return; }
  state.activeBuildId = build.id;
  state.activeCharacter = build.character;
  state.draft = clone(build);
  state.editorOpen = true;
  state.currentView = 'builds';
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
  draft.title = draft.title.trim() || (getCharacterLabel(state.activeCharacter) + ' Build');
  draft.author = draft.author.trim() || 'Local Player';
  draft.summary = draft.summary.trim() || getCharacterSummary(state.activeCharacter);
  draft.notes = draft.notes.trim();

  if (state.activeBuildId && state.savedBuilds.some(function (build) { return build.id === state.activeBuildId; })) {
    draft.id = state.activeBuildId;
    draft.createdAt = (state.savedBuilds.find(function (build) { return build.id === state.activeBuildId; }) || {}).createdAt || now;
    state.savedBuilds = state.savedBuilds.map(function (build) { return build.id === draft.id ? draft : build; });
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
  duplicate.title = duplicate.title ? duplicate.title + ' Copy' : getCharacterLabel(state.activeCharacter) + ' Copy';
  duplicate.createdAt = Date.now();
  duplicate.updatedAt = Date.now();
  state.activeBuildId = null;
  state.draft = duplicate;
  showStatus(ui().status.duplicated);
  render();
}

function deleteCurrentBuild() {
  if (!state.activeBuildId) {
    state.draft = createEmptyBuild(state.activeCharacter);
    state.editorOpen = true;
    showStatus(ui().status.reset);
    render();
    return;
  }
  state.savedBuilds = state.savedBuilds.filter(function (build) { return build.id !== state.activeBuildId; });
  state.pinnedIds.delete(state.activeBuildId);
  persistSavedBuilds();
  persistPinnedIds();
  state.activeBuildId = null;
  state.draft = createEmptyBuild(state.activeCharacter);
  showStatus(ui().status.deleted);
  render();
}

function togglePinned(buildId) {
  if (state.pinnedIds.has(buildId)) { state.pinnedIds.delete(buildId); } else { state.pinnedIds.add(buildId); }
  persistPinnedIds();
  renderBuildList();
}

function updateDraftField(field, value) { state.draft[field] = value; }

function addCardToDraft(cardId, upgraded) {
  let existing = state.draft.cards.find(function (entry) { return entry.cardId === cardId && entry.upgraded === upgraded; });
  if (existing) { existing.quantity += 1; } else { state.draft.cards.push({ cardId: cardId, quantity: 1, upgraded: Boolean(upgraded) }); }
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function adjustCardQuantity(cardId, upgraded, delta) {
  let entry = state.draft.cards.find(function (item) { return item.cardId === cardId && item.upgraded === upgraded; });
  if (!entry) { return; }
  entry.quantity += delta;
  if (entry.quantity <= 0) {
    state.draft.cards = state.draft.cards.filter(function (item) { return !(item.cardId === cardId && item.upgraded === upgraded); });
  }
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function removeCard(cardId, upgraded) {
  state.draft.cards = state.draft.cards.filter(function (item) { return !(item.cardId === cardId && item.upgraded === upgraded); });
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function toggleUpgrade(cardId, upgraded) {
  let entry = state.draft.cards.find(function (item) { return item.cardId === cardId && item.upgraded === upgraded; });
  if (!entry) { return; }
  let target = state.draft.cards.find(function (item) { return item.cardId === cardId && item.upgraded !== upgraded; });
  if (target) {
    target.quantity += entry.quantity;
    removeCard(cardId, upgraded);
    return;
  }
  entry.upgraded = !entry.upgraded;
  state.draft.updatedAt = Date.now();
  renderEditor();
}

function getCardLocalization(card) {
  let bucket = CARD_LOCALIZATION_TABLE[state.currentLanguage] || {};
  return bucket[card.id] || null;
}

function getCardName(card, upgraded) {
  let localized = getCardLocalization(card);
  if (localized) {
    return upgraded ? (localized.upgradedName || localized.name || card.upgradedName || (card.name + '+')) : (localized.name || card.name);
  }
  return upgraded ? (card.upgradedName || (card.name + '+')) : card.name;
}

function getCardText(card, upgraded) {
  let localized = getCardLocalization(card);
  if (localized) {
    let localizedText = upgraded ? (localized.upgradedDescription || localized.description) : localized.description;
    if (localizedText) return localizedText;
  }
  let raw = upgraded ? (card.upgradedDescription || card.description) : card.description;
  return state.currentLanguage === 'ko' ? translateCardTextToKo(raw) : raw;
}

function getCardSearchText(card) {
  let localized = getCardLocalization(card) || {};
  return [
    card.name,
    card.upgradedName,
    card.description,
    card.upgradedDescription,
    localized.name,
    localized.upgradedName,
    localized.description,
    localized.upgradedDescription,
    getCharacterLabel(card.character),
    getTypeLabel(card.type),
    getRarityLabel(card.rarity)
  ].filter(Boolean).join(' ').toLowerCase();
}

function filteredCards() {
  let cards = availableCardsForCharacter(state.activeCharacter).filter(function (card) {
    let search = state.filters.search.trim().toLowerCase();
    let textMatch = !search || getCardSearchText(card).includes(search);
    let typeMatch = state.filters.type === 'all' || card.type === state.filters.type;
    let rarityMatch = state.filters.rarity === 'all' || card.rarity === state.filters.rarity;
    let costMatch = state.filters.cost === 'all' || String(card.cost) === state.filters.cost;
    return textMatch && typeMatch && rarityMatch && costMatch;
  });

  return cards.sort(function (a, b) {
    if (state.filters.librarySort === 'cost') {
      return (a.sortCost ?? 999) - (b.sortCost ?? 999) || getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
    }
    if (state.filters.librarySort === 'rarity') {
      return getRarityLabel(a.rarity).localeCompare(getRarityLabel(b.rarity), getLocaleTag()) || getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
    }
    if (state.filters.librarySort === 'type') {
      return getTypeLabel(a.type).localeCompare(getTypeLabel(b.type), getLocaleTag()) || getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
    }
    return getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
  });
}

function showStatus(message) { refs.buildStatus.textContent = message; }

function optionList(values, allLabel, labelForValue) {
  let items = ['<option value="all">' + escapeHtml(allLabel) + '</option>'];
  values.forEach(function (value) {
    items.push('<option value="' + escapeHtml(value) + '">' + escapeHtml(labelForValue ? labelForValue(value) : value) + '</option>');
  });
  return items.join('');
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat(getLocaleTag(), { year: 'numeric', month: 'short', day: 'numeric' }).format(timestamp);
}

function formatNumber(value) {
  return new Intl.NumberFormat(getLocaleTag(), { maximumFractionDigits: 1 }).format(value);
}

function renderStaticText() {
  let currentUi = ui();
  document.documentElement.lang = state.currentLanguage;
  document.title = 'Slay the Spire 2 ' + currentUi.heroTitle;
  refs.heroTitle.textContent = currentUi.heroTitle;
  refs.navCards.textContent = currentUi.nav.cards;
  refs.navRelics.textContent = currentUi.nav.relics;
  refs.navBuilds.textContent = currentUi.nav.builds;
  refs.sortLabel.textContent = currentUi.sortLabel;
  refs.sortSelect.innerHTML = '<option value="latest">' + currentUi.sortOptions.latest + '</option><option value="popular">' + currentUi.sortOptions.popular + '</option>';
  refs.characterKicker.textContent = currentUi.characterKicker;
  refs.characterHeading.textContent = currentUi.characterHeading;
  refs.libraryKicker.textContent = currentUi.libraryKicker;
  refs.libraryHeading.textContent = getCharacterLabel(state.activeCharacter) + ' ' + currentUi.libraryHeading;
  refs.relicsKicker.textContent = currentUi.relicsKicker;
  refs.relicsHeading.textContent = currentUi.relicsHeading;
  refs.buildlistKicker.textContent = currentUi.buildlistKicker;
  refs.buildlistHeading.textContent = currentUi.buildlistHeading;
  refs.builderKicker.textContent = currentUi.builderKicker;
  refs.builderHeading.textContent = getCharacterLabel(state.activeCharacter) + ' ' + currentUi.builderHeading;
  refs.editorKicker.textContent = currentUi.editorKicker;
  refs.editorHeading.textContent = currentUi.editorHeading;
  refs.pickerKicker.textContent = currentUi.pickerKicker;
  refs.pickerHeading.textContent = currentUi.pickerHeading;
  refs.pickerNote.textContent = currentUi.pickerNote;
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

function renderLanguageMenu() {
  let labels = { ko: { name: '한국어', tag: 'KR' }, en: { name: 'English', tag: 'EN' }, ja: { name: '日本語', tag: 'JP' }, es: { name: 'Español', tag: 'ES' } };
  refs.languageMenu.innerHTML = languages.map(function (language) {
    return '<button class="language-option' + (language === state.currentLanguage ? ' is-active' : '') + '" type="button" data-language="' + language + '"><span>' + escapeHtml(labels[language].name) + '</span><span class="language-option-label">' + escapeHtml(labels[language].tag) + '</span></button>';
  }).join('');
  refs.languageButton.setAttribute('aria-expanded', String(!refs.languageMenu.hidden));
}

function renderCharacterTabs() {
  refs.characterTabs.innerHTML = '';
  PLAYABLE_CHARACTERS.forEach(function (character) {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'character-tab';
    button.dataset.character = character;
    button.innerHTML = '<strong>' + escapeHtml(getCharacterLabel(character)) + '</strong><p class="build-desc">' + escapeHtml(getCharacterSummary(character)) + '</p>';
    if (character === state.activeCharacter) { button.classList.add('is-active'); }
    refs.characterTabs.appendChild(button);
  });
}

function renderCharacterSummary() {
  let info = CHARACTER_INFO[state.activeCharacter];
  refs.characterSummary.innerHTML = '';
  [
    { label: ui().labels.hp, value: info.hp },
    { label: ui().labels.relic, value: getRelicLabel(info.relic) },
    { label: ui().labels.identity, value: getIdentityLabel(info.identity) },
    { label: ui().labels.starterDeck, value: info.starterDeck.join(', ') }
  ].forEach(function (item) {
    let card = document.createElement('article');
    card.className = 'summary-card';
    card.innerHTML = '<span class="summary-label">' + escapeHtml(item.label) + '</span><p class="summary-value">' + escapeHtml(item.value) + '</p>';
    refs.characterSummary.appendChild(card);
  });
}

function renderViewState() {
  let current = state.currentView;
  refs.cardsPanel.hidden = current !== 'cards';
  refs.relicsPanel.hidden = current !== 'relics';
  refs.buildsPanel.hidden = current !== 'builds';
  refs.builderPanel.hidden = !state.editorOpen;
  refs.navCards.classList.toggle('is-active', current === 'cards');
  refs.navRelics.classList.toggle('is-active', current === 'relics');
  refs.navBuilds.classList.toggle('is-active', current === 'builds');
  refs.themeLightButton.classList.toggle('is-active', state.currentTheme === 'light');
  refs.themeDarkButton.classList.toggle('is-active', state.currentTheme === 'dark');
}

function renderBuildList() {
  let builds = buildsForActiveCharacter();
  refs.buildList.innerHTML = '';
  if (!builds.length) {
    refs.buildList.innerHTML = '<div class="empty-state">' + ui().empty.builds + '</div>';
    return;
  }
  builds.forEach(function (build) {
    let summary = summarizeBuild(build);
    let article = document.createElement('article');
    article.className = 'build-card';
    article.dataset.buildId = build.id;
    if (build.id === state.activeBuildId) { article.classList.add('is-active'); }
    article.innerHTML = '<div><p class="section-kicker">' + escapeHtml(build.id === state.activeBuildId ? ui().labels.draft : ui().labels.saved) + '</p><h3 class="build-title">' + escapeHtml(build.title) + '</h3><p class="build-desc">' + escapeHtml(build.summary || getCharacterSummary(build.character)) + '</p><div class="card-meta"><span class="build-meta">' + ui().labels.cardCount + ': ' + summary.cardCount + '</span><span class="build-meta">' + ui().labels.uniqueCards + ': ' + summary.uniqueCards + '</span><span class="build-meta">' + ui().labels.avgCost + ': ' + formatNumber(summary.avgCost) + '</span><span class="build-meta">' + ui().labels.updated + ': ' + escapeHtml(formatDate(build.updatedAt)) + '</span></div></div><div><div class="build-card-actions"><button class="pill-button" type="button" data-pin-build="' + build.id + '">' + (state.pinnedIds.has(build.id) ? ui().buttons.unpin : ui().buttons.pin) + '</button></div></div>';
    refs.buildList.appendChild(article);
  });
}

function renderEditorFields() {
  refs.buildTitleInput.value = state.draft.title;
  refs.buildAuthorInput.value = state.draft.author;
  refs.buildSummaryInput.value = state.draft.summary;
  refs.buildNotesInput.value = state.draft.notes;
  refs.buildCharacterSelect.innerHTML = PLAYABLE_CHARACTERS.map(function (character) { return '<option value="' + character + '">' + escapeHtml(getCharacterLabel(character)) + '</option>'; }).join('');
  refs.buildCharacterSelect.value = state.activeCharacter;
  refs.deleteBuildButton.disabled = false;
}

function renderSelectedCards() {
  let items = buildCards(state.draft);
  refs.selectedCards.innerHTML = '';
  if (!items.length) {
    refs.selectedCards.innerHTML = '<div class="empty-state">' + ui().empty.selected + '</div>';
    return;
  }
  items.sort(function (a, b) { return (a.card.sortCost ?? 999) - (b.card.sortCost ?? 999) || getCardName(a.card, false).localeCompare(getCardName(b.card, false), getLocaleTag()); });
  items.forEach(function (entry) {
    let text = getCardText(entry.card, entry.upgraded);
    let card = document.createElement('article');
    card.className = 'selected-card';
    card.innerHTML = '<div class="selected-card-head"><div><p class="selected-card-name">' + escapeHtml(getCardName(entry.card, entry.upgraded)) + '</p><div class="card-meta"><span class="build-meta">' + escapeHtml(getTypeLabel(entry.card.type)) + '</span><span class="build-meta">' + escapeHtml(getRarityLabel(entry.card.rarity)) + '</span><span class="build-meta">' + ui().labels.energy + ': ' + escapeHtml(entry.card.cost) + '</span></div></div><span class="stat-chip">x' + entry.quantity + '</span></div><p class="selected-card-text">' + escapeHtml(text) + '</p><div class="selected-card-controls"><button class="pill-button" type="button" data-adjust-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '" data-delta="-1">-1</button><button class="pill-button" type="button" data-adjust-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '" data-delta="1">+1</button><button class="pill-button" type="button" data-toggle-upgrade="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '">' + ui().buttons.upgrade + '</button><button class="pill-button" type="button" data-remove-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '">' + ui().buttons.remove + '</button></div>';
    refs.selectedCards.appendChild(card);
  });
}

function renderFilters() {
  let cards = availableCardsForCharacter(state.activeCharacter);
  let types = Array.from(new Set(cards.map(function (card) { return card.type; }))).sort(function (a, b) { return getTypeLabel(a).localeCompare(getTypeLabel(b), getLocaleTag()); });
  let rarities = Array.from(new Set(cards.map(function (card) { return card.rarity; }))).sort(function (a, b) { return getRarityLabel(a).localeCompare(getRarityLabel(b), getLocaleTag()); });
  let costs = Array.from(new Set(cards.map(function (card) { return String(card.cost); }))).sort(function (a, b) {
    let aNum = Number(a);
    let bNum = Number(b);
    if (Number.isFinite(aNum) && Number.isFinite(bNum)) { return aNum - bNum; }
    return a.localeCompare(b);
  });
  refs.typeFilterSelect.innerHTML = optionList(types, ui().labels.all, getTypeLabel);
  refs.rarityFilterSelect.innerHTML = optionList(rarities, ui().labels.all, getRarityLabel);
  refs.costFilterSelect.innerHTML = optionList(costs, ui().labels.all);
  refs.librarySortSelect.innerHTML = '<option value="name">' + ui().librarySortOptions.name + '</option><option value="cost">' + ui().librarySortOptions.cost + '</option><option value="rarity">' + ui().librarySortOptions.rarity + '</option><option value="type">' + ui().librarySortOptions.type + '</option>';
  refs.cardSearchInput.value = state.filters.search;
  refs.typeFilterSelect.value = state.filters.type;
  refs.rarityFilterSelect.value = state.filters.rarity;
  refs.costFilterSelect.value = state.filters.cost;
  refs.librarySortSelect.value = state.filters.librarySort;
}

function buildLibraryCardMarkup(card, mode) {
  let imageUrl = card.portraitImageUrl || card.imageUrl;
  let imageMarkup = imageUrl ? '<img class="library-thumb" src="' + escapeHtml(imageUrl) + '" alt="' + escapeHtml(getCardName(card, false)) + '">' : '<div class="library-thumb">' + escapeHtml(ui().labels.noImage) + '</div>';
  let actions = mode === 'editor'
    ? '<button class="pill-button pill-button-primary" type="button" data-add-card="' + card.id + '" data-upgraded="false">' + ui().buttons.addBase + '</button><button class="pill-button" type="button" data-add-card="' + card.id + '" data-upgraded="true">' + ui().buttons.addUpgraded + '</button><a class="pill-button" href="' + escapeHtml(card.sourceUrl) + '" target="_blank" rel="noreferrer">' + ui().buttons.source + '</a>'
    : '<a class="pill-button" href="' + escapeHtml(card.sourceUrl) + '" target="_blank" rel="noreferrer">' + ui().buttons.source + '</a>';
  let upgradedBlock = '<div class="library-card-upgrade"><span class="upgrade-label">' + escapeHtml(ui().labels.upgraded) + '</span><p class="library-card-text">' + escapeHtml(getCardText(card, true)) + '</p></div>';
  return '<div class="library-card-main">' + imageMarkup + '<div><div class="library-card-head"><div><p class="library-card-name">' + escapeHtml(getCardName(card, false)) + '</p><div class="card-meta"><span class="build-meta">' + escapeHtml(getCharacterLabel(card.character)) + '</span><span class="build-meta">' + escapeHtml(getTypeLabel(card.type)) + '</span><span class="build-meta">' + escapeHtml(getRarityLabel(card.rarity)) + '</span><span class="build-meta energy-chip">' + escapeHtml(ui().labels.energy) + ': ' + escapeHtml(card.cost) + '</span></div></div></div><p class="library-card-text">' + escapeHtml(getCardText(card, false)) + '</p>' + upgradedBlock + '<div class="library-card-actions">' + actions + '</div></div></div>';
}

function renderLibrary() {
  renderFilters();
  let cards = filteredCards();
  refs.libraryList.innerHTML = '';
  refs.editorLibraryList.innerHTML = '';
  if (!cards.length) {
    refs.libraryList.innerHTML = '<div class="empty-state">' + ui().empty.library + '</div>';
    refs.editorLibraryList.innerHTML = '<div class="empty-state">' + ui().empty.library + '</div>';
    return;
  }
  cards.forEach(function (card) {
    let viewCard = document.createElement('article');
    viewCard.className = 'library-card';
    viewCard.innerHTML = buildLibraryCardMarkup(card, 'browse');
    refs.libraryList.appendChild(viewCard);

    let editCard = document.createElement('article');
    editCard.className = 'library-card';
    editCard.innerHTML = buildLibraryCardMarkup(card, 'editor');
    refs.editorLibraryList.appendChild(editCard);
  });
}

function getRelicSourceLabel(owner) {
  if (owner === 'Global') {
    return state.currentLanguage === 'ko' ? '공용' : 'Shared';
  }
  return getCharacterLabel(owner);
}

function buildRelicCollection() {
  let relics = [];
  Object.keys(CHARACTER_RELICS).forEach(function (character) {
    (CHARACTER_RELICS[character] || []).forEach(function (relic) {
      relics.push(Object.assign({ owner: character }, relic));
    });
  });
  GLOBAL_RELICS.forEach(function (relic) {
    relics.push(Object.assign({ owner: 'Global' }, relic));
  });
  let tierOrder = { Starter: 0, Boss: 1, Rare: 2, Uncommon: 3, Common: 4, Shop: 5, Event: 6, Ancient: 7 };
  relics.sort(function (a, b) {
    return (tierOrder[a.tier] ?? 99) - (tierOrder[b.tier] ?? 99)
      || getRelicSourceLabel(a.owner).localeCompare(getRelicSourceLabel(b.owner), getLocaleTag())
      || getRelicLabel(a.name).localeCompare(getRelicLabel(b.name), getLocaleTag());
  });
  return relics;
}

function renderRelicCard(relic) {
  let text = relic.description[state.currentLanguage] || relic.description.ko || relic.description.en;
  let imageUrl = getRelicImageUrl(relic.name);
  return '<article class="relic-card"><div class="relic-card-layout"><img class="relic-thumb" src="' + imageUrl + '" alt="' + escapeHtml(getRelicLabel(relic.name)) + '"><div class="relic-card-copy"><div class="relic-card-head"><div><h3 class="relic-title">' + escapeHtml(getRelicLabel(relic.name)) + '</h3><div class="relic-tag-row"><span class="relic-tag">' + escapeHtml(getIdentityLabel(relic.tier)) + '</span><span class="build-meta">' + escapeHtml(getRelicSourceLabel(relic.owner)) + '</span></div></div></div><p class="relic-copy">' + escapeHtml(text) + '</p></div></div></article>';
}

function renderRelics() {
  let relics = buildRelicCollection();
  refs.relicsGrid.innerHTML = relics.map(renderRelicCard).join('');
  if (!refs.relicsGrid.innerHTML) {
    refs.relicsGrid.innerHTML = '<div class="empty-state">' + ui().empty.relics + '</div>';
  }
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
  renderLanguageMenu();
  renderViewState();
  refs.sortSelect.value = state.currentSort;
  renderCharacterTabs();
  renderCharacterSummary();
  renderBuildList();
  renderRelics();
  renderEditor();
}

refs.navCards.addEventListener('click', function () { state.currentView = 'cards'; render(); });
refs.navRelics.addEventListener('click', function () { state.currentView = 'relics'; render(); });
refs.navBuilds.addEventListener('click', function () { state.currentView = 'builds'; render(); });

refs.languageButton.addEventListener('click', function () {
  refs.languageMenu.hidden = !refs.languageMenu.hidden;
  refs.languageButton.setAttribute('aria-expanded', String(!refs.languageMenu.hidden));
});

refs.languageMenu.addEventListener('click', function (event) {
  let option = event.target.closest('[data-language]');
  if (!option) { return; }
  state.currentLanguage = languages.includes(option.dataset.language) ? option.dataset.language : 'ko';
  refs.languageMenu.hidden = true;
  render();
});

[refs.themeLightButton, refs.themeDarkButton].forEach(function (button) {
  button.addEventListener('click', function () { toggleTheme(); });
});

refs.sortSelect.addEventListener('change', function (event) {
  state.currentSort = event.target.value === 'popular' ? 'popular' : 'latest';
  renderBuildList();
});

refs.characterTabs.addEventListener('click', function (event) {
  let button = event.target.closest('[data-character]');
  if (!button) { return; }
  state.activeCharacter = button.dataset.character;
  state.filters = { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' };
  if (!state.editorOpen || state.activeBuildId === null) {
    state.draft = createEmptyBuild(state.activeCharacter);
  } else {
    state.draft.character = state.activeCharacter;
    state.draft.cards = state.draft.cards.filter(function (entry) {
      let card = cardMap.get(entry.cardId);
      return card && (card.character === state.activeCharacter || card.character === 'Colorless');
    });
  }
  render();
});

refs.buildList.addEventListener('click', function (event) {
  let pinButton = event.target.closest('[data-pin-build]');
  if (pinButton) {
    event.stopPropagation();
    togglePinned(pinButton.dataset.pinBuild);
    return;
  }
  let buildCard = event.target.closest('[data-build-id]');
  if (!buildCard) { return; }
  loadBuildIntoDraft(buildCard.dataset.buildId);
});

refs.newBuildButton.addEventListener('click', function () { openEditor('new'); });
refs.duplicateBuildButton.addEventListener('click', function () { duplicateCurrentBuild(); });
refs.saveBuildButton.addEventListener('click', function () { saveCurrentBuild(); });
refs.deleteBuildButton.addEventListener('click', function () { deleteCurrentBuild(); });
refs.buildTitleInput.addEventListener('input', function (event) { updateDraftField('title', event.target.value); });
refs.buildAuthorInput.addEventListener('input', function (event) { updateDraftField('author', event.target.value); });
refs.buildSummaryInput.addEventListener('input', function (event) { updateDraftField('summary', event.target.value); });
refs.buildNotesInput.addEventListener('input', function (event) { updateDraftField('notes', event.target.value); });

refs.buildCharacterSelect.addEventListener('change', function (event) {
  state.activeCharacter = event.target.value;
  state.activeBuildId = null;
  state.draft.character = event.target.value;
  state.draft.cards = state.draft.cards.filter(function (entry) {
    let card = cardMap.get(entry.cardId);
    return card && (card.character === state.activeCharacter || card.character === 'Colorless');
  });
  render();
});

refs.cardSearchInput.addEventListener('input', function (event) { state.filters.search = event.target.value; renderLibrary(); });
refs.typeFilterSelect.addEventListener('change', function (event) { state.filters.type = event.target.value; renderLibrary(); });
refs.rarityFilterSelect.addEventListener('change', function (event) { state.filters.rarity = event.target.value; renderLibrary(); });
refs.costFilterSelect.addEventListener('change', function (event) { state.filters.cost = event.target.value; renderLibrary(); });
refs.librarySortSelect.addEventListener('change', function (event) { state.filters.librarySort = event.target.value; renderLibrary(); });

refs.editorLibraryList.addEventListener('click', function (event) {
  let button = event.target.closest('[data-add-card]');
  if (!button) { return; }
  addCardToDraft(button.dataset.addCard, button.dataset.upgraded === 'true');
});

refs.selectedCards.addEventListener('click', function (event) {
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

document.addEventListener('click', function (event) {
  if (!event.target.closest('.utility-menu')) {
    refs.languageMenu.hidden = true;
    refs.languageButton.setAttribute('aria-expanded', 'false');
  }
});

render();
