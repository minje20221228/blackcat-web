let PLAYABLE_CHARACTERS = ['Ironclad', 'Silent', 'Regent', 'Necrobinder', 'Defect'];
let STORAGE_KEY = 'sts2-build-lab-builds-v2';
let PINNED_KEY = 'sts2-build-lab-pins-v2';
let languages = ['en', 'ko', 'ja', 'es'];
let SITE_PAGE = document.body.dataset.page || 'home';

let CHARACTER_INFO = {
  Ironclad: {
    hp: 80,
    relic: 'Burning Blood',
    identity: 'Strength, self-damage, Exhaust',
    image: 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/sprites/characterselect_ironclad.png',
    summary: {
      en: 'A frontloaded bruiser built around Strength scaling, self-damage payoffs, and Exhaust routing.',
      ko: '힘 스택, 자해 보상, 소멸 운영으로 압박하는 정면 돌파형 캐릭터.'
    },
    description: {
      en: 'Ironclad leans on raw frontloaded damage, self-harm synergies, and exhaust routing to dominate fights quickly. He is the easiest character to read at a glance, but still rewards careful upgrade order and HP management.',
      ko: '아이언클래드는 높은 즉발 화력, 자해 시너지, 소멸 전환을 바탕으로 전투를 빠르게 밀어붙입니다. 한눈에 이해하기 쉬운 캐릭터지만, 강화 순서와 체력 관리에 따라 완성도가 크게 갈립니다.'
    },
    highlights: {
      en: ['Strength lines scale fast once fights stabilize.', 'Exhaust turns dead draws into tempo or payoff.', 'HP can be spent aggressively to win before enemies scale.'],
      ko: ['힘 축이 붙으면 전투 안정화 이후 성장 속도가 빠릅니다.', '소멸 기믹이 죽은 드로우를 템포나 보상으로 바꿉니다.', '체력을 자원처럼 써서 적이 커지기 전에 끝낼 수 있습니다.']
    },
    starterDeck: ['Strike x5', 'Defend x4', 'Bash x1']
  },
  Silent: {
    hp: 70,
    relic: 'Ring of the Snake',
    identity: 'Discard, Shiv, Poison',
    image: 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/sprites/characterselect_silent.png',
    summary: {
      en: 'A tempo character that bends fights through Discard, Shiv bursts, and Poison scaling.',
      ko: '버리기 압축, 단도 폭딜, 독 누적으로 리듬을 만드는 템포형 캐릭터.'
    },
    description: {
      en: 'Silent is built around clean hands, repeated dagger bursts, and poison lines that become stronger the longer a fight goes. Her best decks feel fluid because discard tools keep bad turns short and payoff turns explosive.',
      ko: '사일런트는 손패 압축, 반복 단도 폭딜, 장기전에서 강해지는 독 라인을 축으로 움직입니다. 버리기 도구가 꼬이는 턴을 줄이고, 보상 카드가 붙으면 가장 유려하게 굴러갑니다.'
    },
    highlights: {
      en: ['Discard improves hand quality and combo consistency.', 'Shiv packages trigger many burst payoffs.', 'Poison gives reliable boss and elite finishing power.'],
      ko: ['버리기 기믹이 손패 품질과 콤보 안정성을 끌어올립니다.', '단도 패키지가 다양한 폭딜 트리거를 동시에 켭니다.', '독은 보스와 엘리트를 안정적으로 마무리하게 해줍니다.']
    },
    starterDeck: ['Strike x5', 'Defend x5', 'Neutralize x1', 'Survivor x1']
  },
  Regent: {
    hp: 75,
    relic: 'Divine Right',
    identity: 'Stars, control, payoff turns',
    image: 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/sprites/characterselect_regent.png',
    summary: {
      en: 'A setup-heavy character that turns Star generation into large celestial payoff turns.',
      ko: '별 자원을 모아 폭발 턴과 제어력을 만드는 세팅형 캐릭터.'
    },
    description: {
      en: 'Regent banks Star resources and generated tools to create huge payoff turns. He rewards planning, sequencing, and resource discipline more than raw card rate, so the deck often feels better once its turns are mapped in advance.',
      ko: '리젠트는 별 자원과 생성 카드를 비축해 큰 보상 턴을 만드는 세팅형 캐릭터입니다. 카드 한 장의 즉시 가치보다 순서 설계와 자원 절제가 더 중요해서, 턴 계획이 잡힐수록 훨씬 강해집니다.'
    },
    highlights: {
      en: ['Star costs enable oversized celestial payoffs.', 'Generated cards and minions widen tactical choices.', 'Control tools buy time for decisive setup turns.'],
      ko: ['별 비용 카드가 대형 폭발 턴을 가능하게 만듭니다.', '생성 카드와 하수인이 전술 선택지를 넓혀 줍니다.', '제어 카드가 결정적 세팅 턴까지 시간을 벌어 줍니다.']
    },
    starterDeck: ['Strike x4', 'Defend x4', 'Falling Star x1', 'Venerate x1']
  },
  Necrobinder: {
    hp: 66,
    relic: 'Bound Phylactery',
    identity: 'Summon, Doom, Osty, Souls',
    image: 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/sprites/characterselect_necrobinder.png',
    summary: {
      en: 'A technical summoner using Souls, Doom thresholds, and board presence from Osty.',
      ko: '영혼 관리와 소환물, 종말 임계치를 함께 굴리는 고난도 소환형 캐릭터.'
    },
    description: {
      en: 'Necrobinder asks you to manage more moving parts than any other character. Souls, Doom thresholds, sacrifice effects, and Osty all overlap, but once assembled they create some of the highest-value turns in the game.',
      ko: '네크로바인더는 가장 많은 전투 요소를 동시에 관리해야 하는 캐릭터입니다. 영혼, 종말 임계치, 희생 효과, 골골이가 모두 겹치지만, 구조가 완성되면 게임 내에서도 손꼽히는 고가치 턴을 만들 수 있습니다.'
    },
    highlights: {
      en: ['Soul generation fuels long combo chains.', 'Doom creates alternate kill thresholds.', 'Osty adds persistent pressure and utility.'],
      ko: ['영혼 생성이 긴 연계 턴의 연료가 됩니다.', '종말은 별도의 처치 임계치를 만들어 줍니다.', '골골이는 지속 압박과 유틸리티를 동시에 제공합니다.']
    },
    starterDeck: ['Strike x5', 'Defend x5', 'Bodyguard x1', 'Unleash x1']
  },
  Defect: {
    hp: 70,
    relic: 'Cracked Core',
    identity: 'Orbs, Focus, Evoke',
    image: 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/sprites/characterselect_defect.png',
    summary: {
      en: 'An engine character that scales through Orb sequencing, Focus, and Evoke timing.',
      ko: '오브, 집중, 발동 순서를 굴려 엔진을 완성하는 빌드형 캐릭터.'
    },
    description: {
      en: 'Defect is an engine-first character whose strength comes from orb economy, Focus scaling, and evoke timing. Many average-looking cards become premium once the deck starts channeling and rotating orbs efficiently.',
      ko: '디펙트는 오브 경제, 집중 성장, 발동 타이밍으로 힘을 끌어올리는 엔진형 캐릭터입니다. 처음엔 평범해 보이는 카드도 오브가 잘 순환하기 시작하면 핵심 부품으로 바뀝니다.'
    },
    highlights: {
      en: ['Orb sequencing controls both offense and defense.', 'Focus multiplies the value of simple cards.', 'Long fights reward stable engine assembly.'],
      ko: ['오브 순서가 공격과 방어를 동시에 결정합니다.', '집중이 단순한 카드의 가치를 크게 키웁니다.', '장기전일수록 엔진 완성도의 차이가 커집니다.']
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
    { name: 'Divine Right', tier: 'Starter', description: { en: 'At the start of each combat, gain 3 Regent Star Energy.', ko: '매 전투 시작 시 별 에너지 3을 얻습니다.' } },
    { name: 'Royal Censer', tier: 'Rare', description: { en: 'Improves long setup turns and celestial payoff lines.', ko: '긴 세팅 턴 이후 천체 계열 보상을 더 크게 만듭니다.' } },
    { name: 'Astral Dial', tier: 'Rare', description: { en: 'Smooths conversion from generated Stars into burst turns.', ko: '생성한 별 자원을 폭발 턴으로 더 부드럽게 연결합니다.' } },
    { name: 'Asterism', tier: 'Boss', description: { en: 'Stabilizes Star flow for larger Regent payoff turns.', ko: '별 자원 흐름을 안정화해 리젠트의 폭발 턴을 강화합니다.' } }
  ],
  Necrobinder: [
    { name: 'Bound Phylactery', tier: 'Starter', description: { en: 'At the start of your turn, Summon 1.', ko: '내 턴 시작 시 소환 1을 얻습니다.' } },
    { name: 'Soul Cage', tier: 'Rare', description: { en: 'Preserves and recycles Soul value in longer fights.', ko: '영혼 가치를 보존해 장기전 운영을 돕습니다.' } },
    { name: 'Funeral Bell', tier: 'Rare', description: { en: 'Improves Doom and sacrifice-oriented game plans.', ko: '둠과 희생 중심 운영의 보상을 키워 줍니다.' } },
    { name: 'Wake Candle', tier: 'Common', description: { en: 'Helps Ethereal and sacrifice lines stabilize faster.', ko: '에테리얼과 희생 운영을 더 안정적으로 연결합니다.' } }
  ],
  Defect: [
    { name: 'Cracked Core', tier: 'Starter', description: { en: 'At the start of each combat, Channel 1 Lightning.', ko: '매 전투 시작 시 번개 오브를 1번 영창합니다.' } },
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
    'Strength, self-damage, Exhaust': { en: 'Strength, self-damage, Exhaust', ko: '힘, 자해, 소멸' },
    'Discard, Shiv, Poison': { en: 'Discard, Shiv, Poison', ko: '버리기, 단도, 독' },
    'Stars, control, payoff turns': { en: 'Stars, control, payoff turns', ko: '별, 제어, 폭발 턴' },
    'Summon, Doom, Osty, Souls': { en: 'Summon, Doom, Osty, Souls', ko: '소환, 종말, 휘발성 영혼' },
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
    Event: { en: 'Event', ko: '이벤트' },
    Token: { en: 'Token', ko: '토큰' },
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

let RELICS_DATA = window.STS2_RELICS_DATA || [];
let PATCH_NOTES_DATA = window.STS2_PATCH_NOTES || { generatedAt: '', source: '', items: [] };

let CARD_TEXT_OVERRIDE_MAP = {
  '35-beat-down': {
    base: '버린 카드 더미에서 무작위 공격 카드 3장을 사용합니다.',
    upgraded: '버린 카드 더미에서 무작위 공격 카드 4장을 사용합니다.'
  },
  '39-believe-in-you': {
    base: '다른 플레이어가 에너지 3을 얻습니다.',
    upgraded: '다른 플레이어가 에너지 4를 얻습니다.'
  },
  '52-bolas': {
    base: '피해 3을 줍니다. 다음 턴 시작 시 이 카드를 손패로 되돌립니다.',
    upgraded: '피해 4를 줍니다. 다음 턴 시작 시 이 카드를 손패로 되돌립니다.'
  },
  '83-catastrophe': {
    base: '뽑을 카드 더미에서 무작위 카드 2장을 사용합니다.',
    upgraded: '뽑을 카드 더미에서 무작위 카드 3장을 사용합니다.'
  },
  '108-coordinate': {
    base: '이번 턴 동안 다른 플레이어에게 힘 5를 부여합니다.',
    upgraded: '이번 턴 동안 다른 플레이어에게 힘 8을 부여합니다.'
  },
  '124-dark-shackles': {
    base: '이번 턴 동안 적의 힘을 9 낮춥니다. 소멸.',
    upgraded: '이번 턴 동안 적의 힘을 15 낮춥니다. 소멸.'
  },
  '153-discovery': {
    base: '무작위 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴 동안 그 카드의 비용은 0이 됩니다. 소멸.',
    upgraded: '무작위 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴 동안 그 카드의 비용은 0이 됩니다.'
  },
  '174-entropy': {
    base: '내 턴 시작 시 손패의 카드 1장을 변화시킵니다.',
    upgraded: '선천성. 내 턴 시작 시 손패의 카드 1장을 변화시킵니다.'
  },
  '176-equilibrium': {
    base: '방어도 13을 얻습니다. 이번 턴에는 손패를 보존합니다.',
    upgraded: '방어도 16을 얻습니다. 이번 턴에는 손패를 보존합니다.'
  },
  '179-eternal-armor': {
    base: '판금 7을 얻습니다.',
    upgraded: '판금 9를 얻습니다.'
  },
  '187-fasten': {
    base: '수비 카드로 얻는 방어도가 5 증가합니다.',
    upgraded: '수비 카드로 얻는 방어도가 7 증가합니다.'
  },
  '197-finesse': {
    base: '방어도 4를 얻습니다. 카드를 1장 뽑습니다.',
    upgraded: '방어도 7을 얻습니다. 카드를 1장 뽑습니다.'
  },
  '199-fisticuffs': {
    base: '피해 7을 줍니다. 가한 피해만큼 방어도를 얻습니다.',
    upgraded: '피해 9를 줍니다. 가한 피해만큼 방어도를 얻습니다.'
  },
  '203-flash-of-steel': {
    base: '피해 5를 줍니다. 카드를 1장 뽑습니다.',
    upgraded: '피해 8을 줍니다. 카드를 1장 뽑습니다.'
  },
  '233-gold-axe': {
    base: '이번 전투 동안 사용한 카드 수만큼 피해를 줍니다.',
    upgraded: '보존. 이번 전투 동안 사용한 카드 수만큼 피해를 줍니다.'
  },
  '245-hand-of-greed': {
    base: '피해 20을 줍니다. 적을 처치하면 골드 20을 얻습니다.',
    upgraded: '피해 25을 줍니다. 적을 처치하면 골드 25을 얻습니다.'
  },
  '265-huddle-up': {
    base: '모든 아군이 카드를 2장 뽑습니다.',
    upgraded: '모든 아군이 카드를 3장 뽑습니다.'
  },
  '270-impatience': {
    base: '손패에 공격 카드가 없다면 카드를 2장 뽑습니다.',
    upgraded: '손패에 공격 카드가 없다면 카드를 3장 뽑습니다.'
  },
  '282-jack-of-all-trades': {
    base: '무작위 무색 카드 1장을 손패에 추가합니다. 소멸.',
    upgraded: '무작위 무색 카드 2장을 손패에 추가합니다. 소멸.'
  },
  '283-jackpot': {
    base: '피해 25를 줍니다. 비용이 0인 무작위 카드 3장을 손패에 추가합니다.',
    upgraded: '피해 30을 줍니다. 비용이 0인 강화된 무작위 카드 3장을 손패에 추가합니다.'
  },
  '289-knockdown': {
    base: '피해 10을 줍니다. 이번 턴 동안 대상은 다른 플레이어에게서 2배 피해를 받습니다.',
    upgraded: '피해 14를 줍니다. 이번 턴 동안 대상은 다른 플레이어에게서 3배 피해를 받습니다.'
  },
  '299-lift': {
    base: '다른 플레이어에게 방어도 11을 부여합니다.',
    upgraded: '다른 플레이어에게 방어도 16을 부여합니다.'
  },
  '309-master-of-strategy': {
    base: '카드를 3장 뽑습니다. 소멸.',
    upgraded: '카드를 4장 뽑습니다. 소멸.'
  },
  '319-mind-blast': {
    base: '뽑을 카드 더미의 카드 수만큼 피해를 줍니다.',
    upgraded: '비용이 1에서 0으로 감소합니다.'
  },
  '355-panache': {
    base: '한 턴에 카드를 5장 사용할 때마다 모든 적에게 피해 10을 줍니다.',
    upgraded: '한 턴에 카드를 5장 사용할 때마다 모든 적에게 피해 14을 줍니다.'
  },
  '356-panic-button': {
    base: '방어도 30을 얻습니다. 2턴 동안 카드로는 방어도를 얻을 수 없습니다. 소멸.',
    upgraded: '방어도 40을 얻습니다. 2턴 동안 카드로는 방어도를 얻을 수 없습니다. 소멸.'
  },
  '376-prep-time': {
    base: '내 턴 시작 시 활력 4를 얻습니다.',
    upgraded: '내 턴 시작 시 활력 6을 얻습니다.'
  },
  '379-production': {
    base: '에너지 1을 얻습니다.',
    upgraded: '에너지 2를 얻습니다.'
  },
  '394-rally': {
    base: '모든 플레이어가 방어도 12를 얻습니다.',
    upgraded: '모든 플레이어가 방어도 17을 얻습니다.'
  },
  '410-restlessness': {
    base: '보존. 손패가 비어 있다면 카드를 2장 뽑고 에너지 2를 얻습니다.',
    upgraded: '보존. 손패가 비어 있다면 카드를 3장 뽑고 에너지 3을 얻습니다.'
  },
  '424-scrawl': {
    base: '손패가 가득 찰 때까지 카드를 뽑습니다. 소멸.',
    upgraded: '보존. 손패가 가득 찰 때까지 카드를 뽑습니다. 소멸.'
  },
  '445-shockwave': {
    base: '모든 적에게 약화와 취약을 3 부여합니다. 소멸.',
    upgraded: '모든 적에게 약화와 취약을 5 부여합니다. 소멸.'
  },
  '471-splash': {
    base: '다른 캐릭터의 무작위 공격 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다.',
    upgraded: '다른 캐릭터의 무작위 강화 공격 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다.'
  },
  '507-tag-team': {
    base: '피해 11을 줍니다. 다음에 다른 플레이어가 대상에게 쓰는 공격 카드가 한 번 더 발동합니다.',
    upgraded: '피해 15를 줍니다. 다음에 다른 플레이어가 대상에게 쓰는 공격 카드가 한 번 더 발동합니다.'
  },
  '514-the-bomb': {
    base: '3턴 후 턴 종료 시 모든 적에게 피해 40을 줍니다.',
    upgraded: '3턴 후 턴 종료 시 모든 적에게 피해 50을 줍니다.'
  },
  '515-the-gambit': {
    base: '방어도 50을 얻습니다. 이번 전투에서 막히지 않은 공격 피해를 받으면 즉사합니다.',
    upgraded: '방어도 75를 얻습니다. 이번 전투에서 막히지 않은 공격 피해를 받으면 즉사합니다.'
  },
  '520-thinking-ahead': {
    base: '카드를 2장 뽑습니다. 손패의 카드 1장을 뽑을 카드 더미 맨 위에 올립니다.',
    upgraded: '카드를 2장 뽑습니다. 손패의 카드 1장을 뽑을 카드 더미 맨 위에 올립니다. 소멸하지 않습니다.'
  },
  '537-ultimate-defend': {
    base: '방어도 11을 얻습니다.',
    upgraded: '방어도 15를 얻습니다.'
  },
  '538-ultimate-strike': {
    base: '피해 14를 줍니다.',
    upgraded: '피해 20을 줍니다.'
  },
  '552-volley': {
    base: '무작위 적에게 피해 10을 X번 줍니다.',
    upgraded: '무작위 적에게 피해 14를 X번 줍니다.'
  },
  '554-waste-away': {
    base: '매 턴마다 얻는 에너지가 1 감소합니다.'
  }
};

let RELIC_DESCRIPTION_OVERRIDE_MAP = Object.assign(
  {},
  ...Object.values(CHARACTER_RELICS).map(function (items) {
    return Object.fromEntries(items.map(function (relic) { return [relic.name, relic.description.ko]; }));
  }),
  Object.fromEntries(GLOBAL_RELICS.map(function (relic) { return [relic.name, relic.description.ko]; })),
  {
    'Archaic Tooth': '획득 시 시작 카드 1장을 고대의 카드로 변화시킵니다.',
    'Bone Tea': '다음 전투 시작 시 시작 손패의 모든 카드를 강화합니다.',
    'Calling Bell': '획득 시 특별한 저주 카드 1장과 유물 3개를 얻습니다.',
    'Choices Paradox': '매 전투 시작 시 무작위 카드 5장 중 1장을 손패로 가져오고, 선택한 카드에 보존을 부여합니다.',
    'Crossbow': '내 턴 시작 시 무작위 공격 카드 1장을 손패로 가져옵니다. 이번 턴에 그 카드의 비용은 0이 됩니다.',
    'Cursed Pearl': '획득 시 탐욕을 받고 골드 333을 얻습니다.',
    'Diamond Diadem': '한 턴에 카드를 2장 이하로 사용했다면, 적에게 받는 피해가 절반이 됩니다.',
    'Distinguished Cape': '획득 시 최대 체력을 9 잃고, 덱에 영체화 3장을 추가합니다.',
    'Dusty Tome': '획득 시 고대 카드 1장을 얻습니다.',
    'Ember Tea': '다음 5번의 전투 시작 시 힘 2를 얻습니다.',
    'Fur Coat': '획득 시 무작위 전투 7개에 표식을 남깁니다. 해당 전투의 적은 체력이 1이 됩니다.',
    'Golden Pearl': '획득 시 골드 150을 얻습니다.',
    'Large Capsule': '획득 시 무작위 유물 2개를 얻고, 덱에 타격과 수비를 1장씩 추가합니다.',
    'Lava Rock': '1막 보스가 유물 2개를 떨어뜨립니다.',
    'The Chosen Cheese': '매 전투 종료 시 최대 체력이 1 증가합니다.',
    'Very Hot Cocoa': '매 전투 시작 시 에너지 4를 추가로 얻습니다.'
  }
);

let RELIC_NAME_MAP = {
  'Burning Blood': { ko: '불타는 혈액' },
  'Black Blood': { ko: '어두운 피' },
  'Paper Frog': { ko: '종이 게구리' },
  'Red Skull': { ko: '붉은 해골' },
  'Ring of the Snake': { ko: '뱀의 반지' },
  'Ring of the Serpent': { ko: '비룡의 반지' },
  'Snecko Skull': { ko: '스네코 해골' },
  'The Specimen': { ko: '표본 병' },
  'Divine Right': { ko: '신성한 빛' },
  'Royal Censer': { ko: '왕실 향로' },
  'Astral Dial': { ko: '성계 다이얼' },
  'Asterism': { ko: '성군' },
  'Bound Phylactery': { ko: '구속된 성물함' },
  'Soul Cage': { ko: '영혼 우리' },
  'Funeral Bell': { ko: '장례 종' },
  'Wake Candle': { ko: '각성 촛불' },
  'Cracked Core': { ko: '부서진 핵' },
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


let RELIC_NAME_OVERRIDE_MAP = {
  'Akabeko': '아카베코',
  'Amethyst Aubergine': '자수정 가지',
  'Art of War': '전쟁의 기술',
  'Bing Bong': '빙 봉',
  'Bookmark': '책갈피',
  'Bowler Hat': '중절모',
  'Candelabra': '촛대',
  'Chandelier': '샹들리에',
  'Demon Tongue': '악마의 혀',
  'Ectoplasm': '엑토플라즘',
  'Fencing Manual': '펜싱 매뉴얼',
  'Festive Popper': '축제 팝퍼',
  'Galactic Dust': '은하의 먼지',
  'Gorget': '고젯',
  'Hand Drill': '핸드 드릴',
  'History Course': '역사 강좌',
  'Ice Cream': '아이스크림',
  'Juzu Bracelet': '주주 팔찌',
  'Kifuda': '기후다',
  'Letter Opener': '봉투칼',
  'Lucky Fysh': '행운의 피시',
  'Maw Bank': '아가리 은행',
  'Meal Ticket': '식권',
  'Membership Card': '멤버십 카드',
  'Metronome': '메트로놈',
  'Miniature Cannon': '소형 대포',
  'Mystic Lighter': '신비한 라이터',
  'Ninja Scroll': '닌자 두루마리',
  'Orange Dough': '오렌지 반죽',
  'Pantograph': '팬터그래프',
  'Paper Krane': '종이 학',
  'Pendulum': '진자',
  'Permafrost': '영구동토',
  'Power Cell': '파워 셀',
  'Prayer Wheel': '기도의 바퀴',
  'Runic Capacitor': '룬 축전기',
  'Shuriken': '수리검',
  'Sozu': '소주',
  'Strike Dummy': '스트라이크 더미',
  'Storybook': '이야기책',
  'Symbiotic Virus': '공생 바이러스',
  'Tingsha': '팅샤',
  'Tough Bandages': '질긴 붕대',
  'Tuning Fork': '튜닝 포크',
  'Twisted Funnel': '뒤틀린 깔때기',
  'Vambrace': '암가드',
  'Very Hot Cocoa': '아주 뜨거운 코코아',
  'Yummy Cookie': '맛있는 쿠키'
};

function transliterateTokenToKo(token) {
  let value = String(token || '').toLowerCase().replace(/[^a-z]/g, '');
  if (!value) {
    return token;
  }
  let rules = [
    ['tion', '션'], ['ture', '처'], ['sure', '저'], ['ph', '프'], ['sh', '시'], ['ch', '치'], ['ck', '크'],
    ['th', '스'], ['qu', '쿠'], ['ng', '응'], ['oo', '우'], ['ee', '이'], ['ea', '이'], ['ou', '아우'], ['ow', '오우']
  ];
  rules.forEach(function (pair) { value = value.split(pair[0]).join(pair[1]); });
  let chars = {
    a:'아', b:'브', c:'크', d:'드', e:'에', f:'프', g:'그', h:'흐', i:'이', j:'지', k:'크', l:'르', m:'므',
    n:'느', o:'오', p:'프', q:'쿠', r:'르', s:'스', t:'트', u:'우', v:'브', w:'우', x:'엑스', y:'이', z:'즈'
  };
  value = value.split('').map(function (ch) { return chars[ch] || ch; }).join('');
  value = value.replace(/(브|드|그|크|트|프|르|느|므|스|지|우|이|에|오){2,}/g, function (m) { return m; });
  return value;
}

let RELIC_NAME_TOKEN_MAP = {"abacus": "주판", "alchemical": "연금술", "anchor": "닻", "ancient": "오래된", "arcane": "비전", "astrolabe": "혼천의", "bag": "주머니", "beast": "야수", "beautiful": "아름다운", "belt": "벨트", "bell": "종", "bellows": "풀무", "black": "검은", "blessed": "축복받은", "blood": "피", "bone": "뼈", "book": "책", "box": "상자", "bracelet": "팔찌", "bread": "빵", "brilliant": "찬란한", "brimstone": "유황", "bronze": "청동", "buckle": "버클", "burning": "불타는", "cage": "우리", "cauldron": "가마솥", "candle": "촛불", "captain": "선장", "castle": "성", "catcher": "포수", "centennial": "백주년", "chemical": "케미컬", "chip": "칩", "choker": "초커", "clasp": "버클", "cleat": "클리트", "cloak": "망토", "club": "곤봉", "cocoa": "코코아", "coffer": "금고", "coin": "동전", "compass": "나침반", "conch": "소라", "core": "코어", "courier": "배달부", "cracked": "금 간", "crossbow": "쇠뇌", "crucible": "도가니", "cursed": "저주받은", "dagger": "단검", "darkstone": "암흑석", "data": "데이터", "delicate": "섬세한", "destiny": "운명", "diamond": "다이아몬드", "dial": "다이얼", "disk": "디스크", "distinguished": "고귀한", "dolly": "돌리", "dream": "꿈", "drill": "드릴", "driftwood": "유목", "dusty": "먼지 낀", "earring": "귀걸이", "egg": "알", "electric": "전기", "ember": "불씨", "emotion": "감정", "eternal": "영원한", "eye": "눈", "fan": "부채", "feather": "깃털", "fiddle": "바이올린", "flagon": "술병", "flower": "꽃", "fog": "안개", "forgotten": "잊힌", "frog": "개구리", "frozen": "얼어붙은", "fruit": "과일", "funeral": "장례", "fur": "모피", "game": "게임", "gambling": "도박", "gem": "보석", "ghost": "유령", "girya": "기리야", "glass": "유리", "glitter": "반짝이", "gold": "황금", "golden": "황금", "gremlin": "그렘린", "growth": "성장", "hammer": "망치", "happy": "행복한", "hat": "모자", "helmet": "투구", "history": "역사", "horn": "뿔", "hot": "뜨거운", "hourglass": "모래시계", "hug": "포옹", "ice": "얼음", "incense": "향", "insect": "곤충", "intimidating": "위협적인", "iron": "철", "ivory": "상아", "jade": "비취", "jewelry": "보석", "jeweled": "보석 장식", "knife": "칼", "kunai": "쿠나이", "kusarigama": "쿠사리가마", "lantern": "랜턴", "large": "큰", "lasting": "오래가는", "lava": "용암", "leaf": "잎", "leafy": "잎사귀", "letter": "편지", "lizard": "도마뱀", "looming": "드리운", "lost": "잃어버린", "lucky": "행운의", "lunar": "달의", "mailbox": "우편함", "mango": "망고", "manual": "매뉴얼", "marbles": "구슬", "mask": "가면", "meal": "식사", "meat": "고기", "membership": "회원권", "mercury": "수은", "mini": "미니", "miniature": "소형", "mirror": "거울", "mushroom": "버섯", "mystery": "수수께끼", "mystic": "신비한", "new": "새", "nib": "촉", "nunchaku": "쌍절곤", "oddly": "이상하게", "old": "오래된", "orichalcum": "오리칼쿰", "ornamental": "장식용", "orrery": "천구의", "paint": "채색", "pandora": "판도라", "pastry": "페이스트리", "black": "검은", "paper": "종이", "paradox": "역설", "parasol": "양산", "periapt": "부적", "philosopher": "철학자", "phrog": "개구리", "phylactery": "성물함", "piece": "조각", "pillow": "베개", "planisphere": "성구", "pocketwatch": "회중시계", "pomander": "포맨더", "popper": "팝퍼", "potion": "물약", "preparation": "준비", "preserved": "보존된", "prismatic": "프리즘", "puzzle": "퍼즐", "pyramid": "피라미드", "rainbow": "무지개", "radiant": "빛나는", "regal": "호화로운", "regent": "리젠트", "ring": "반지", "ripple": "잔물결", "rock": "바위", "rod": "막대", "rose": "장미", "rouge": "루주", "royal": "왕실", "ruined": "망가진", "runic": "룬의", "rug": "러그", "sai": "사이", "sand": "모래", "scales": "비늘", "scarf": "스카프", "scroll": "두루마리", "scissors": "가위", "screaming": "비명을 지르는", "seed": "씨앗", "serpent": "뱀신", "shield": "방패", "shovel": "삽", "signet": "인장", "silent": "사일런트", "silver": "은", "skull": "해골", "sling": "투석끈", "smooth": "매끈한", "snake": "뱀", "snecko": "스네코", "soul": "영혼", "sparkling": "반짝이는", "specimen": "표본", "spiked": "가시 달린", "stamp": "인장", "star": "별", "statue": "조각상", "sticks": "막대기", "stone": "돌", "strawberry": "딸기", "strength": "힘", "strike": "일격", "sturdy": "튼튼한", "sword": "검", "tea": "차", "tent": "천막", "tile": "타일", "tiny": "작은", "toad": "두꺼비", "toolbox": "도구함", "tooth": "이빨", "top": "꼭대기", "toxic": "맹독", "triangle": "삼각형", "trinket": "장신구", "tungsten": "텅스텐", "tuning": "튜닝", "undying": "불사의", "unceasing": "끝없는", "unbound": "해방된", "unsettling": "불안한", "vajra": "바즈라", "velvet": "벨벳", "venerable": "유서 깊은", "vexing": "짜증나는", "vial": "바이알", "vitruvian": "비트루비안", "waffle": "와플", "wake": "각성", "war": "전쟁", "watch": "시계", "wheel": "바퀴", "whispering": "속삭이는", "whistle": "호루라기", "white": "흰", "wing": "날개", "wisp": "위스프", "wongo": "웡고", "yummy": "맛있는"};

function translateRelicNameToKo(name) {
  if (!name) {
    return '';
  }
  let entry = RELIC_NAME_MAP[name];
  if (entry && entry.ko) {
    return entry.ko;
  }
  if (RELIC_NAME_OVERRIDE_MAP[name]) {
    return RELIC_NAME_OVERRIDE_MAP[name];
  }
  let normalized = String(name).replace(/\?\?\?$/g, '').trim();
  let suffix = normalized === name ? '' : '???';
  let tokens = normalized.match(/[A-Za-z]+(?:'[A-Za-z]+)?|[0-9]+|[^A-Za-z0-9\s]+/g) || [normalized];
  let translated = tokens.map(function (token) {
    if (/^[0-9]+$/.test(token) || /^[^A-Za-z0-9]+$/.test(token)) {
      return token;
    }
    let lower = token.toLowerCase();
    if (RELIC_NAME_TOKEN_MAP[lower]) {
      return RELIC_NAME_TOKEN_MAP[lower];
    }
    if (lower.endsWith("'s")) {
      let stem = lower.slice(0, -2);
      if (RELIC_NAME_TOKEN_MAP[stem]) {
        return RELIC_NAME_TOKEN_MAP[stem] + '의';
      }
    }
    return transliterateTokenToKo(token);
  }).join(' ');
  translated = translated.replace(/\s+([?.!,])/g, '$1').replace(/\s+/g, ' ').trim();
  return translated + suffix;
}

function getRelicEnglishNumberHints(text) {
  let source = String(text || '');
  let numbers = (source.match(/\d+%?/g) || []).slice();
  let starCount = (source.match(/Regent Star Energy/g) || []).length;
  let colorlessEnergyCount = (source.match(/Colorless Energy/g) || []).length;
  let necroEnergyCount = (source.match(/Necrobinder Energy/g) || []).length;
  function first(match) {
    return match ? match[1] : '';
  }
  return {
    numbers: numbers,
    starCount: starCount,
    colorlessEnergyCount: colorlessEnergyCount,
    necroEnergyCount: necroEnergyCount,
    heal: first(source.match(/heal (\d+) HP/i)),
    block: first(source.match(/gain (\d+) Block/i)) || first(source.match(/with (\d+) Block/i)),
    damage: first(source.match(/deal (\d+) damage/i)),
    cards: first(source.match(/draw (\d+) additional cards?/i)) || first(source.match(/Transform (\d+) cards?/i)) || first(source.match(/remove (\d+) cards?/i)) || first(source.match(/choose (\d+) cards?/i)) || first(source.match(/add (\d+) random .*? cards? into your Hand/i)) || first(source.match(/add (\d+) Souls? into your Draw Pile/i)) || first(source.match(/add (\d+) Shivs? into your Hand/i)) || first(source.match(/add (\d+) zero-cost cards? from your Draw Pile into your Hand/i)) || first(source.match(/Every (\d+) cards? you add to your Deck/i)),
    maxHp: first(source.match(/Max HP by (\d+)/i)),
    gold: first(source.match(/(\d+) additional Gold/i)) || first(source.match(/gain (\d+) Gold/i)),
    strength: first(source.match(/gain (\d+) Strength(?:\.| and|$)/i)) || first(source.match(/with (\d+) Strength/i)) || first(source.match(/have (\d+) additional Strength/i)),
    selfStrength: first(source.match(/gain (\d+) Strength and ALL enemies gain/i)),
    enemyStrength: first(source.match(/ALL enemies gain (\d+) Strength/i)),
    dexterity: first(source.match(/gain (\d+) Dexterity/i)) || first(source.match(/with (\d+) Dexterity/i)) || first(source.match(/have (\d+) additional Dexterity/i)),
    focus: first(source.match(/with (\d+) Focus/i)) || first(source.match(/gain (\d+) Focus/i)),
    poison: first(source.match(/apply (\d+) Poison/i)),
    vulnerable: first(source.match(/apply (\d+) Vulnerable/i)),
    thorns: first(source.match(/with (\d+) Thorns/i)),
    plating: first(source.match(/gain (\d+) Plating/i)),
    orbCount: first(source.match(/Channel (\d+) Orbs?/i)) || first(source.match(/Channel (\d+) [A-Za-z]+/i)),
    lightning: first(source.match(/Channel (\d+) Lightning/i)),
    dark: first(source.match(/Channel (\d+) Dark/i)),
    potionSlots: first(source.match(/gain (\d+) potion slots/i)) || first(source.match(/gain (\d+) potion slots filled/i)),
    turns: first(source.match(/Every (\d+) turns?/i)) || first(source.match(/first (\d+) turns/i)),
    hpThreshold: first(source.match(/at or below (\d+)%/i)),
    extraDamage: first(source.match(/deal (\d+) additional damage/i)),
    summon: first(source.match(/Summon (\d+)/i)),
    startOfCombat: first(source.match(/combat, Summon (\d+)/i)),
    startOfTurn: first(source.match(/turn, Summon (\d+)/i)),
    forge: first(source.match(/Forge (\d+)/i)),
    repeat: first(source.match(/(\d+) additional Orb Slots/i)),
    energyThreshold: first(source.match(/costs .*?(\d+) or more/i))
  };
}

function formatRelicDescriptionText(relic) {
  if (!relic || !relic.description) {
    return '';
  }
  if (RELIC_DESCRIPTION_OVERRIDE_MAP[relic.name]) {
    return RELIC_DESCRIPTION_OVERRIDE_MAP[relic.name];
  }
  let rawKo = String(relic.description.ko || relic.description.en || '');
  let rawEn = String(relic.description.en || '');
  let hints = getRelicEnglishNumberHints(rawEn);
  let result = rawKo;
  let tokenMap = {
    Damage: hints.damage,
    Block: hints.block,
    Cards: hints.cards,
    Heal: hints.heal,
    MaxHp: hints.maxHp,
    Gold: hints.gold,
    StrengthPower: hints.strength,
    SelfStrength: hints.selfStrength || hints.strength,
    EnemyStrength: hints.enemyStrength,
    DexterityPower: hints.dexterity,
    FocusPower: hints.focus,
    PoisonPower: hints.poison,
    VulnerablePower: hints.vulnerable,
    VigorPower: hints.numbers[0] || '',
    ThornsPower: hints.thorns,
    PlatingPower: hints.plating,
    PotionSlots: hints.potionSlots,
    Turns: hints.turns,
    HpThreshold: hints.hpThreshold,
    ExtraDamage: hints.extraDamage,
    BlockNextTurn: hints.block,
    Shivs: hints.cards,
    Forge: hints.forge,
    Stars: hints.starCount ? String(hints.starCount) : '',
    Summon: hints.summon,
    StartOfCombat: hints.startOfCombat,
    StartOfTurn: hints.startOfTurn,
    OrbCount: hints.orbCount,
    Lightning: hints.lightning,
    Dark: hints.dark,
    Repeat: hints.repeat,
    EnergyThreshold: hints.energyThreshold,
    Discount: hints.numbers[0] || '',
    Enchantment: hints.numbers[0] || ''
  };
  result = result
    .replace(/\[(?:blue|gold|purple|red|green|white|orange)\]([\s\S]*?)\[\/(?:blue|gold|purple|red|green|white|orange)\]/g, '$1')
    .replace(/\{Turns:choose\(1\):첫 번째 턴\|첫 \[blue\]\{\}\[\/blue\] 턴\}/g, function () {
      return hints.turns ? '첫 ' + hints.turns + '턴' : '첫 턴';
    })
    .replace(/\{singleStarIcon\}/g, '별 에너지 1')
    .replace(/\{Stars:starIcons\(\)\}/g, hints.starCount ? '별 에너지 ' + hints.starCount : '별 에너지')
    .replace(/\{(?:energyPrefix|Energy):energyIcons\((\d*)\)\}/g, function (_, amount) {
      let count = Number(amount || '0') || hints.colorlessEnergyCount || hints.necroEnergyCount || 1;
      return count > 1 ? '에너지 ' + count : '에너지 1';
    })
    .replace(/\{([A-Za-z]+)\}/g, function (_, token) {
      return tokenMap[token] || '';
    });
  if (/\{[^}]*[:|][^}]*\}/.test(result)) {
    result = translateRelicTextToKo(rawEn);
  }
  result = result
    .replace(/\{[^}]+\}/g, '')
    .replace(/\[\/?[a-z]+\]/gi, '')
    .replace(/\b손\b/g, '손패')
    .replace(/손패에 있는/g, '손패의')
    .replace(/손패으로/g, '손패로')
    .replace(/방어도\s*를\s*(\d+)\s*얻습니다/g, '방어도 $1을 얻습니다')
    .replace(/피해를\s*(\d+)\s*줍니다/g, '피해 $1을 줍니다')
    .replace(/체력\s*(\d+)을 회복합니다/g, '체력을 $1 회복합니다')
    .replace(/체력을\s*(\d+)\s*회복합니다/g, '체력을 $1 회복합니다')
    .replace(/밀집을\s*(\d+)\s*얻습니다/g, '집중 $1을 얻습니다')
    .replace(/민첩을\s*(\d+)\s*얻습니다/g, '민첩 $1을 얻습니다')
    .replace(/힘을\s*(\d+)\s*얻습니다/g, '힘 $1을 얻습니다')
    .replace(/집중을\s*(\d+)\s*얻습니다/g, '집중 $1을 얻습니다')
    .replace(/중독을\s*(\d+)\s*부여합니다/g, '중독 $1를 부여합니다')
    .replace(/취약을\s*(\d+)\s*부여합니다/g, '취약 $1를 부여합니다')
    .replace(/활력을\s*(\d+)\s*얻습니다/g, '활력 $1을 얻습니다')
    .replace(/가시를\s*(\d+)\s*얻습니다/g, '가시 $1을 얻습니다')
    .replace(/판금을\s*(\d+)\s*얻습니다/g, '판금 $1을 얻습니다')
    .replace(/포션 슬롯을\s*(\d+)\s*개 얻습니다/g, '포션 슬롯 $1개를 얻습니다')
    .replace(/카드를 추가로\s*(\d+)장 뽑습니다/g, '카드를 추가로 $1장 뽑습니다')
    .replace(/카드를\s*(\d+)장 덜 뽑습니다/g, '카드를 $1장 덜 뽑습니다')
    .replace(/무작위 무색 카드를\s*(\d+)장 손패로 가져옵니다/g, '무작위 무색 카드 $1장을 손패로 가져옵니다')
    .replace(/무작위 휘발성 카드\s*(\d+)장을 손패로 가져옵니다/g, '무작위 휘발성 카드 $1장을 손패로 가져옵니다')
    .replace(/단도를\s*(\d+)장 손패로 가져옵니다/g, '단도 $1장을 손패로 가져옵니다')
    .replace(/영혼을\s*(\d+)장 섞어 넣습니다/g, '영혼 $1장을 섞어 넣습니다')
    .replace(/비용이 0인 카드를\s*(\d+)장 손패로 가져옵니다/g, '비용이 0인 카드 $1장을 손패로 가져옵니다')
    .replace(/최대 체력이\s*(\d+)%\s*증가합니다/g, '최대 체력이 $1% 증가합니다')
    .replace(/다음 전투 시작 시 추가로 에너지 1을 얻습니다/g, '다음 전투 시작 시 에너지 1을 추가로 얻습니다')
    .replace(/추가로 에너지 1을 얻습니다/g, '에너지 1을 추가로 얻습니다')
    .replace(/에너지 1를/g, '에너지 1을')
    .replace(/(신속|피해) (\d+)를/g, '$1 $2을')
    .replace(/체력이\s*%\s*이하라면/g, '체력이 50% 이하라면')
    .replace(/카드를 추가로\s*장 뽑습니다/g, '카드를 2장 더 뽑습니다')
    .replace(/카드를\s*장 덜 뽑습니다/g, '카드를 2장 덜 뽑습니다')
    .replace(/카드를\s*장 선택/g, '카드 3장을 선택')
    .replace(/덱에서 카드를\s*장 제거/g, '덱에서 카드 4장을 제거')
    .replace(/포션 슬롯을\s*개 얻습니다/g, '포션 슬롯 4개를 얻습니다')
    .replace(/어지러움을\s*장 섞어 넣습니다/g, '어지러움 3장을 섞어 넣습니다')
    .replace(/최대\s*장의 카드를/g, '최대 카드 6장을')
    .replace(/체력을\s*회복합니다/g, '체력을 12 회복합니다')
    .replace(/모든 적에게 피해를 줍니다/g, '모든 적에게 피해 30을 줍니다')
    .replace(/(중독|취약|힘) (\d+)을/g, '$1 $2를')
    .replace(/힘 (\d+)를/g, '힘 $1을')
    .replace(/중독 (\d+)을/g, '중독 $1를')
    .replace(/취약 (\d+)을/g, '취약 $1를')
    .replace(/민첩 (\d+)를/g, '민첩 $1을')
    .replace(/집중 (\d+)를/g, '집중 $1을')
    .replace(/힘을 (\d+) 얻고/g, '힘 $1를 얻고')
    .replace(/민첩을 (\d+) 얻습니다/g, '민첩 $1을 얻습니다')
    .replace(/힘을 (\d+) 얻습니다/g, '힘 $1을 얻습니다')
    .replace(/\s+([?.!,])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return result;
}

function translateRelicTextToKo(text) {
  if (!text) {
    return '';
  }
  let result = String(text).trim();
  result = result.replace(/Regent Star Energy/g, '별 에너지').replace(/White Star/g, '백색 별').replace(/Black Star/g, '흑색 별').replace(/Necrobinder Energy/g, '네크로바인더 에너지').replace(/Colorless Energy/g, '무색 에너지');
  let regexReplacements = [
    [/^At the end of combat, heal (\d+) HP\.$/, '전투 종료 시 체력을 $1 회복합니다.'],
    [/^At the start of each combat, heal (\d+) HP\.$/, '전투 시작 시 체력을 $1 회복합니다.'],
    [/^If your HP is at or below (\d+)% at the end of combat, heal (\d+) HP\.$/, '전투 종료 시 체력이 $1% 이하라면 체력을 $2 회복합니다.'],
    [/^At the start of each combat, draw (\d+) additional cards?\.$/, '전투 시작 시 카드를 $1장 더 뽑습니다.'],
    [/^At the start of Elite combats, draw (\d+) additional cards?\.$/, '엘리트 전투 시작 시 카드를 $1장 더 뽑습니다.'],
    [/^At the start of your turn, draw (\d+) additional cards?\. Start each combat Confused\.$/, '턴 시작 시 카드를 $1장 더 뽑습니다. 전투 시작 시 혼란을 얻습니다.'],
    [/^At the start of each turn, draw (\d+) additional cards?\. You may not draw cards during your turn\.$/, '매 턴 시작 시 카드를 $1장 더 뽑습니다. 그 후 자신의 턴에는 카드를 뽑을 수 없습니다.'],
    [/^Every (\d+) turns, draw (\d+) additional cards?\.$/, '$1턴마다 카드를 $2장 더 뽑습니다.'],
    [/^Start each combat with (\d+) Block\.$/, '전투 시작 시 방어도 $1을 얻습니다.'],
    [/^At the start of each combat, apply (\d+) Vulnerable to ALL enemies\.$/, '전투 시작 시 모든 적에게 취약 $1을 겁니다.'],
    [/^The first time you Channel (\d+) Orbs each combat, deal (\d+) damage to ALL enemies\.$/, '매 전투마다 처음으로 오브 $1개를 채널링하면 모든 적에게 피해 $2을 줍니다.'],
    [/^Upon pickup, gain (\d+) potion slots filled with random potions\.$/, '획득 시 무작위 물약으로 채워진 포션 슬롯 $1개를 얻습니다.'],
    [/^Upon pickup, Transform (\d+) cards, then Upgrade them\.$/, '획득 시 카드 $1장을 변형한 뒤 강화합니다.'],
    [/^Upon pickup, choose (\d+) cards in your Deck\. Enchant them with Swift (\d+)\.$/, '획득 시 덱에서 카드 $1장을 선택합니다. 그 카드들에 신속 $2을 부여합니다.'],
    [/^Upon pickup, raise your Max HP by (\d+)\. At the start of each combat, draw (\d+) fewer cards\.$/, '획득 시 최대 체력이 $1 증가합니다. 전투 시작 시 카드를 $2장 덜 뽑습니다.'],
    [/^Upon pickup, remove (\d+) cards from your Deck\. Whenever you shuffle your Draw Pile, add a Soot into your Draw Pile\.$/, '획득 시 덱에서 카드 $1장을 제거합니다. 드로우 더미를 섞을 때마다 그을음 1장을 드로우 더미에 추가합니다.'],
    [/^Gain 무색 에너지 at the start of each turn\. At the start of each combat, shuffle (\d+) Dazed into your Draw Pile\.$/, '매 턴 시작 시 무색 에너지 1을 얻습니다. 전투 시작 시 어지러움 $1장을 드로우 더미에 섞어 넣습니다.'],
    [/^Upon pickup, Transform up to (\d+) cards into Maul\.$/, '획득 시 최대 카드 $1장을 할퀴기로 변형합니다.'],
    [/^At the end of your turn, gain 별 에너지\.$/, '턴 종료 시 별 에너지를 얻습니다.'],
    [/^At the start of your turn, gain 별 에너지\.$/, '턴 시작 시 별 에너지를 얻습니다.'],
    [/^At the start of each combat, gain 무색 에너지\.$/, '전투 시작 시 무색 에너지를 얻습니다.'],
    [/^At the end of your turn, gain (.+)\.$/, '턴 종료 시 $1을 얻습니다.'],
    [/^At the start of your turn, gain (.+)\.$/, '턴 시작 시 $1을 얻습니다.'],
    [/^At the start of each combat, gain (.+)\.$/, '전투 시작 시 $1을 얻습니다.'],
    [/^Every (\d+) turns, gain (\d+) Energy\.$/, '$1턴마다 에너지 $2를 얻습니다.'],
    [/^If you end your turn without Block, gain (\d+) Block\.$/, '방어도 없이 턴을 끝내면 방어도 $1을 얻습니다.'],
    [/^Gain (\d+) Strength\.$/, '힘 $1을 얻습니다.'],
    [/^Gain (\d+) Dexterity\.$/, '민첩 $1을 얻습니다.'],
    [/^Gain (\d+) Focus\.$/, '집중 $1을 얻습니다.'],
    [/^Gain Colorless Energy at the start of each turn\. At the start of each combat, shuffle (\d+) Dazed into your Draw Pile\.$/, '매 턴 시작 시 무색 에너지 1을 얻습니다. 전투 시작 시 어지러움 $1장을 드로우 더미에 섞어 넣습니다.'],
    [/^Upon pickup, gain (\d+) Gold\.$/, '획득 시 골드 $1을 얻습니다.'],
    [/^Upon pickup, brew (\d+) random potions\.$/, '획득 시 무작위 물약 $1개를 만듭니다.'],
    [/^The effects of your cost X cards are increased by (\d+)\.$/, 'X 비용 카드의 효과가 $1 증가합니다.'],
    [/^Upon pickup, obtain an additional copy of a card in your Deck\.$/, '획득 시 덱의 카드 1장을 복제합니다.'],
    [/^Whenever you obtain a Curse, raise your Max HP by (\d+)\.$/, '저주를 얻을 때마다 최대 체력이 $1 증가합니다.']
  ];
  for (let i = 0; i < regexReplacements.length; i += 1) {
    if (regexReplacements[i][0].test(result)) {
      return result.replace(regexReplacements[i][0], regexReplacements[i][1]);
    }
  }
  let replacements = [
    ['Upon pickup, ', '획득 시 '],
    ['At the start of each combat, ', '전투 시작 시 '],
    ['At the start of combat, ', '전투 시작 시 '],
    ['At the start of your turn, ', '턴 시작 시 '],
    ['At the start of your 2 nd turn, ', '2턴 시작 시 '],
    ['At the start of your 3 rd turn, ', '3턴 시작 시 '],
    ['At the end of combat, ', '전투 종료 시 '],
    ['At the end of your turn, ', '턴 종료 시 '],
    ['Whenever you add a card to your Deck', '덱에 카드를 추가할 때마다'],
    ['Whenever you obtain a Curse', '저주를 얻을 때마다'],
    ['Whenever you kill an Elite', '엘리트를 처치할 때마다'],
    ['Whenever you shuffle your Draw Pile', '드로우 더미를 섞을 때마다'],
    ['If you do not play any Attacks during your turn, ', '이번 턴에 공격 카드를 한 장도 플레이하지 않았다면 '],
    ['If you end your turn without Block, ', '방어도 없이 턴을 끝내면 '],
    ['While you have no potions, ', '물약이 없으면 '],
    ['Start each combat with ', '전투 시작 시 '],
    ['Start combat with ', '전투 시작 시 '],
    ['raise your Max HP by ', '최대 체력을 '],
    ['draw 2 fewer cards', '카드를 2장 덜 뽑습니다'],
    ['draw ', '카드를 '],
    [' additional cards', '장 더 뽑습니다'],
    [' additional card', '장 더 뽑습니다'],
    ['heal ', '체력을 '],
    ['Gain ', '획득: '],
    ['apply ', '부여: '],
    ['Upgrade', '강화'],
    ['Transform', '변형'],
    ['Exhaust', '소진'],
    ['Retain', '보유'],
    ['Channel', '채널링'],
    ['ALL enemies', '모든 적'],
    ['all enemies', '모든 적'],
    ['Elite enemies', '엘리트 적'],
    ['Elites', '엘리트'],
    ['Elite', '엘리트'],
    ['Draw Pile', '뽑을 카드 더미'],
    ['Discard Pile', '버린 카드 더미'],
    ['Hand', '손패'],
    ['Deck', '덱'],
    ['Rest Site', '휴식처'],
    ['potions', '물약'],
    ['potion', '물약'],
    ['cards', '카드'],
    ['card', '카드'],
    ['Gold', '골드'],
    ['HP', '체력'],
    ['Block', '방어도'],
    ['Strength', '힘'],
    ['Dexterity', '민첩'],
    ['Focus', '집중'],
    ['Vulnerable', '취약'],
    ['Weak', '약화'],
    ['Thorns', '가시'],
    ['Vigor', '격려'],
    ['Intangible', '무형'],
    ['Poison', '독'],
    ['Regent Star Energy', '별 에너지'],
    ['White Star', '백색 별'],
    ['Black Star', '흑색 별'],
    ['Necrobinder Energy', '네크로바인더 에너지'],
    ['Colorless Energy', '무색 에너지'],
    ['Energy', '에너지']
  ];
  replacements.forEach(function (pair) {
    result = result.split(pair[0]).join(pair[1]);
  });
  result = result.replace(/Whenever you discard a card during your turn, /g, '이번 턴에 카드를 버릴 때마다 ')
    .replace(/Whenever you play a Dagger, /g, '단도를 플레이할 때마다 ')
    .replace(/Whenever you play a Power, /g, '파워를 플레이할 때마다 ')
    .replace(/Whenever you create a Colorless 카드, /g, '무색 카드를 생성할 때마다 ')
    .replace(/Whenever you add a card to your 덱, /g, '덱에 카드를 추가할 때마다 ')
    .replace(/Whenever you add an Attack 카드 to your 덱, 강화 it\./g, '공격 카드를 덱에 추가할 때마다 그 카드를 강화합니다.')
    .replace(/Whenever you add a Skill into your 덱, 강화 it\./g, '스킬 카드를 덱에 추가할 때마다 그 카드를 강화합니다.')
    .replace(/Whenever you add a Power into your 덱, 강화 it\./g, '파워 카드를 덱에 추가할 때마다 그 카드를 강화합니다.')
    .replace(/At the start of your first 3 turns, /g, '첫 3턴 시작 시 ')
    .replace(/At the start of your 2nd turn, /g, '2턴 시작 시 ')
    .replace(/At the start of your 3rd turn, /g, '3턴 시작 시 ')
    .replace(/At the end of each turn, /g, '매 턴 종료 시 ')
    .replace(/At the start of each Boss combat, /g, '보스 전투 시작 시 ')
    .replace(/Whenever you Rest, /g, '휴식할 때마다 ')
    .replace(/Whenever you enter a shop room, /g, '상점 방에 들어갈 때마다 ')
    .replace(/Whenever you enter a 휴식처, /g, '휴식처에 들어갈 때마다 ')
    .replace(/Whenever an enemy dies, /g, '적이 죽을 때마다 ')
    .replace(/Whenever Osty attacks, /g, '오스티가 공격할 때마다 ')
    .replace(/add (\d+) random Colorless 카드 into your 손패/g, '무작위 무색 카드 $1장을 손패에 추가합니다')
    .replace(/add (\d+) random Ethereal 카드 into your 손패/g, '무작위 에테리얼 카드 $1장을 손패에 추가합니다')
    .replace(/add (\d+) Shivs into your 손패/g, '단도 $1장을 손패에 추가합니다')
    .replace(/add (\d+) Souls into your 드로우 더미/g, '영혼 $1개를 드로우 더미에 추가합니다')
    .replace(/add (\d+) zero-cost 카드 from your 드로우 더미 into your 손패/g, '비용이 0인 카드 $1장을 드로우 더미에서 손패로 가져옵니다')
    .replace(/gain (\d+) 방어도 next turn/g, '다음 턴에 방어도 $1을 얻습니다')
    .replace(/gain (\d+) 힘 this turn/g, '이번 턴에 힘 $1을 얻습니다')
    .replace(/gain (\d+) 민첩 this turn/g, '이번 턴에 민첩 $1을 얻습니다')
    .replace(/deal (\d+) damage to 모든 적/g, '모든 적에게 피해 $1을 줍니다')
    .replace(/deal (\d+) damage to a random enemy/g, '무작위 적 1명에게 피해 $1을 줍니다')
    .replace(/카드를 (\d+) 카드/g, '카드를 $1장 뽑습니다')
    .replace(/체력을 (\d+) 체력/g, '체력을 $1 회복합니다')
    .replace(/(\d+) additional 힘/g, '추가 힘 $1')
    .replace(/(\d+) additional 민첩/g, '추가 민첩 $1')
    .replace(/(\d+) additional 골드/g, '추가 골드 $1')
    .replace(/an additional 무색 에너지/g, '추가 무색 에너지 1')
    .replace(/무색 에너지 무색 에너지 무색 에너지/g, '무색 에너지 3')
    .replace(/무색 에너지 무색 에너지/g, '무색 에너지 2')
    .replace(/별 에너지 을/g, '별 에너지를')
    .replace(/무색 에너지 을/g, '무색 에너지를')
    .replace(/에너지 을/g, '에너지를');
  return result.replace(/\s+([?.!,])/g, '$1').replace(/\s+/g, ' ').trim();
}

RELICS_DATA = RELICS_DATA.map(function (relic) {
  if (relic.koName) {
    RELIC_NAME_MAP[relic.name] = Object.assign({}, RELIC_NAME_MAP[relic.name] || {}, { ko: relic.koName });
  } else if (!RELIC_NAME_MAP[relic.name]) {
    RELIC_NAME_MAP[relic.name] = { ko: translateRelicNameToKo(relic.name) };
  }
  relic.description = relic.description || {};
  if (!relic.description.ko && relic.description.en) {
    relic.description.ko = translateRelicTextToKo(relic.description.en);
  }
  return relic;
});

function translatePotionTextToKo(text) {
  let result = String(text || '');
  let directMap = {
    'Heal for 20% of your Max HP.': '최대 체력의 20%를 회복합니다.',
    'Apply 6 Poison.': '독 6을 겁니다.',
    'Gain 3 Stars.': '별 3개를 얻습니다.',
    'Apply 33 Doom.': '종말 33을 겁니다.',
    'Gain 2 Focus.': '집중 2를 얻습니다.',
    'Choose 1 of 3 random Attack cards to add into your Hand. It\'s free to play this turn.': '무작위 공격 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴에는 비용 없이 사용합니다.',
    'Gain 12 Block.': '방어도 12를 얻습니다.',
    'Choose 1 of 3 random Colorless cards to add into your Hand. It\'s free to play this turn.': '무작위 무색 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴에는 비용 없이 사용합니다.',
    'Gain 2 Dexterity.': '민첩 2를 얻습니다.',
    'Gain 2 Energy.': '에너지 2를 얻습니다.',
    'Deal 10 damage to ALL enemies.': '모든 적에게 피해 10을 줍니다.',
    'Deal 20 damage.': '피해 20을 줍니다.',
    'Gain 5 Strength. At the end of your turn, lose 5 Strength.': '힘 5를 얻습니다. 턴 종료 시 힘 5를 잃습니다.',
    'Choose 1 of 3 random Power cards to add into your Hand. It\'s free to play this turn.': '무작위 파워 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴에는 비용 없이 사용합니다.',
    'Choose 1 of 3 random Skill cards to add into your Hand. It\'s free to play this turn.': '무작위 스킬 카드 3장 중 1장을 선택해 손패에 추가합니다. 이번 턴에는 비용 없이 사용합니다.',
    'Gain 5 Dexterity. At the end of your turn, lose 5 Dexterity.': '민첩 5를 얻습니다. 턴 종료 시 민첩 5를 잃습니다.',
    'Gain 2 Strength.': '힘 2를 얻습니다.',
    'Draw 3 cards.': '카드를 3장 뽑습니다.',
    'Apply 3 Vulnerable.': '취약 3을 겁니다.',
    'Apply 3 Weak.': '약화 3을 겁니다.',
    'Exhaust any number of cards in your Hand.': '손패의 카드를 원하는 만큼 소멸시킵니다.',
    'Add 3 Upgraded Shivs into your Hand.': '강화된 단도 3장을 손패에 추가합니다.',
    'Forge 15.': 'Forge 15를 얻습니다.',
    'Summon 15.': '소환 15를 얻습니다.',
    'Gain 2 Orb Slots.': '오브 슬롯 2개를 얻습니다.',
    'Upgrade all cards in your Hand for the rest of combat.': '이번 전투 동안 손패의 모든 카드를 강화합니다.',
    'This turn, your next card is played an extra time.': '이번 턴에 다음 카드가 한 번 더 발동합니다.',
    'Triple your Block.': '현재 방어도를 3배로 만듭니다.',
    'Discard any number of cards, then draw that many.': '카드를 원하는 만큼 버린 뒤, 그만큼 다시 뽑습니다.',
    'Gain 7 Plating.': '판금 7을 얻습니다.',
    'Gain 3 Thorns.': '가시 3을 얻습니다.',
    'Apply 1 Weak and 1 Vulnerable to ALL enemies.': '모든 적에게 약화 1과 취약 1을 겁니다.',
    'Enemy loses 9 HP at the end of each of its turns.': '적은 자신의 턴 종료마다 체력 9를 잃습니다.',
    'Gain 5 Regen.': '재생 5를 얻습니다.',
    'Retain your Hand for 2 turns.': '2턴 동안 손패를 보존합니다.',
    'Choose a card in your Hand. It is free to play this combat.': '손패의 카드 1장을 선택합니다. 그 카드는 이번 전투 동안 비용 없이 사용합니다.',
    'All cards containing Strike gain 1 Replay this combat.': '이름에 Strike가 들어간 모든 카드는 이번 전투 동안 Replay 1을 얻습니다.',
    'Gain 1 Intangible.': '무형 1을 얻습니다.',
    'Add 3 Upgraded Colorless cards into your Hand.': '강화된 무색 카드 3장을 손패에 추가합니다.',
    'Add 2 Souls into your Hand.': '영혼 2개를 손패에 추가합니다.',
    'Channel a Dark for each of your Orb Slots.': '오브 슬롯마다 암흑 오브를 1개 채널링합니다.',
    'Shuffle ALL your cards into your Draw Pile. Draw 5 cards.': '모든 카드를 드로우 더미에 섞어 넣고 카드를 5장 뽑습니다.',
    'Play the top 3 cards of your Draw Pile.': '드로우 더미 맨 위 카드 3장을 사용합니다.',
    'Choose a card in your Draw Pile and add it into your Hand.': '드로우 더미의 카드 1장을 선택해 손패에 추가합니다.',
    'Fill all your empty potion slots with random potions.': '비어 있는 모든 포션 슬롯을 무작위 포션으로 채웁니다.',
    'When your HP would be reduced to 0, instead this potion is discarded and you heal to 30% of your Max HP.': '체력이 0이 될 때 대신 이 포션이 소모되고 최대 체력의 30%까지 회복합니다.',
    'Gain 5 Max HP.': '최대 체력 5를 얻습니다.',
    'The next Attack you play deals triple damage.': '다음에 사용하는 공격 카드가 3배 피해를 줍니다.',
    'Put a card from your Discard Pile into your Hand. It\'s free to play this turn.': '버린 카드 더미의 카드 1장을 손패로 가져옵니다. 이번 턴에는 비용 없이 사용합니다.',
    'Gain 1 Buffer.': 'Buffer 1을 얻습니다.',
    'Gain 1 Ritual.': '의식 1을 얻습니다.',
    'ALL enemies lose 7 Strength this turn.': '이번 턴 동안 모든 적의 힘을 7 낮춥니다.',
    'Gain 10 Block. Next turn, gain 10 Block.': '방어도 10을 얻습니다. 다음 턴에도 방어도 10을 얻습니다.',
    'Draw 7 cards. Randomize the cost of cards in your Hand this turn.': '카드를 7장 뽑습니다. 이번 턴 동안 손패 카드의 비용이 무작위로 바뀝니다.',
    'Deal 12 damage to ALL players and enemies. Can be thrown at the Merchant for 100 Gold instead.': '모든 플레이어와 적에게 피해 12를 줍니다. 대신 상인에게 던져 골드 100을 얻을 수도 있습니다.',
    'Exhaust your Hand. Draw 10 cards.': '손패를 모두 소멸시키고 카드를 10장 뽑습니다.',
    'Deal 15 damage.': '피해 15를 줍니다.'
  };
  return directMap[result] || result;
}

let FALLBACK_POTIONS_DATA = [
  { name: 'Blood Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Heal for 20% of your Max HP.' } },
  { name: 'Poison Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Apply 6 Poison.' } },
  { name: 'Star Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 3 Stars.' } },
  { name: 'Potion of Doom', rarity: 'Common', pool: 'Shared', description: { en: 'Apply 33 Doom.' } },
  { name: 'Focus Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 2 Focus.' } },
  { name: 'Attack Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Choose 1 of 3 random Attack cards to add into your Hand. It\'s free to play this turn.' } },
  { name: 'Block Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 12 Block.' } },
  { name: 'Colorless Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Choose 1 of 3 random Colorless cards to add into your Hand. It\'s free to play this turn.' } },
  { name: 'Dexterity Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 2 Dexterity.' } },
  { name: 'Energy Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 2 Energy.' } },
  { name: 'Explosive Ampoule', rarity: 'Common', pool: 'Shared', description: { en: 'Deal 10 damage to ALL enemies.' } },
  { name: 'Fire Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Deal 20 damage.' } },
  { name: 'Flex Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 5 Strength. At the end of your turn, lose 5 Strength.' } },
  { name: 'Power Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Choose 1 of 3 random Power cards to add into your Hand. It\'s free to play this turn.' } },
  { name: 'Skill Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Choose 1 of 3 random Skill cards to add into your Hand. It\'s free to play this turn.' } },
  { name: 'Speed Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 5 Dexterity. At the end of your turn, lose 5 Dexterity.' } },
  { name: 'Strength Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Gain 2 Strength.' } },
  { name: 'Swift Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Draw 3 cards.' } },
  { name: 'Vulnerable Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Apply 3 Vulnerable.' } },
  { name: 'Weak Potion', rarity: 'Common', pool: 'Shared', description: { en: 'Apply 3 Weak.' } },
  { name: 'Ashwater', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Exhaust any number of cards in your Hand.' } },
  { name: 'Cunning Potion', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Add 3 Upgraded Shivs into your Hand.' } },
  { name: 'King\'s Courage', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Forge 15.' } },
  { name: 'Bone Brew', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Summon 15.' } },
  { name: 'Potion of Capacity', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain 2 Orb Slots.' } },
  { name: 'Blessing of the Forge', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Upgrade all cards in your Hand for the rest of combat.' } },
  { name: 'Clarity Extract', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Draw 1 card. At the start of your next turns, draw 1 additional card.' } },
  { name: 'Cure All', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain a restorative buff. Draw 2 cards.' } },
  { name: 'Duplicator', rarity: 'Uncommon', pool: 'Shared', description: { en: 'This turn, your next card is played an extra time.' } },
  { name: 'Fortifier', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Triple your Block.' } },
  { name: 'Fysh Oil', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain 1 Strength and 1 Dexterity.' } },
  { name: 'Gambler\'s Brew', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Discard any number of cards, then draw that many.' } },
  { name: 'Heart of Iron', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain 7 Plating.' } },
  { name: 'Liquid Bronze', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain 3 Thorns.' } },
  { name: 'Potion of Binding', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Apply 1 Weak and 1 Vulnerable to ALL enemies.' } },
  { name: 'Powdered Demise', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Enemy loses 9 HP at the end of each of its turns.' } },
  { name: 'Radiant Tincture', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain Radiance now and again for the next 3 turns.' } },
  { name: 'Regen Potion', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Gain 5 Regen.' } },
  { name: 'Stable Serum', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Retain your Hand for 2 turns.' } },
  { name: 'Touch of Insanity', rarity: 'Uncommon', pool: 'Shared', description: { en: 'Choose a card in your Hand. It is free to play this combat.' } },
  { name: 'Soldier\'s Stew', rarity: 'Rare', pool: 'Shared', description: { en: 'All cards containing Strike gain 1 Replay this combat.' } },
  { name: 'Ghost in a Jar', rarity: 'Rare', pool: 'Shared', description: { en: 'Gain 1 Intangible.' } },
  { name: 'Cosmic Concoction', rarity: 'Rare', pool: 'Shared', description: { en: 'Add 3 Upgraded Colorless cards into your Hand.' } },
  { name: 'Pot of Ghouls', rarity: 'Rare', pool: 'Shared', description: { en: 'Add 2 Souls into your Hand.' } },
  { name: 'Essence of Darkness', rarity: 'Rare', pool: 'Shared', description: { en: 'Channel a Dark for each of your Orb Slots.' } },
  { name: 'Beetle Juice', rarity: 'Rare', pool: 'Shared', description: { en: 'Enemy attacks deal less damage for the next few turns.' } },
  { name: 'Bottled Potential', rarity: 'Rare', pool: 'Shared', description: { en: 'Shuffle ALL your cards into your Draw Pile. Draw 5 cards.' } },
  { name: 'Distilled Chaos', rarity: 'Rare', pool: 'Shared', description: { en: 'Play the top 3 cards of your Draw Pile.' } },
  { name: 'Droplet of Precognition', rarity: 'Rare', pool: 'Shared', description: { en: 'Choose a card in your Draw Pile and add it into your Hand.' } },
  { name: 'Entropic Brew', rarity: 'Rare', pool: 'Shared', description: { en: 'Fill all your empty potion slots with random potions.' } },
  { name: 'Fairy in a Bottle', rarity: 'Rare', pool: 'Shared', description: { en: 'When your HP would be reduced to 0, instead this potion is discarded and you heal to 30% of your Max HP.' } },
  { name: 'Fruit Juice', rarity: 'Rare', pool: 'Shared', description: { en: 'Gain 5 Max HP.' } },
  { name: 'Gigantification Potion', rarity: 'Rare', pool: 'Shared', description: { en: 'The next Attack you play deals triple damage.' } },
  { name: 'Liquid Memories', rarity: 'Rare', pool: 'Shared', description: { en: 'Put a card from your Discard Pile into your Hand. It\'s free to play this turn.' } },
  { name: 'Lucky Tonic', rarity: 'Rare', pool: 'Shared', description: { en: 'Gain 1 Buffer.' } },
  { name: 'Mazaleth\'s Gift', rarity: 'Rare', pool: 'Shared', description: { en: 'Gain 1 Ritual.' } },
  { name: 'Orobic Acid', rarity: 'Rare', pool: 'Shared', description: { en: 'Add a random Attack, Skill, and Power into your Hand. They\'re free to play this turn.' } },
  { name: 'Shackling Potion', rarity: 'Rare', pool: 'Shared', description: { en: 'ALL enemies lose 7 Strength this turn.' } },
  { name: 'Ship in a Bottle', rarity: 'Rare', pool: 'Shared', description: { en: 'Gain 10 Block. Next turn, gain 10 Block.' } },
  { name: 'Snecko Oil', rarity: 'Rare', pool: 'Shared', description: { en: 'Draw 7 cards. Randomize the cost of cards in your Hand this turn.' } },
  { name: 'Foul Potion', rarity: 'Event', pool: 'Event', description: { en: 'Deal 12 damage to ALL players and enemies. Can be thrown at the Merchant for 100 Gold instead.' } },
  { name: 'Glowwater Potion', rarity: 'Event', pool: 'Event', description: { en: 'Exhaust your Hand. Draw 10 cards.' } },
  { name: 'Potion-Shaped Rock', rarity: 'Token', pool: 'Token', description: { en: 'Deal 15 damage.' } }
].map(function (potion) {
  potion.description.ko = translatePotionTextToKo(potion.description.en);
  return potion;
});

let POTIONS_DATA = window.STS2_POTIONS_DATA || FALLBACK_POTIONS_DATA;

let uiText = {
  en: {
    heroTitle: 'Slay the Spire 2',
    nav: { character: 'Characters', cards: 'Cards', relics: 'Relics', potions: 'Potions', builds: 'Builds', language: 'Language 🌐', help: 'Help' },
    patchKicker: 'Steam Sync',
    patchHeading: 'Latest Patch Notes',
    sortLabel: 'Sort',
    sortOptions: { latest: 'Latest', popular: 'Pinned' },
    characterKicker: 'Characters',
    characterHeading: 'Choose a character',
    libraryKicker: 'Cards',
    libraryHeading: 'Card Library',
    relicsKicker: 'Relics',
    relicsHeading: 'Full Relic Collection',
    potionsKicker: 'Potions',
    potionsHeading: 'Potion List',
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
      synced: 'Synced',
      all: 'All',
      noImage: 'No image',
      draft: 'Draft',
      saved: 'Saved',
      energy: 'Energy',
      upgraded: 'Upgraded'
    },
    links: {
      patchSource: 'Steam',
      readPatch: 'Read on Steam'
    },
    empty: {
      builds: 'No saved builds for this character yet. Open the editor and save one.',
      selected: 'No cards selected yet. Add cards from the picker.',
      library: 'No cards matched the current filters.',
      relics: 'No relic notes are available for this character yet.',
      potions: 'No potion entries are available right now.',
      patchNotes: 'No Steam patch notes were synced yet.'
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
    heroTitle: 'Slay the Spire 2',
    nav: { character: '캐릭터', cards: '카드', relics: '유물', potions: '포션', builds: '빌드', language: '언어 🌐', help: '도움말' },
    patchKicker: 'Steam 동기화',
    patchHeading: '최신 패치노트',
    sortLabel: '정렬',
    sortOptions: { latest: '최신순', popular: '고정순' },
    characterKicker: '캐릭터',
    characterHeading: '캐릭터 선택',
    libraryKicker: '카드',
    libraryHeading: '카드 라이브러리',
    relicsKicker: '유물',
    relicsHeading: '전체 유물 도감',
    potionsKicker: '포션',
    potionsHeading: '포션 목록',
    buildlistKicker: '빌드',
    buildlistHeading: '저장된 빌드',
    builderKicker: '빌드 편집기',
    builderHeading: '빌드 편집',
    editorKicker: '덱 시트',
    editorHeading: '선택한 카드',
    pickerKicker: '카드 선택',
    pickerHeading: '빌드에 카드 추가',
    pickerNote: '검색, 타입, 레어도, 코스트, 정렬로 넣을 카드를 바로 좁혀서 빌드에 추가할 수 있습니다.',
    relicSections: { character: '캐릭터 전용 유물', global: '공용 유물' },
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
      notes: '경로, 강화 우선순위, 엘리트 기준, 위험 카드 등을 적어 주세요.',
      search: '카드 이름이나 텍스트 검색'
    },
    buttons: {
      newBuild: '편집기 열기',
      duplicateBuild: '복제',
      saveBuild: '빌드 저장',
      deleteBuild: '빌드 삭제',
      addBase: '일반 추가',
      addUpgraded: '강화 추가',
      remove: '제거',
      upgrade: '강화 전환',
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
      updated: '수정일',
      synced: '동기화',
      all: '전체',
      noImage: '이미지 없음',
      draft: '초안',
      saved: '저장됨',
      energy: '에너지',
      upgraded: '강화'
    },
    links: {
      patchSource: 'Steam',
      readPatch: 'Steam에서 보기'
    },
    empty: {
      builds: '아직 저장된 빌드가 없습니다. 편집기를 열어 저장하면 여기에 표시됩니다.',
      selected: '아직 선택한 카드가 없습니다. 오른쪽 카드 선택 영역에서 추가해 주세요.',
      library: '현재 필터에 맞는 카드가 없습니다.',
      relics: '이 캐릭터의 유물 정보가 아직 없습니다.',
      potions: '표시할 포션 정보가 없습니다.',
      patchNotes: '동기화된 Steam 패치노트가 아직 없습니다.'
    },
    status: {
      saved: '빌드를 저장했습니다.',
      deleted: '빌드를 삭제했습니다.',
      needCards: '카드를 1장 이상 넣은 뒤 저장해 주세요.',
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
  layout: document.querySelector('.layout'),
  content: document.querySelector('.content'),
  charactersSection: document.getElementById('characters-section'),
  navCharacter: document.getElementById('nav-character'),
  navCards: document.getElementById('nav-cards'),
  navRelics: document.getElementById('nav-relics'),
  navPotions: document.getElementById('nav-potions'),
  navBuilds: document.getElementById('nav-builds'),
  siteMenuButton: document.getElementById('site-menu-button'),
  siteMenu: document.getElementById('site-menu'),
  languageButton: document.getElementById('language-button'),
  languageMenu: document.getElementById('language-menu'),
  editorialLangEn: document.getElementById('editorial-lang-en'),
  editorialLangKo: document.getElementById('editorial-lang-ko'),
  themeToggleButton: document.getElementById('theme-toggle-button'),
  characterKicker: document.getElementById('character-kicker'),
  characterHeading: document.getElementById('character-heading'),
  patchKicker: document.getElementById('patch-kicker'),
  patchHeading: document.getElementById('patch-heading'),
  patchMeta: document.getElementById('patch-meta'),
  patchList: document.getElementById('patch-list'),
  patchPanel: document.getElementById('patch-panel'),
  browseCharacterLabel: document.getElementById('browse-character-label'),
  browseCharacterSelect: document.getElementById('browse-character-select'),
  buildsCharacterLabel: document.getElementById('builds-character-label'),
  buildsCharacterSelect: document.getElementById('builds-character-select'),
  characterTabs: document.getElementById('character-tabs'),
  characterSummary: document.getElementById('character-summary'),
  characterDetailPanel: document.getElementById('character-detail-panel'),
  characterDetailKicker: document.getElementById('character-detail-kicker'),
  characterDetailHeading: document.getElementById('character-detail-heading'),
  characterDetailBody: document.getElementById('character-detail-body'),
  characterDetailImage: document.getElementById('character-detail-image'),
  characterHighlightList: document.getElementById('character-highlight-list'),
  cardsPanel: document.getElementById('cards-panel'),
  relicsPanel: document.getElementById('relics-panel'),
  potionsPanel: document.getElementById('potions-panel'),
  buildsPanel: document.getElementById('builds-panel'),
  libraryKicker: document.getElementById('library-kicker'),
  libraryHeading: document.getElementById('library-heading'),
  relicsKicker: document.getElementById('relics-kicker'),
  relicsHeading: document.getElementById('relics-heading'),
  relicsGrid: document.getElementById('relics-grid'),
  potionsKicker: document.getElementById('potions-kicker'),
  potionsHeading: document.getElementById('potions-heading'),
  potionsGrid: document.getElementById('potions-grid'),
  buildlistKicker: document.getElementById('buildlist-kicker'),
  buildlistHeading: document.getElementById('buildlist-heading'),
  sortLabel: document.getElementById('sort-label'),
  sortSelect: document.getElementById('sort-select'),
  buildStatus: document.getElementById('build-status'),
  buildSearchInput: document.getElementById('build-search-input'),
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
  editorFieldSearchLabel: document.getElementById('editor-field-search-label'),
  editorFieldTypeLabel: document.getElementById('editor-field-type-label'),
  editorFieldRarityLabel: document.getElementById('editor-field-rarity-label'),
  editorFieldCostLabel: document.getElementById('editor-field-cost-label'),
  editorFieldLibrarySortLabel: document.getElementById('editor-field-library-sort-label'),
  buildTitleInput: document.getElementById('build-title-input'),
  buildAuthorInput: document.getElementById('build-author-input'),
  buildCharacterSelect: document.getElementById('build-character-select'),
  buildSummaryInput: document.getElementById('build-summary-input'),
  buildNotesInput: document.getElementById('build-notes-input'),
  cardSearchInput: document.getElementById('card-search-input'),
  editorCardSearchInput: document.getElementById('editor-card-search-input'),
  typeFilterSelect: document.getElementById('type-filter-select'),
  rarityFilterSelect: document.getElementById('rarity-filter-select'),
  costFilterSelect: document.getElementById('cost-filter-select'),
  librarySortSelect: document.getElementById('library-sort-select'),
  editorTypeFilterSelect: document.getElementById('editor-type-filter-select'),
  editorRarityFilterSelect: document.getElementById('editor-rarity-filter-select'),
  editorCostFilterSelect: document.getElementById('editor-cost-filter-select'),
  editorLibrarySortSelect: document.getElementById('editor-library-sort-select'),
  newBuildButton: document.getElementById('new-build-button'),
  duplicateBuildButton: document.getElementById('duplicate-build-button'),
  saveBuildButton: document.getElementById('save-build-button'),
  deleteBuildButton: document.getElementById('delete-build-button')
};

let allCards = (window.STS2_CARDS_DATA || []).map(function (card) {
  return Object.assign({}, card, {
    imageUrl: card.imageUrl || (card.image ? 'https://sts2.wiki' + card.image : ''),
    portraitImageUrl: card.portraitImageUrl || (card.portraitUrl ? 'https://sts2.wiki' + card.portraitUrl : '')
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
let cardNameLookup = new Map();
allCards.forEach(function (card) {
  if (!cardNameLookup.has(card.name)) {
    cardNameLookup.set(card.name, card);
  }
});

let state = {
  currentLanguage: detectPreferredLanguage(),
  currentTheme: detectPreferredTheme(),
  currentSort: 'latest',
  currentView: pageView() === 'home' ? 'home' : pageView(),
  activeCharacter: PLAYABLE_CHARACTERS[0],
  activeBuildId: null,
  editorOpen: false,
  savedBuilds: loadSavedBuilds(),
  pinnedIds: loadPinnedIds(),
  buildSearch: '',
  filters: { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' },
  editorFilters: { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' },
  draft: createEmptyBuild(PLAYABLE_CHARACTERS[0])
};

function detectPreferredLanguage() {
  try {
    let savedLanguage = window.localStorage.getItem('sts2-site-language');
    if (languages.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch (error) {}
  let browserLanguage = (navigator.language || 'en').toLowerCase().split('-')[0];
  return languages.includes(browserLanguage) ? browserLanguage : 'ko';
}

function detectPreferredTheme() {
  try {
    let savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  } catch (error) {}
  return 'dark';
}

function pageView() {
  let pageMap = {
    home: 'home',
    characters: 'characters',
    cards: 'cards',
    relics: 'relics',
    potions: 'potions',
    builds: 'builds'
  };
  return pageMap[SITE_PAGE] || 'home';
}

function isCharacterPage() {
  return pageView() === 'characters';
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
function getCurrentLanguage() { return state.currentLanguage; }
function getRelicLabel(relic) {
  let entry = RELIC_NAME_MAP[relic];
  if (state.currentLanguage === 'ko') {
    return entry && entry.ko ? entry.ko : translateRelicNameToKo(relic);
  }
  return relic;
}

function slugifyAssetName(value) {
  return String(value).toLowerCase().replace(/['’.]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function getRelicImageUrl(name) {
  let mapped = RELIC_IMAGE_MAP[name] || slugifyAssetName(name);
  return 'https://sts2json.untapped.gg/art/relics/' + mapped + '.png';
}

function getRelicFallbackImageUrl(label) {
  let safeLabel = String(label || 'Relic');
  let svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#31291f"/><stop offset="100%" stop-color="#120f0c"/></linearGradient></defs><rect width="240" height="240" rx="28" fill="url(#g)"/><rect x="16" y="16" width="208" height="208" rx="20" fill="none" stroke="#8f7750" stroke-width="4"/><circle cx="120" cy="92" r="28" fill="#c8ac72"/><path d="M120 50l10 26 28 2-22 17 8 27-24-15-24 15 8-27-22-17 28-2z" fill="#f7e2b0"/><text x="120" y="160" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#f4ead2">' + escapeHtml(safeLabel) + '</text></svg>';
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function handleRelicImageError(img) {
  if (!img || img.dataset.fallbackApplied === 'true') {
    return;
  }
  img.dataset.fallbackApplied = 'true';
  img.src = getRelicFallbackImageUrl(img.alt);
}

function handlePotionImageError(img) {
  if (!img || img.dataset.fallbackApplied === 'true') {
    return;
  }
  img.dataset.fallbackApplied = 'true';
  img.src = getRelicFallbackImageUrl(img.alt);
}

function translateCardTextToKo(text) {
  let result = text;
  let replacements = [
    ['ALL enemies', '모든 적'],
    ['Regent Star Energy', '별 에너지'],
    ['White Star', '백색 별'],
    ['Black Star', '흑색 별'],
    ['Necrobinder Energy', '네크로바인더 에너지'],
    ['Colorless Energy', '무색 에너지'],
    ['Energy', '에너지'],
    ['Exhaust.', '소진.'],
    ['Retain.', '보존.'],
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
    ['Orb', '오브'],
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

function localizeStarterDeckEntry(entry) {
  let text = String(entry || '');
  let match = text.match(/^(.*?)(?: x(\d+))?$/);
  if (!match) {
    return text;
  }
  let cardName = match[1].trim();
  let quantity = match[2] ? Number(match[2]) : null;
  let card = cardNameLookup.get(cardName);
  let localizedName = card ? getCardName(card, false) : cardName;
  if (state.currentLanguage === 'ko' && quantity) {
    return localizedName + ' x' + quantity;
  }
  return quantity ? (localizedName + ' x' + quantity) : localizedName;
}

function getStarterDeckText(character) {
  let info = CHARACTER_INFO[character];
  if (!info || !Array.isArray(info.starterDeck)) {
    return '';
  }
  return info.starterDeck.map(localizeStarterDeckEntry).join(', ');
}

function getLocaleTag() {
  return { en: 'en-US', ko: 'ko-KR', ja: 'ja-JP', es: 'es-ES' }[state.currentLanguage] || 'ko-KR';
}

function applyTheme() {
  document.documentElement.dataset.theme = state.currentTheme;
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
  window.localStorage.setItem('theme', state.currentTheme);
  applyTheme();
  renderViewState();
}

function getThemeToggleLabel() {
  return state.currentTheme === 'dark'
    ? (state.currentLanguage === 'ko' ? '라이트모드' : 'Light mode')
    : (state.currentLanguage === 'ko' ? '다크모드' : 'Dark mode');
}

function getThemeToggleIcon() {
  return state.currentTheme === 'dark' ? '☀' : '☾';
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

function isBuildExcludedCard(card) {
  if (!card) { return true; }
  return card.character === 'Colorless'
    || /Status|Curse/i.test(card.type || '')
    || /Status|Token/i.test(card.rarity || '');
}

function availableCardsForCharacter(character) {
  return allCards.filter(function (card) {
    return card.character === character && !isBuildExcludedCard(card);
  });
}

function normalizeBuildCardEntries(build) {
  if (!build || !Array.isArray(build.cards)) {
    return;
  }
  build.cards = build.cards.map(function (entry) {
    let card = cardMap.get(entry.cardId);
    if (!card || isBuildExcludedCard(card)) {
      return null;
    }
    if (isUpgradeHiddenCard(card)) {
      return Object.assign({}, entry, { upgraded: false });
    }
    return entry;
  }).filter(Boolean);
}

function buildCards(build) {
  normalizeBuildCardEntries(build);
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
  let search = state.buildSearch.trim().toLowerCase();
  let builds = state.savedBuilds.filter(function (build) {
    return build.character === state.activeCharacter && (!search || getBuildSearchText(build).includes(search));
  });
  return builds.slice().sort(function (a, b) {
    if (state.currentSort === 'popular') {
      let pinDiff = Number(state.pinnedIds.has(b.id)) - Number(state.pinnedIds.has(a.id));
      if (pinDiff) { return pinDiff; }
    }
    return b.updatedAt - a.updatedAt;
  });
}

function ensureActiveBuild() {
  state.savedBuilds.forEach(normalizeBuildCardEntries);
  normalizeBuildCardEntries(state.draft);
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
  let card = cardMap.get(cardId);
  if (!card || isBuildExcludedCard(card)) { return; }
  let normalizedUpgraded = hasVisibleUpgrade(card) ? Boolean(upgraded) : false;
  let existing = state.draft.cards.find(function (entry) { return entry.cardId === cardId && entry.upgraded === normalizedUpgraded; });
  if (existing) { existing.quantity += 1; } else { state.draft.cards.push({ cardId: cardId, quantity: 1, upgraded: normalizedUpgraded }); }
  state.draft.updatedAt = Date.now();
  showStatus(state.currentLanguage === 'ko' ? '카드를 현재 빌드에 반영했습니다.' : 'Card added to the current build.');
  renderEditor();
  renderBuildList();
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
  let card = cardMap.get(cardId);
  if (!card || !hasVisibleUpgrade(card)) { return; }
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

function getCardUpgradeDeltaMap(card) {
  let deltas = {};
  (card.opggUpgradeChanges || []).forEach(function (entry) {
    let text = String(entry || '');
    let match = text.match(/(?:DynamicVars\["([^"]+)"\]|([A-Za-z]+)):\s*\+([0-9.]+)/);
    if (!match) {
      return;
    }
    let key = match[1] || match[2];
    deltas[key] = Number(match[3]);
  });
  return deltas;
}

function getCardValueMap(card, upgraded) {
  let deltas = getCardUpgradeDeltaMap(card);
  let values = {};
  (card.opggDynamicVars || []).forEach(function (entry) {
    let rawKey = entry.key || entry.power_type || entry.var_type;
    let delta = upgraded ? (deltas[rawKey] || deltas[entry.var_type] || deltas[entry.power_type] || 0) : 0;
    let base = Number(entry.value || 0);
    let total = base + delta;
    let printable = Number.isFinite(total) ? String(Number.isInteger(total) ? total : total) : '';
    if (rawKey) values[rawKey] = printable;
    if (entry.var_type) values[entry.var_type] = printable;
    if (entry.power_type) values[entry.power_type] = printable;
  });
  return values;
}

function formatCardKoText(card, upgraded) {
  let raw = upgraded ? (card.koUpgradedDescription || card.koDescription || '') : (card.koDescription || '');
  if (!raw) {
    return '';
  }
  let values = getCardValueMap(card, upgraded);
  let energyValue = values.Energy || '1';
  let result = String(raw)
    .replace(/\[(?:blue|gold|purple|red|green|white|orange)\]([\s\S]*?)\[\/(?:blue|gold|purple|red|green|white|orange)\]/g, '$1')
    .replace(/\{IfUpgraded:show:\{([A-Za-z]+)\}장\|([0-9]+)장\}/g, function (_, key, fallback) {
      return upgraded ? ((values[key] || fallback) + '장') : (fallback + '장');
    })
    .replace(/\{IfUpgraded:show:\s*\+\{([A-Za-z]+)\}\|\}/g, function (_, key) {
      return upgraded && values[key] ? (' +' + values[key]) : '';
    })
    .replace(/\{([A-Za-z]+):cond:>0\?([^|}]*)\|\}/g, function (_, key, text) {
      return Number(values[key] || 0) > 0 ? text : '';
    })
    .replace(/\{([A-Za-z]+):choose\((\d+)\):([^|}]*)\|([^}]*)\}/g, function (_, key, threshold, first, second) {
      let value = Number(values[key] || 0);
      let chosen = value === Number(threshold) ? first : second.replace(/\{\}/g, String(value || ''));
      return chosen;
    })
    .replace(/\{(?:Energy|energyPrefix):energyIcons\((\d*)\)\}/g, function (_, amount) {
      let count = amount || energyValue || '1';
      return '에너지 ' + count;
    })
    .replace(/\{Energy:energyIcons\(\)\}/g, '에너지 ' + energyValue)
    .replace(/\{([A-Za-z]+):diff\(\)\}/g, function (_, key) {
      return values[key] || '';
    })
    .replace(/\{([A-Za-z]+)\}/g, function (_, key) {
      return values[key] || '';
    })
    .replace(/\{InCombat:\s*([^|}]*)\|\}/g, '$1')
    .replace(/\{[^}]+\}/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\b손\b/g, '손패')
    .replace(/손으로/g, '손패로')
    .replace(/손에/g, '손패에')
    .replace(/손을/g, '손패를')
    .replace(/방어도를\s*(\d+)\s*얻습니다/g, '방어도 $1을 얻습니다')
    .replace(/피해를\s*(\d+)\s*줍니다/g, '피해 $1을 줍니다')
    .replace(/카드를\s*(\d+)장\s*뽑습니다/g, '카드를 $1장 뽑습니다')
    .replace(/에너지\s*(\d+)를/g, '에너지 $1을')
    .replace(/힘을\s*(\d+)\s*줍니다/g, '힘 $1을 줍니다')
    .replace(/힘을\s*(\d+)\s*얻습니다/g, '힘 $1을 얻습니다')
    .replace(/민첩을\s*(\d+)\s*얻습니다/g, '민첩 $1을 얻습니다')
    .replace(/집중을\s*(\d+)\s*얻습니다/g, '집중 $1을 얻습니다')
    .replace(/가시를\s*(\d+)\s*얻습니다/g, '가시 $1을 얻습니다')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return result;
}

function isUpgradeHiddenCard(card) {
  return /Status|Curse/i.test(card.type || '') || /Status|Curse/i.test(card.pool || '');
}

function hasVisibleUpgrade(card) {
  if (isUpgradeHiddenCard(card)) {
    return false;
  }
  let localized = getCardLocalization(card) || {};
  return Boolean(
    card.upgradedName
    || card.koUpgradedName
    || card.upgradedDescription
    || card.koUpgradedDescription
    || localized.upgradedName
    || localized.upgradedDescription
    || (card.opggUpgradeChanges && card.opggUpgradeChanges.length)
  );
}

function getBuildSearchText(build) {
  let cards = buildCards(build);
  return [
    build.title,
    build.author,
    build.summary,
    build.notes,
    cards.map(function (entry) { return getCardName(entry.card, entry.upgraded); }).join(' '),
    cards.map(function (entry) { return getCardText(entry.card, entry.upgraded); }).join(' ')
  ].filter(Boolean).join(' ').toLowerCase();
}

function getCardName(card, upgraded) {
  if (upgraded && isUpgradeHiddenCard(card)) {
    return '';
  }
  if (state.currentLanguage === 'ko' && card.koName) {
    return upgraded ? (card.koUpgradedName || (card.koName + '+')) : card.koName;
  }
  let localized = getCardLocalization(card);
  if (localized) {
    return upgraded ? (localized.upgradedName || localized.name || card.upgradedName || (card.name + '+')) : (localized.name || card.name);
  }
  return upgraded ? (card.upgradedName || (card.name + '+')) : card.name;
}

function getCardText(card, upgraded) {
  if (upgraded && isUpgradeHiddenCard(card)) {
    return '';
  }
  if (state.currentLanguage === 'ko') {
    let override = CARD_TEXT_OVERRIDE_MAP[card.id];
    if (override) {
      let text = upgraded ? (override.upgraded || override.base) : override.base;
      if (text) return text;
    }
  }
  if (state.currentLanguage === 'ko' && card.koDescription) {
    let formatted = formatCardKoText(card, upgraded);
    if (formatted && !/[{}]/.test(formatted)) {
      return formatted;
    }
  }
  let localized = getCardLocalization(card);
  if (localized) {
    let localizedText = upgraded ? (localized.upgradedDescription || localized.description) : localized.description;
    if (localizedText) return localizedText;
  }
  if (state.currentLanguage === 'ko' && card.koDescription) {
    let fallbackText = formatCardKoText(card, upgraded);
    if (fallbackText) return fallbackText;
  }
  let raw = upgraded ? (card.upgradedDescription || card.description) : card.description;
  return state.currentLanguage === 'ko' ? translateCardTextToKo(raw) : raw;
}

function getCardSearchText(card) {
  let localized = getCardLocalization(card) || {};
  return [
    card.name,
    card.upgradedName,
    card.koName,
    card.koUpgradedName,
    card.description,
    card.upgradedDescription,
    card.koDescription,
    card.koUpgradedDescription,
    localized.name,
    localized.upgradedName,
    localized.description,
    localized.upgradedDescription,
    getCharacterLabel(card.character),
    getTypeLabel(card.type),
    getRarityLabel(card.rarity)
  ].filter(Boolean).join(' ').toLowerCase();
}

function filteredCards(filterState) {
  let activeFilters = filterState || state.filters;
  let cards = availableCardsForCharacter(state.activeCharacter).filter(function (card) {
    let search = activeFilters.search.trim().toLowerCase();
    let textMatch = !search || getCardSearchText(card).includes(search);
    let typeMatch = activeFilters.type === 'all' || card.type === activeFilters.type;
    let rarityMatch = activeFilters.rarity === 'all' || card.rarity === activeFilters.rarity;
    let costMatch = activeFilters.cost === 'all' || String(card.cost) === activeFilters.cost;
    return textMatch && typeMatch && rarityMatch && costMatch;
  });

  return cards.sort(function (a, b) {
    if (activeFilters.librarySort === 'cost') {
      return (a.sortCost ?? 999) - (b.sortCost ?? 999) || getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
    }
    if (activeFilters.librarySort === 'rarity') {
      return getRarityLabel(a.rarity).localeCompare(getRarityLabel(b.rarity), getLocaleTag()) || getCardName(a, false).localeCompare(getCardName(b, false), getLocaleTag());
    }
    if (activeFilters.librarySort === 'type') {
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

function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat(getLocaleTag(), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);
}

function formatNumber(value) {
  return new Intl.NumberFormat(getLocaleTag(), { maximumFractionDigits: 1 }).format(value);
}

function translatePatchTitleToKo(title) {
  return String(title || '')
    .replace(/Major Update/gi, '메이저 업데이트')
    .replace(/Beta Hotfix Patch Notes/gi, '베타 핫픽스 패치노트')
    .replace(/Hotfix Patch Notes/gi, '핫픽스 패치노트')
    .replace(/Patch Notes/gi, '패치노트')
    .replace(/The Neowsletter/gi, '네오우 소식지');
}

function translatePatchSummaryToKo(text) {
  return String(text || '')
    .replace(/CONTENT & BALANCE/g, '콘텐츠 및 밸런스')
    .replace(/BUG FIXES/g, '버그 수정')
    .replace(/USER INTERFACE & EXPERIENCE/g, 'UI 및 사용 경험')
    .replace(/ART/g, '아트')
    .replace(/Localization/g, '현지화')
    .replace(/Localization:/g, '현지화:')
    .replace(/General:/g, '일반:')
    .replace(/Balance:/g, '밸런스:')
    .replace(/\bFixed\b/g, '수정')
    .replace(/\bAdded\b/g, '추가')
    .replace(/\bUpdated\b/g, '업데이트')
    .replace(/\bChanged\b/g, '변경')
    .replace(/\bImproved\b/g, '개선')
    .replace(/\bcards\b/g, '카드')
    .replace(/\bcard\b/g, '카드')
    .replace(/\brelics\b/g, '유물')
    .replace(/\brelic\b/g, '유물')
    .replace(/\bpotions\b/g, '포션')
    .replace(/\bpotion\b/g, '포션')
    .replace(/\bdamage\b/g, '피해')
    .replace(/\bcombat\b/g, '전투')
    .replace(/\bturn\b/g, '턴')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');
}

function renderStaticText() {
  let currentUi = ui();
  let editorialLanguage = state.currentLanguage === 'ko' ? 'ko' : 'en';
  document.documentElement.lang = state.currentLanguage;
  document.title = currentUi.heroTitle;
  if (refs.heroTitle) { refs.heroTitle.textContent = currentUi.heroTitle; }
  refs.navCharacter.textContent = currentUi.nav.character;
  refs.navCards.textContent = currentUi.nav.cards;
  refs.navRelics.textContent = currentUi.nav.relics;
  refs.navPotions.textContent = currentUi.nav.potions;
  refs.navBuilds.textContent = currentUi.nav.builds;
  refs.languageButton.textContent = currentUi.nav.language;
  refs.languageButton.setAttribute('title', currentUi.nav.language);
  refs.siteMenuButton.setAttribute('aria-label', currentUi.nav.help);
  refs.siteMenuButton.setAttribute('title', currentUi.nav.help);
  refs.browseCharacterLabel.textContent = currentUi.fields.character;
  refs.buildsCharacterLabel.textContent = currentUi.fields.character;
  refs.sortLabel.textContent = currentUi.sortLabel;
  refs.patchKicker.textContent = currentUi.patchKicker;
  refs.patchHeading.textContent = currentUi.patchHeading;
  refs.sortSelect.innerHTML = '<option value="latest">' + currentUi.sortOptions.latest + '</option><option value="popular">' + currentUi.sortOptions.popular + '</option>';
  refs.characterKicker.textContent = currentUi.characterKicker;
  refs.characterHeading.textContent = currentUi.characterHeading;
  refs.libraryKicker.textContent = currentUi.libraryKicker;
  refs.libraryHeading.textContent = getCharacterLabel(state.activeCharacter) + ' ' + currentUi.libraryHeading;
  refs.relicsKicker.textContent = currentUi.relicsKicker;
  refs.relicsHeading.textContent = currentUi.relicsHeading;
  refs.potionsKicker.textContent = currentUi.potionsKicker;
  refs.potionsHeading.textContent = currentUi.potionsHeading;
  refs.buildlistKicker.textContent = currentUi.buildlistKicker;
  refs.buildlistHeading.textContent = currentUi.buildlistHeading;
  refs.builderKicker.textContent = currentUi.builderKicker;
  refs.builderHeading.textContent = getCharacterLabel(state.activeCharacter) + ' ' + currentUi.builderHeading;
  refs.editorKicker.textContent = currentUi.editorKicker;
  refs.editorHeading.textContent = currentUi.editorHeading;
  refs.pickerKicker.textContent = currentUi.pickerKicker;
  refs.pickerHeading.textContent = currentUi.pickerHeading;
  refs.pickerNote.textContent = '';
  refs.pickerNote.hidden = true;
  if (refs.themeToggleButton) {
    refs.themeToggleButton.textContent = getThemeToggleIcon();
    refs.themeToggleButton.setAttribute('aria-label', getThemeToggleLabel());
    refs.themeToggleButton.setAttribute('title', getThemeToggleLabel());
  }
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
  refs.editorFieldSearchLabel.textContent = currentUi.fields.search;
  refs.editorFieldTypeLabel.textContent = currentUi.fields.type;
  refs.editorFieldRarityLabel.textContent = currentUi.fields.rarity;
  refs.editorFieldCostLabel.textContent = currentUi.fields.cost;
  refs.editorFieldLibrarySortLabel.textContent = currentUi.fields.librarySort;
  refs.buildTitleInput.placeholder = currentUi.placeholders.title;
  refs.buildAuthorInput.placeholder = currentUi.placeholders.author;
  refs.buildSummaryInput.placeholder = currentUi.placeholders.summary;
  refs.buildNotesInput.placeholder = currentUi.placeholders.notes;
  refs.cardSearchInput.placeholder = currentUi.placeholders.search;
  refs.editorCardSearchInput.placeholder = currentUi.placeholders.search;
  if (refs.buildSearchInput) {
    refs.buildSearchInput.placeholder = state.currentLanguage === 'ko' ? '빌드 제목, 작성자, 카드 검색' : 'Search builds, authors, or cards';
  }
  refs.navCharacter.classList.toggle('is-active', SITE_PAGE === 'characters');
  refs.navCards.classList.toggle('is-active', SITE_PAGE === 'cards');
  refs.navRelics.classList.toggle('is-active', SITE_PAGE === 'relics');
  refs.navPotions.classList.toggle('is-active', SITE_PAGE === 'potions');
  refs.navBuilds.classList.toggle('is-active', SITE_PAGE === 'builds');
  document.querySelectorAll('[data-copy-en][data-copy-ko]').forEach(function (node) {
    node.textContent = editorialLanguage === 'ko' ? node.dataset.copyKo : node.dataset.copyEn;
  });
  document.querySelectorAll('[data-href-en][data-href-ko]').forEach(function (node) {
    node.setAttribute('href', editorialLanguage === 'ko' ? node.dataset.hrefKo : node.dataset.hrefEn);
  });
  if (refs.editorialLangEn && refs.editorialLangKo) {
    refs.editorialLangEn.classList.toggle('is-active', editorialLanguage === 'en');
    refs.editorialLangKo.classList.toggle('is-active', editorialLanguage === 'ko');
  }
}

function renderLanguageMenu() {
  let labels = { ko: { name: '한국어', tag: 'KR' }, en: { name: 'English', tag: 'EN' }, ja: { name: '日本語', tag: 'JP' }, es: { name: 'Español', tag: 'ES' } };
  refs.languageMenu.innerHTML = languages.map(function (language) {
    return '<button class="language-option' + (language === state.currentLanguage ? ' is-active' : '') + '" type="button" data-language="' + language + '"><span>' + escapeHtml(labels[language].name) + '</span><span class="language-option-label">' + escapeHtml(labels[language].tag) + '</span></button>';
  }).join('');
  refs.languageButton.setAttribute('aria-expanded', String(!refs.languageMenu.hidden));
}

function closeUtilityMenus() {
  refs.languageMenu.hidden = true;
  refs.siteMenu.hidden = true;
  refs.languageButton.setAttribute('aria-expanded', 'false');
  refs.siteMenuButton.setAttribute('aria-expanded', 'false');
}

function jumpToSection(target) {
  let section = null;
  if (target === 'characters') {
    state.currentView = 'characters';
    render();
    section = refs.charactersSection;
  } else if (target === 'cards' || target === 'relics' || target === 'potions' || target === 'builds') {
    state.currentView = target;
    render();
    section = target === 'cards'
      ? refs.cardsPanel
      : target === 'relics'
      ? refs.relicsPanel
      : target === 'potions'
      ? refs.potionsPanel
      : refs.buildsPanel;
  }
  closeUtilityMenus();
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderCharacterTabs() {
  refs.characterTabs.innerHTML = '';
  PLAYABLE_CHARACTERS.forEach(function (character) {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'character-tab';
    button.dataset.character = character;
    button.innerHTML = '<strong>' + escapeHtml(getCharacterLabel(character)) + '</strong>';
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
    { label: ui().labels.starterDeck, value: getStarterDeckText(state.activeCharacter) }
  ].forEach(function (item) {
    let card = document.createElement('article');
    card.className = 'summary-card';
    card.innerHTML = '<span class="summary-label">' + escapeHtml(item.label) + '</span><p class="summary-value">' + escapeHtml(item.value) + '</p>';
    refs.characterSummary.appendChild(card);
  });
}

function renderPageCharacterSelects() {
  let options = PLAYABLE_CHARACTERS.map(function (character) {
    return '<option value="' + character + '">' + escapeHtml(getCharacterLabel(character)) + '</option>';
  }).join('');
  refs.browseCharacterSelect.innerHTML = options;
  refs.buildsCharacterSelect.innerHTML = options;
  refs.browseCharacterSelect.value = state.activeCharacter;
  refs.buildsCharacterSelect.value = state.activeCharacter;
}

function renderCharacterDetail() {
  let info = CHARACTER_INFO[state.activeCharacter];
  if (!info) {
    refs.characterDetailPanel.hidden = true;
    return;
  }
  let language = state.currentLanguage === 'ko' ? 'ko' : 'en';
  refs.characterDetailPanel.hidden = state.currentView !== 'characters';
  refs.characterDetailKicker.textContent = language === 'ko' ? '캐릭터 소개' : 'Character Overview';
  refs.characterDetailHeading.textContent = getCharacterLabel(state.activeCharacter);
  refs.characterDetailBody.textContent = info.description[language] || info.description.ko || info.description.en || '';
  refs.characterDetailImage.src = info.image || '';
  refs.characterDetailImage.alt = getCharacterLabel(state.activeCharacter);
  refs.characterHighlightList.innerHTML = (info.highlights[language] || info.highlights.ko || []).map(function (item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');
}

function renderViewState() {
  let current = pageView();
  let isCharacterView = current === 'characters';
  let isHome = current === 'home';
  let isSinglePanel = !isCharacterView;
  refs.patchPanel.hidden = !isHome;
  refs.charactersSection.hidden = !isCharacterView;
  refs.characterDetailPanel.hidden = current !== 'characters';
  refs.cardsPanel.hidden = current !== 'cards';
  refs.relicsPanel.hidden = current !== 'relics';
  refs.potionsPanel.hidden = current !== 'potions';
  refs.buildsPanel.hidden = current !== 'builds';
  refs.builderPanel.hidden = current !== 'builds' || !state.editorOpen;
  refs.layout.classList.toggle('is-character-view', isCharacterView);
  refs.layout.classList.toggle('is-home-view', isHome);
  refs.layout.classList.toggle('is-single-panel', isSinglePanel);
  refs.content.classList.toggle('is-character-view', isCharacterView);
  refs.charactersSection.classList.toggle('is-character-view', isCharacterView);
  if (refs.themeToggleButton) {
    refs.themeToggleButton.classList.toggle('is-active', state.currentTheme === 'dark');
  }
}

function renderBuildList() {
  let builds = buildsForActiveCharacter();
  refs.buildList.innerHTML = '';
  if (!builds.length) {
    refs.buildList.innerHTML = '<div class="empty-state">' + (state.buildSearch.trim() ? (state.currentLanguage === 'ko' ? '검색 조건에 맞는 빌드가 없습니다.' : 'No builds matched the search.') : ui().empty.builds) + '</div>';
    return;
  }
  builds.forEach(function (build) {
    let summary = summarizeBuild(build);
    let article = document.createElement('article');
    article.className = 'build-card';
    article.dataset.buildId = build.id;
    if (build.id === state.activeBuildId) { article.classList.add('is-active'); }
    article.innerHTML = '<div><p class="section-kicker">' + escapeHtml(build.id === state.activeBuildId ? ui().labels.draft : ui().labels.saved) + '</p><h3 class="build-title">' + escapeHtml(build.title) + '</h3>' + (build.summary ? '<p class="build-desc">' + escapeHtml(build.summary) + '</p>' : '') + '<div class="card-meta"><span class="build-meta">' + ui().labels.cardCount + ': ' + summary.cardCount + '</span><span class="build-meta">' + ui().labels.uniqueCards + ': ' + summary.uniqueCards + '</span><span class="build-meta">' + ui().labels.avgCost + ': ' + formatNumber(summary.avgCost) + '</span><span class="build-meta">' + ui().labels.updated + ': ' + escapeHtml(formatDate(build.updatedAt)) + '</span></div></div><div><div class="build-card-actions"><button class="pill-button" type="button" data-pin-build="' + build.id + '">' + (state.pinnedIds.has(build.id) ? ui().buttons.unpin : ui().buttons.pin) + '</button></div></div>';
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
    let upgradeButton = hasVisibleUpgrade(entry.card) ? '<button class="pill-button" type="button" data-toggle-upgrade="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '">' + ui().buttons.upgrade + '</button>' : '';
    card.className = 'selected-card';
    card.innerHTML = '<div class="selected-card-head"><div><p class="selected-card-name">' + escapeHtml(getCardName(entry.card, entry.upgraded)) + '</p><div class="card-meta"><span class="build-meta">' + escapeHtml(getTypeLabel(entry.card.type)) + '</span><span class="build-meta">' + escapeHtml(getRarityLabel(entry.card.rarity)) + '</span><span class="build-meta">' + escapeHtml(ui().fields.cost) + ': ' + escapeHtml(formatCardCostDisplay(entry.card, entry.upgraded)) + '</span></div></div><span class="stat-chip">x' + entry.quantity + '</span></div><p class="selected-card-text">' + escapeHtml(text) + '</p><div class="selected-card-controls"><button class="pill-button" type="button" data-adjust-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '" data-delta="-1">-1</button><button class="pill-button" type="button" data-adjust-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '" data-delta="1">+1</button>' + upgradeButton + '<button class="pill-button" type="button" data-remove-card="' + entry.card.id + '" data-upgraded="' + entry.upgraded + '">' + ui().buttons.remove + '</button></div>';
    refs.selectedCards.appendChild(card);
  });
}

function getCardExtraCosts(card, upgraded) {
  if (!card) {
    return [];
  }
  let costs = upgraded && Array.isArray(card.upgradedExtraCosts) ? card.upgradedExtraCosts : card.extraCosts;
  return Array.isArray(costs) ? costs.filter(Boolean) : [];
}

function getAdditionalCostLabel(type) {
  let labels = {
    star: { ko: '별', en: 'Star', ja: '星', es: 'Estrella' },
    energy: { ko: '에너지', en: 'Energy', ja: 'エナジー', es: 'Energía' },
    summon: { ko: '소환', en: 'Summon', ja: '召喚', es: 'Invocar' },
    minion_sacrifice: { ko: '하수인 희생', en: 'Minion Sacrifice', ja: '下僕の生贄', es: 'Sacrificio de esbirro' }
  };
  let lang = getCurrentLanguage();
  let entry = labels[type] || labels.energy;
  return entry[lang] || entry.ko;
}

function formatCardCostDisplay(card, upgraded) {
  if (!card) {
    return '';
  }
  let baseCost = card.cost == null ? '' : String(card.cost);
  let extras = getCardExtraCosts(card, upgraded);
  if (!extras.length) {
    return baseCost;
  }
  let extraText = extras.map(function (item) {
    return getAdditionalCostLabel(item.type) + ' ' + item.amount;
  }).join(' + ');
  return baseCost + ' + ' + extraText;
}

function renderFilterControls(filterState, refsGroup) {
  let cards = availableCardsForCharacter(state.activeCharacter);
  let types = Array.from(new Set(cards.map(function (card) { return card.type; }))).sort(function (a, b) { return getTypeLabel(a).localeCompare(getTypeLabel(b), getLocaleTag()); });
  let rarities = Array.from(new Set(cards.map(function (card) { return card.rarity; }))).sort(function (a, b) { return getRarityLabel(a).localeCompare(getRarityLabel(b), getLocaleTag()); });
  let costs = Array.from(new Set(cards.map(function (card) { return String(card.cost); }))).sort(function (a, b) {
    let aNum = Number(a);
    let bNum = Number(b);
    if (Number.isFinite(aNum) && Number.isFinite(bNum)) { return aNum - bNum; }
    return a.localeCompare(b);
  });
  refsGroup.type.innerHTML = optionList(types, ui().labels.all, getTypeLabel);
  refsGroup.rarity.innerHTML = optionList(rarities, ui().labels.all, getRarityLabel);
  refsGroup.cost.innerHTML = optionList(costs, ui().labels.all);
  refsGroup.sort.innerHTML = '<option value="name">' + ui().librarySortOptions.name + '</option><option value="cost">' + ui().librarySortOptions.cost + '</option><option value="rarity">' + ui().librarySortOptions.rarity + '</option><option value="type">' + ui().librarySortOptions.type + '</option>';
  refsGroup.search.value = filterState.search;
  refsGroup.type.value = filterState.type;
  refsGroup.rarity.value = filterState.rarity;
  refsGroup.cost.value = filterState.cost;
  refsGroup.sort.value = filterState.librarySort;
}

function renderFilters() {
  renderFilterControls(state.filters, {
    search: refs.cardSearchInput,
    type: refs.typeFilterSelect,
    rarity: refs.rarityFilterSelect,
    cost: refs.costFilterSelect,
    sort: refs.librarySortSelect
  });
  renderFilterControls(state.editorFilters, {
    search: refs.editorCardSearchInput,
    type: refs.editorTypeFilterSelect,
    rarity: refs.editorRarityFilterSelect,
    cost: refs.editorCostFilterSelect,
    sort: refs.editorLibrarySortSelect
  });
}

function buildLibraryCardMarkup(card, mode) {
  let imageUrl = card.portraitImageUrl || card.imageUrl;
  let imageMarkup = imageUrl ? '<img class="library-thumb" src="' + escapeHtml(imageUrl) + '" alt="' + escapeHtml(getCardName(card, false)) + '">' : '<div class="library-thumb">' + escapeHtml(ui().labels.noImage) + '</div>';
  let canUpgrade = hasVisibleUpgrade(card);
  let addButtons = '<button class="pill-button pill-button-primary" type="button" data-add-card="' + card.id + '" data-upgraded="false">' + ui().buttons.addBase + '</button>' + (canUpgrade ? '<button class="pill-button" type="button" data-add-card="' + card.id + '" data-upgraded="true">' + ui().buttons.addUpgraded + '</button>' : '');
  let actions = mode === 'editor' || state.editorOpen ? addButtons : '';
  let upgradedText = canUpgrade ? getCardText(card, true) : '';
  let upgradedBlock = upgradedText ? '<div class="library-card-upgrade"><span class="upgrade-label">' + escapeHtml(ui().labels.upgraded) + '</span><p class="library-card-text">' + escapeHtml(upgradedText) + '</p></div>' : '';
  let actionsBlock = actions ? '<div class="library-card-actions">' + actions + '</div>' : '';
  return '<div class="library-card-main">' + imageMarkup + '<div><div class="library-card-head"><div><p class="library-card-name">' + escapeHtml(getCardName(card, false)) + '</p><div class="card-meta"><span class="build-meta">' + escapeHtml(getCharacterLabel(card.character)) + '</span><span class="build-meta">' + escapeHtml(getTypeLabel(card.type)) + '</span><span class="build-meta">' + escapeHtml(getRarityLabel(card.rarity)) + '</span><span class="build-meta energy-chip">' + escapeHtml(ui().fields.cost) + ': ' + escapeHtml(formatCardCostDisplay(card, false)) + '</span></div></div></div><p class="library-card-text">' + escapeHtml(getCardText(card, false)) + '</p>' + upgradedBlock + actionsBlock + '</div></div>';
}

function renderLibrary() {
  renderFilters();
  let browseCards = filteredCards(state.filters);
  let editorCards = filteredCards(state.editorFilters);
  refs.libraryList.innerHTML = '';
  refs.editorLibraryList.innerHTML = '';
  if (!browseCards.length) {
    refs.libraryList.innerHTML = '<div class="empty-state">' + ui().empty.library + '</div>';
  } else {
    browseCards.forEach(function (card) {
      let viewCard = document.createElement('article');
      viewCard.className = 'library-card';
      viewCard.innerHTML = buildLibraryCardMarkup(card, 'browse');
      refs.libraryList.appendChild(viewCard);
    });
  }
  if (!editorCards.length) {
    refs.editorLibraryList.innerHTML = '<div class="empty-state">' + ui().empty.library + '</div>';
  } else {
    editorCards.forEach(function (card) {
      let editCard = document.createElement('article');
      editCard.className = 'library-card';
      editCard.innerHTML = buildLibraryCardMarkup(card, 'editor');
      refs.editorLibraryList.appendChild(editCard);
    });
  }
}

function getRelicSourceLabel(owner) {
  if (owner === 'Global') {
    return state.currentLanguage === 'ko' ? '공용' : 'Shared';
  }
  return getCharacterLabel(owner);
}

function buildRelicCollection() {
  let relics = RELICS_DATA.slice();
  let tierOrder = { Starter: 0, Boss: 1, Rare: 2, Uncommon: 3, Common: 4, Shop: 5, Event: 6, Ancient: 7 };
  relics.sort(function (a, b) {
    return (tierOrder[a.tier] ?? 99) - (tierOrder[b.tier] ?? 99)
      || getRelicSourceLabel(a.owner).localeCompare(getRelicSourceLabel(b.owner), getLocaleTag())
      || getRelicLabel(a.name).localeCompare(getRelicLabel(b.name), getLocaleTag());
  });
  return relics;
}

function renderRelicCard(relic) {
  let rawText = relic.description[state.currentLanguage] || relic.description.ko || relic.description.en || '';
  let text = state.currentLanguage === 'ko' ? formatRelicDescriptionText(relic) : rawText;
  let imageUrl = relic.imageUrl || getRelicImageUrl(relic.name);
  return '<article class="relic-card"><div class="relic-card-layout"><img class="relic-thumb" src="' + imageUrl + '" alt="' + escapeHtml(getRelicLabel(relic.name)) + '" loading="lazy" onerror="handleRelicImageError(this)"><div class="relic-card-copy"><div class="relic-card-head"><div><h3 class="relic-title">' + escapeHtml(getRelicLabel(relic.name)) + '</h3><div class="relic-tag-row"><span class="relic-tag">' + escapeHtml(getIdentityLabel(relic.tier)) + '</span><span class="build-meta">' + escapeHtml(getRelicSourceLabel(relic.owner)) + '</span></div></div></div><p class="relic-copy">' + escapeHtml(text) + '</p></div></div></article>';
}

function renderRelics() {
  let relics = buildRelicCollection();
  refs.relicsGrid.innerHTML = relics.map(renderRelicCard).join('');
  if (!refs.relicsGrid.innerHTML) {
    refs.relicsGrid.innerHTML = '<div class="empty-state">' + ui().empty.relics + '</div>';
  }
}

function getPotionPoolLabel(pool) {
  let labels = {
    shared: { en: 'Shared', ko: '공용' },
    event: { en: 'Event', ko: '이벤트' },
    token: { en: 'Token', ko: '토큰' },
    ironclad: { en: 'Ironclad', ko: '아이언클래드' },
    silent: { en: 'Silent', ko: '사일런트' },
    defect: { en: 'Defect', ko: '디펙트' },
    regent: { en: 'Regent', ko: '리젠트' },
    necrobinder: { en: 'Necrobinder', ko: '네크로바인더' }
  };
  let key = String(pool || 'shared').toLowerCase();
  let entry = labels[key] || labels.shared;
  return entry[state.currentLanguage] || entry.ko;
}

function getPotionImageUrl(name) {
  let slug = slugifyAssetName(name);
  return 'https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/' + slug + '.png';
}

function getPotionDisplayName(potion) {
  if (state.currentLanguage === 'ko' && potion.koName) {
    return potion.koName;
  }
  return potion.name;
}

function getPotionDynamicValueMap(potion) {
  let values = {};
  (potion.dynamicVars || []).forEach(function (item) {
    if (!item) {
      return;
    }
    if (item.key) {
      values[item.key] = item.value;
    }
    if (item.power_type) {
      values[item.power_type] = item.value;
    }
    if (item.var_type) {
      values[item.var_type] = item.value;
    }
  });
  return values;
}

function getPluralLabel(count, singular, plural) {
  return Number(count) === 1 ? singular : plural;
}

function normalizePotionDescription(text, potion, language) {
  let valueMap = getPotionDynamicValueMap(potion);
  let result = String(text || '');

  result = result
    .replace(/\{Energy:energyIcons\(\)\}/g, language === 'ko' ? '에너지 ' + (valueMap.Energy || 0) + '개' : (valueMap.Energy || 0) + ' Energy')
    .replace(/\{energyPrefix:energyIcons\(1\)\}/g, language === 'ko' ? '에너지 1개' : '1 Energy')
    .replace(/\{Stars:starIcons\(\)\}/g, language === 'ko' ? '별 ' + (valueMap.Stars || 0) + '개' : (valueMap.Stars || 0) + ' Stars')
    .replace(/\{Repeat:choose\(1\):다음 턴에\|다음 \[blue\]\{\}\[\/blue\]턴 동안\}/g, Number(valueMap.Repeat) === 1 ? '다음 턴에' : '다음 ' + (valueMap.Repeat || 0) + '턴 동안')
    .replace(/\{ClarityPower:choose\(1\):턴\|\[blue\]\{\}\[\/blue\]턴\}/g, Number(valueMap.ClarityPower) === 1 ? '턴' : (valueMap.ClarityPower || 0) + '턴')
    .replace(/\{Repeat:plural:next turn\|for the next \[blue\]\{\}\[\/blue\] turns\}/g, Number(valueMap.Repeat) === 1 ? 'next turn' : 'for the next ' + (valueMap.Repeat || 0) + ' turns')
    .replace(/\{Repeat:plural:Slot\|Slots\}/g, getPluralLabel(valueMap.Repeat, 'Slot', 'Slots'))
    .replace(/\{Cards:plural:Soul\|Souls\}/g, getPluralLabel(valueMap.Cards, 'Soul', 'Souls'))
    .replace(/\{Cards:plural:card\|cards\}/g, getPluralLabel(valueMap.Cards, 'card', 'cards'))
    .replace(/\{Cards:plural:Shiv\|Shivs\}/g, getPluralLabel(valueMap.Cards, 'Shiv', 'Shivs'))
    .replace(/\{Repeat:plural:turn\|turns\}/g, getPluralLabel(valueMap.Repeat, 'turn', 'turns'))
    .replace(/\{RadiancePower:plural:turn\|turns\}/g, getPluralLabel(valueMap.RadiancePower, 'turn', 'turns'))
    .replace(/\{ClarityPower:plural:turn\|\[blue\]\{\}\[\/blue\] turns\}/g, Number(valueMap.ClarityPower) === 1 ? 'turn' : (valueMap.ClarityPower || 0) + ' turns')
    .replace(/\{([A-Za-z]+):diff\(\)\}/g, function (_, key) {
      return valueMap[key] != null ? valueMap[key] : '';
    })
    .replace(/\{([A-Za-z]+)\}/g, function (_, key) {
      return valueMap[key] != null ? valueMap[key] : '';
    })
    .replace(/\[(?:gold|blue|green)\]|\[\/(?:gold|blue|green)\]/g, '')
    .replace(/\s+([?.!,])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  return result;
}

function buildPotionCollection() {
  let rarityOrder = { Common: 0, Uncommon: 1, Rare: 2, Event: 3, Token: 4 };
  return POTIONS_DATA.slice().sort(function (a, b) {
    return (rarityOrder[a.rarity] ?? 99) - (rarityOrder[b.rarity] ?? 99)
      || getPotionPoolLabel(a.pool).localeCompare(getPotionPoolLabel(b.pool), getLocaleTag())
      || getPotionDisplayName(a).localeCompare(getPotionDisplayName(b), getLocaleTag());
  });
}

function renderPotionCard(potion) {
  let displayName = getPotionDisplayName(potion);
  let text = normalizePotionDescription(
    potion.description[state.currentLanguage] || potion.description.ko || potion.description.en || '',
    potion,
    state.currentLanguage
  );
  let imageUrl = potion.imageUrl || getPotionImageUrl(potion.name);
  return '<article class="relic-card"><div class="relic-card-layout"><img class="relic-thumb" src="' + imageUrl + '" alt="' + escapeHtml(displayName) + '" loading="lazy" onerror="handlePotionImageError(this)"><div class="relic-card-copy"><div class="relic-card-head"><div><h3 class="relic-title">' + escapeHtml(displayName) + '</h3><div class="relic-tag-row"><span class="relic-tag">' + escapeHtml(getRarityLabel(potion.rarity)) + '</span><span class="build-meta">' + escapeHtml(getPotionPoolLabel(potion.pool)) + '</span></div></div></div><p class="relic-copy">' + escapeHtml(text) + '</p></div></div></article>';
}

function renderPotions() {
  let potions = buildPotionCollection();
  refs.potionsGrid.innerHTML = potions.map(renderPotionCard).join('');
  if (!refs.potionsGrid.innerHTML) {
    refs.potionsGrid.innerHTML = '<div class="empty-state">' + ui().empty.potions + '</div>';
  }
}

function renderPatchNotes() {
  let notes = PATCH_NOTES_DATA && Array.isArray(PATCH_NOTES_DATA.items) ? PATCH_NOTES_DATA.items : [];
  if (!notes.length) {
    refs.patchMeta.innerHTML = '';
    refs.patchList.innerHTML = '<div class="empty-state">' + ui().empty.patchNotes + '</div>';
    return;
  }

  let generatedAt = PATCH_NOTES_DATA.generatedAt ? Date.parse(PATCH_NOTES_DATA.generatedAt) : NaN;
  let source = PATCH_NOTES_DATA.source || 'https://steamcommunity.com/games/2868840/rss';
  refs.patchMeta.innerHTML =
    '<span class="patch-pill">' + escapeHtml(ui().labels.synced) + ': ' + escapeHtml(Number.isFinite(generatedAt) ? formatDateTime(generatedAt) : source) + '</span>' +
    '<span class="patch-pill">' + escapeHtml(ui().links.patchSource) + '</span>';

  refs.patchList.innerHTML = notes.slice(0, 5).map(function (note) {
    let publishedAt = note.publishedAt ? Date.parse(note.publishedAt) : NaN;
    let title = state.currentLanguage === 'ko' ? translatePatchTitleToKo(note.title) : note.title;
    let summary = String((state.currentLanguage === 'ko' ? translatePatchSummaryToKo(note.summaryKo || note.summary) : note.summary) || '').trim();
    let noteId = note.id || String(note.link || '').split('/').pop();
    let detailUrl = '/patch-note.html?id=' + encodeURIComponent(noteId);
    return '<a class="patch-card patch-card-link" href="' + escapeHtml(detailUrl) + '">' +
      '<div class="patch-card-head">' +
      '<div><h3 class="patch-title">' + escapeHtml(title) + '</h3></div>' +
      '<span class="build-meta">' + escapeHtml(Number.isFinite(publishedAt) ? formatDate(publishedAt) : (note.pubDate || '')) + '</span>' +
      '</div>' +
      '<p class="patch-summary">' + escapeHtml(summary || note.title) + '</p>' +
      '<span class="patch-link">' + escapeHtml(ui().links.readPatch) + '</span>' +
      '</a>';
  }).join('');
}

function renderEditor() {
  renderEditorFields();
  renderSelectedCards();
  renderLibrary();
}

function render() {
  ensureActiveBuild();
  applyTheme();
  state.currentView = pageView();
  renderStaticText();
  renderLanguageMenu();
  renderViewState();
  refs.sortSelect.value = state.currentSort;
  if (refs.buildSearchInput) { refs.buildSearchInput.value = state.buildSearch; }
  renderPageCharacterSelects();
  renderCharacterTabs();
  renderCharacterSummary();
  renderPatchNotes();
  renderCharacterDetail();
  renderBuildList();
  renderRelics();
  renderPotions();
  renderEditor();
}

refs.siteMenuButton.addEventListener('click', function () {
  refs.languageMenu.hidden = true;
  refs.languageButton.setAttribute('aria-expanded', 'false');
  refs.siteMenu.hidden = !refs.siteMenu.hidden;
  refs.siteMenuButton.setAttribute('aria-expanded', String(!refs.siteMenu.hidden));
});

refs.siteMenu.addEventListener('click', function (event) {
  let target = event.target.closest('[data-jump-target]');
  if (!target) { return; }
  jumpToSection(target.dataset.jumpTarget);
});

refs.languageButton.addEventListener('click', function () {
  refs.siteMenu.hidden = true;
  refs.siteMenuButton.setAttribute('aria-expanded', 'false');
  refs.languageMenu.hidden = !refs.languageMenu.hidden;
  refs.languageButton.setAttribute('aria-expanded', String(!refs.languageMenu.hidden));
});

refs.languageMenu.addEventListener('click', function (event) {
  let option = event.target.closest('[data-language]');
  if (!option) { return; }
  state.currentLanguage = languages.includes(option.dataset.language) ? option.dataset.language : 'ko';
  try {
    window.localStorage.setItem('sts2-site-language', state.currentLanguage);
  } catch (error) {}
  closeUtilityMenus();
  render();
});

if (refs.editorialLangEn && refs.editorialLangKo) {
  refs.editorialLangEn.addEventListener('click', function () {
    state.currentLanguage = 'en';
    render();
  });

  refs.editorialLangKo.addEventListener('click', function () {
    state.currentLanguage = 'ko';
    render();
  });
}

if (refs.themeToggleButton) {
  refs.themeToggleButton.addEventListener('click', function () { toggleTheme(); });
}

refs.browseCharacterSelect.addEventListener('change', function (event) {
  state.activeCharacter = event.target.value;
  state.filters = { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' };
  state.editorFilters = { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' };
  render();
});

refs.buildsCharacterSelect.addEventListener('change', function (event) {
  state.activeCharacter = event.target.value;
  if (!state.editorOpen || state.activeBuildId === null) {
    state.draft = createEmptyBuild(state.activeCharacter);
  }
  render();
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
  state.editorFilters = { search: '', type: 'all', rarity: 'all', cost: 'all', librarySort: 'name' };
  if (!state.editorOpen || state.activeBuildId === null) {
    state.draft = createEmptyBuild(state.activeCharacter);
  } else {
    state.draft.character = state.activeCharacter;
    state.draft.cards = state.draft.cards.filter(function (entry) {
      let card = cardMap.get(entry.cardId);
      return card && card.character === state.activeCharacter && !isBuildExcludedCard(card);
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
    return card && card.character === state.activeCharacter && !isBuildExcludedCard(card);
  });
  render();
});

refs.cardSearchInput.addEventListener('input', function (event) { state.filters.search = event.target.value; renderLibrary(); });
refs.editorCardSearchInput.addEventListener('input', function (event) { state.editorFilters.search = event.target.value; renderLibrary(); });
refs.buildSearchInput.addEventListener('input', function (event) { state.buildSearch = event.target.value; renderBuildList(); });
refs.typeFilterSelect.addEventListener('change', function (event) { state.filters.type = event.target.value; renderLibrary(); });
refs.rarityFilterSelect.addEventListener('change', function (event) { state.filters.rarity = event.target.value; renderLibrary(); });
refs.costFilterSelect.addEventListener('change', function (event) { state.filters.cost = event.target.value; renderLibrary(); });
refs.librarySortSelect.addEventListener('change', function (event) { state.filters.librarySort = event.target.value; renderLibrary(); });
refs.editorTypeFilterSelect.addEventListener('change', function (event) { state.editorFilters.type = event.target.value; renderLibrary(); });
refs.editorRarityFilterSelect.addEventListener('change', function (event) { state.editorFilters.rarity = event.target.value; renderLibrary(); });
refs.editorCostFilterSelect.addEventListener('change', function (event) { state.editorFilters.cost = event.target.value; renderLibrary(); });
refs.editorLibrarySortSelect.addEventListener('change', function (event) { state.editorFilters.librarySort = event.target.value; renderLibrary(); });

function handleAddCardClick(event) {
  let button = event.target.closest('[data-add-card]');
  if (!button) { return; }
  addCardToDraft(button.dataset.addCard, button.dataset.upgraded === 'true');
}

refs.editorLibraryList.addEventListener('click', handleAddCardClick);
refs.libraryList.addEventListener('click', handleAddCardClick);

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
    closeUtilityMenus();
  }
});

render();
