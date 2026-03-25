let languages = ['en', 'ko', 'ja', 'es'];

let uiText = {
  en: {
    heroText: 'Browse character-specific decklists built around clear game plans, core packages, and practical card counts instead of raw card encyclopedia browsing.',
    heroActionPrimary: 'Choose character',
    heroActionSecondary: 'Open decklists',
    panelLabel: 'Current Build',
    heroPoints: ['5 characters', '10 decklists', 'Core cards, counts, and plans'],
    panelNote: 'This page is organized as a fast reference for route planning and archetype selection.',
    summaryKicker: 'Selected Character',
    decklistKicker: 'Decklists',
    deckPlanKicker: 'Deck Plan',
    coreKicker: 'Core Cards',
    coreHeading: 'Main package',
    supportKicker: 'Support Cards',
    supportHeading: 'Glue and scaling',
    notesKicker: 'Piloting Notes',
    notesHeading: 'How to play the list',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    themeOptions: {
      dark: 'Dark',
      light: 'Light'
    },
    labels: {
      health: 'Health',
      relic: 'Relic',
      identity: 'Identity',
      deckCount: 'Deck Count',
      archetype: 'Archetype',
      targetSize: 'Target Size',
      avgCost: 'Avg Cost',
      difficulty: 'Difficulty'
    },
    suffixes: {
      lists: 'lists',
      decklists: 'decklists',
      curated: 'curated archetypes for route planning and pickups.',
      cost: 'cost'
    }
  },
  ko: {
    heroText: '카드 도감이 아니라 캐릭터별 운영 플랜, 핵심 패키지, 실제 카드 수량 기준으로 정리한 슬더스2 덱리스트를 빠르게 확인할 수 있습니다.',
    heroActionPrimary: '캐릭터 선택',
    heroActionSecondary: '덱리스트 보기',
    panelLabel: '현재 구성',
    heroPoints: ['캐릭터 5종', '덱리스트 10개', '핵심 카드, 수량, 운영 플랜'],
    panelNote: '이 페이지는 루트 선택과 카드 픽 판단을 빠르게 하기 위한 참조 화면입니다.',
    summaryKicker: '선택한 캐릭터',
    decklistKicker: '덱리스트',
    deckPlanKicker: '덱 플랜',
    coreKicker: '핵심 카드',
    coreHeading: '메인 패키지',
    supportKicker: '보조 카드',
    supportHeading: '연결 파츠와 스케일링',
    notesKicker: '운영 메모',
    notesHeading: '플레이 가이드',
    languageLabel: '언어',
    themeLabel: '테마',
    themeOptions: {
      dark: '다크',
      light: '화이트'
    },
    labels: {
      health: '체력',
      relic: '시작 유물',
      identity: '핵심 기믹',
      deckCount: '덱 수',
      archetype: '아키타입',
      targetSize: '목표 덱 수',
      avgCost: '평균 코스트',
      difficulty: '난이도'
    },
    suffixes: {
      lists: '개',
      decklists: '덱리스트',
      curated: '루트 설계와 카드 픽 기준으로 정리한 추천 아키타입입니다.',
      cost: '코스트'
    }
  },
  ja: {
    heroText: 'カード図鑑ではなく、キャラクター別の運用方針、主要パッケージ、実用的な採用枚数を基準にした Slay the Spire 2 のデッキリストを確認できます。',
    heroActionPrimary: 'キャラ選択',
    heroActionSecondary: 'デッキを見る',
    panelLabel: '現在の構成',
    heroPoints: ['5キャラクター', '10デッキリスト', '主力カード、枚数、運用方針'],
    panelNote: 'このページはルート判断とカード取得判断を素早く行うための参照用です。',
    summaryKicker: '選択中のキャラクター',
    decklistKicker: 'デッキリスト',
    deckPlanKicker: 'デッキ方針',
    coreKicker: '主力カード',
    coreHeading: 'メインパッケージ',
    supportKicker: '補助カード',
    supportHeading: '接続札とスケーリング',
    notesKicker: '運用メモ',
    notesHeading: '回し方',
    languageLabel: '言語',
    themeLabel: 'テーマ',
    themeOptions: {
      dark: 'ダーク',
      light: 'ライト'
    },
    labels: {
      health: '体力',
      relic: '開始レリック',
      identity: '主要ギミック',
      deckCount: 'デッキ数',
      archetype: 'アーキタイプ',
      targetSize: '目標枚数',
      avgCost: '平均コスト',
      difficulty: '難易度'
    },
    suffixes: {
      lists: '個',
      decklists: 'デッキリスト',
      curated: 'ルート計画とカード取得の基準になる厳選アーキタイプです。',
      cost: 'コスト'
    }
  },
  es: {
    heroText: 'Consulta listas de mazos de cada personaje centradas en planes claros, paquetes clave y cantidades prácticas de cartas, no solo en una enciclopedia de cartas.',
    heroActionPrimary: 'Elegir personaje',
    heroActionSecondary: 'Ver mazos',
    panelLabel: 'Versión actual',
    heroPoints: ['5 personajes', '10 decklists', 'Cartas clave, cantidades y plan'],
    panelNote: 'Esta página está pensada como referencia rápida para decidir rutas y elecciones de cartas.',
    summaryKicker: 'Personaje seleccionado',
    decklistKicker: 'Decklists',
    deckPlanKicker: 'Plan del mazo',
    coreKicker: 'Cartas clave',
    coreHeading: 'Paquete principal',
    supportKicker: 'Cartas de apoyo',
    supportHeading: 'Soporte y escalado',
    notesKicker: 'Notas de uso',
    notesHeading: 'Cómo jugar la lista',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    themeOptions: {
      dark: 'Oscuro',
      light: 'Claro'
    },
    labels: {
      health: 'Vida',
      relic: 'Reliquia',
      identity: 'Identidad',
      deckCount: 'Cantidad de mazos',
      archetype: 'Arquetipo',
      targetSize: 'Tamaño objetivo',
      avgCost: 'Costo medio',
      difficulty: 'Dificultad'
    },
    suffixes: {
      lists: '',
      decklists: 'decklists',
      curated: 'arquetipos seleccionados para planear rutas y picks.',
      cost: 'de costo'
    }
  }
};

let translations = {
  ko: {
    'Decklist Archive': '덱리스트 아카이브',
    'Ironclad': '아이언클래드',
    'Silent': '사일런트',
    'Regent': '리젠트',
    'Necrobinder': '네크로바인더',
    'Defect': '디펙트',
    'Attack': '공격',
    'Skill': '스킬',
    'Power': '파워',
    'Strength burst': '힘 폭발',
    'HP conversion': '체력 전환',
    'Shiv tempo': '시브 템포',
    'Poison control': '독 컨트롤',
    'Resource ramp': '자원 램프',
    'Control': '컨트롤',
    'Companion pressure': '동료 압박',
    'Doom control': '둠 컨트롤',
    'Lightning tempo': '번개 템포',
    'Scaling engine': '스케일링 엔진',
    'Low': '낮음',
    'Medium': '보통',
    'High': '높음',
    'Burning Blood': '버닝 블러드',
    'Ring of the Snake': '링 오브 더 스네이크',
    'Divine Right': '디바인 라이트',
    'Bound Phylactery': '바운드 필랙터리',
    'Cracked Core': '크랙드 코어',
    'Strength, self-damage, Exhaust': '힘, 자해, 소멸',
    'Discard, Shiv, Poison': '버리기, 시브, 독',
    'Stars, control, payoff turns': '별, 제어, 보상 턴',
    'Summon, Doom, Osty, souls': '소환, 둠, 오스티, 영혼',
    'Orbs, Focus, Evoke': '오브, 포커스, 격발',
    'Front-loaded damage and HP conversion decks that either snowball Strength or turn self-damage into massive defensive tempo.': '빠른 공격 압박과 체력 전환 운영을 통해 힘 스노우볼 또는 자해 기반 초과 방어 템포를 만드는 캐릭터입니다.',
    'Flexible tempo decks built on discard smoothing, Shivs, and poison-based inevitability.': '드로우-버리기 안정화, 시브, 독 누적을 통해 유연한 템포를 만드는 캐릭터입니다.',
    'Star-based scaling decks that either tempo into sweeping board control or build explosive late turns.': '별 자원을 쌓아 광역 제압을 만들거나 후반 폭발 턴을 설계하는 스케일링 캐릭터입니다.',
    'Resource-routing decks that turn Osty, Summon, and Doom into either board control or burst finishing patterns.': 'Osty, Summon, Doom 자원을 배분해 제압 또는 폭딜 마무리 패턴을 만드는 캐릭터입니다.',
    'Orb-centric lists that either compress lightning burst or generate scaling through long-form focus engines.': '오브 중심 운영으로 번개 폭딜을 압축하거나 Focus 엔진으로 장기 스케일링을 노리는 캐릭터입니다.',
    'Strength Slam': '힘 슬램',
    'Blood Fortress': '블러드 포트리스',
    'Shiv Velocity': '시브 벨로시티',
    'Poison Control': '독 컨트롤',
    'Star Ramp': '스타 램프',
    'Royal Control': '로열 컨트롤',
    'Osty Beatdown': '오스티 비트다운',
    'Doom Engine': '둠 엔진',
    'Lightning Cycle': '라이트닝 사이클',
    'Focus Scaling': '포커스 스케일링',
    'Scale Strength quickly, then cash out with efficient multi-hit and heavy finishers.': '힘을 빠르게 쌓은 뒤 효율적인 연타와 마무리 카드로 전투를 끝내는 리스트입니다.',
    'Convert health into oversized block turns and grind with compact premium attacks.': '체력을 과감히 써서 큰 방어 턴을 만들고 고효율 공격으로 압박하는 리스트입니다.',
    'Flood the hand with cheap blades, cycle fast, and convert tempo into letant pressure.': '저렴한 시브를 계속 생성하고 빠르게 순환해 압박을 유지하는 리스트입니다.',
    'Survive cleanly, stack poison, and let the fight collapse on its own clock.': '안정적으로 버티면서 독을 누적해 전투를 자연스럽게 무너뜨리는 리스트입니다.',
    'Accumulate stars early and convert them into oversized payoff turns before bosses stabilize.': '초반에 별을 모아 보스가 안정화되기 전에 큰 보상 턴으로 전환하는 리스트입니다.',
    'Use stars to stay ahead on defense and debuffs, then win through safe repeated payoff windows.': '별을 방어와 약화 유지에 쓰고, 안전한 타이밍에 반복적으로 보상 턴을 만드는 리스트입니다.',
    'Keep Osty healthy, force efficient summon turns, and end fights with high-pressure companion damage.': 'Osty 체력을 지키며 효율적인 Summon 턴을 만들고 동료 딜로 전투를 끝내는 리스트입니다.',
    'Stack Doom across the board and let delayed inevitability carry elite and boss encounters.': '광역으로 Doom을 누적해 지연형 확정 피해로 엘리트와 보스를 압도하는 리스트입니다.',
    'Channel and evoke lightning repeatedly to keep damage output high without slowing the deck down.': '번개 오브를 반복 생성·격발해 덱 속도를 유지하면서 화력을 내는 리스트입니다.',
    'Build a slower engine that wins through high-value orbs, powers, and safe repeated cycling.': '고가치 오브와 파워를 바탕으로 느리지만 안정적인 엔진을 굴리는 리스트입니다.',
    'Prioritize cheap Strength gain, survive with compact block tools, and end elite fights before the deck bloats.': '저렴한 힘 증가 카드를 우선 확보하고, 작은 방어 패키지로 버티면서 덱이 무거워지기 전에 엘리트 전투를 끝냅니다.',
    'Exploit Ironclad sustain to buy tempo with self-damage cards, stabilize, then win through repeated efficient attacks.': '아이언클래드의 회복 능력을 활용해 자해 카드로 템포를 사고, 안정화한 뒤 효율 좋은 공격을 반복해 승리합니다.',
    'Lean on card draw and cheap generation to keep output high every turn instead of waiting for one huge combo round.': '한 번의 큰 콤보 턴을 기다리기보다 드로우와 저비용 생성 카드로 매 턴 출력이 떨어지지 않게 유지합니다.',
    'Focus on stability, weak application, and poison density so bosses die without overcommitting to attack cards.': '안정성, 약화 부여, 독 밀도를 우선해 공격 카드에 과투자하지 않고도 보스를 잡는 방향으로 운영합니다.',
    'Use low-cost star generation to set up one or two decisive payoff cycles instead of playing fair every turn.': '매 턴 정직하게 교환하기보다 저비용 별 수급으로 한두 번의 결정적인 보상 턴을 만드는 데 집중합니다.',
    'Prefer consistency over burst by stabilizing every turn and cashing stars only when the board is fully under control.': '폭발력보다 안정성을 우선해 매 턴 전장을 정리하고, 상황이 완전히 통제됐을 때만 별 자원을 사용합니다.',
    'Route the deck around reliable summon generation so Osty stays active and every payoff attack remains live.': '안정적인 Summon 수급을 중심으로 덱을 구성해 Osty가 항상 살아 있게 만들고, 모든 보상 공격이 유효하게 돌아가도록 합니다.',
    'Use defensive doom application to stabilize while your damage profile scales without repeated attack commitments.': '방어를 겸한 Doom 부여로 전장을 안정화하면서, 매턴 공격을 강요받지 않아도 피해량이 계속 누적되게 만듭니다.',
    'Prioritize cheap orb setup, repeated evoke triggers, and enough draw to keep the cycle continuous.': '저비용 오브 전개, 반복 격발, 충분한 드로우를 우선해 오브 순환이 끊기지 않도록 합니다.',
    'Accept slower starts, preserve HP with defensive orb turns, and win once Focus scaling pushes every orb above rate.': '느린 출발을 감수하고 방어형 오브 턴으로 체력을 지키며, Focus 스케일링으로 모든 오브 효율이 기준 이상이 되면 승리합니다.',
    'Applies Vulnerable to set up all follow-up damage.': '후속 공격이 모두 강해지도록 Vulnerable을 거는 카드입니다.',
    'Free damage that multiplies pressure once Strength is online.': '힘이 붙은 뒤 압박을 폭발적으로 늘려 주는 무료 딜 카드입니다.',
    'Smooth early turns and upgrades your premium hits mid-combat.': '초반 턴을 안정화하고 전투 중 핵심 카드를 강화합니다.',
    'Primary scaling anchor for every damage line.': '모든 딜 라인의 중심이 되는 핵심 스케일링 카드입니다.',
    'Main finisher once Strength stacks begin to matter.': '힘이 쌓이기 시작하면 주된 마무리 수단이 됩니다.',
    'Keep only enough block to survive elite turns.': '엘리트의 강한 턴을 넘길 정도의 방어만 남깁니다.',
    'Efficient defensive spike that fits the HP-trading plan.': '체력 교환 플랜과 잘 맞는 고효율 순간 방어 카드입니다.',
    'Compact block plus draw to find your Strength cards.': '작은 방어와 드로우를 동시에 제공해 힘 카드 접근성을 높입니다.',
    'Bridge card that keeps damage flowing while cycling.': '순환을 유지하면서도 딜 템포를 끊지 않는 연결 카드입니다.',
    'The deck exists to abuse this efficiency.': '이 덱은 이 카드의 효율을 극대화하기 위해 존재합니다.',
    'Vulnerable makes your compact finishers matter.': 'Vulnerable 덕분에 가벼운 마무리 카드도 위력이 크게 올라갑니다.',
    'Upgrades key defense cards and keeps scaling clean.': '핵심 방어 카드를 강화하고 성장 곡선을 매끄럽게 만듭니다.',
    'Turns oversized block turns directly into lethal damage.': '과하게 쌓은 방어를 그대로 치명타로 바꿉니다.',
    'Retained only until premium block density is online.': '상위 방어 카드 밀도가 확보될 때까지만 유지하는 카드입니다.',
    'Lets you trim junk during combat while blocking.': '방어하면서 전투 중 잡카드를 정리할 수 있습니다.',
    'Keeps block and card flow stable.': '방어와 카드 순환을 함께 안정화합니다.',
    'Punishes dead hands and spikes defense when needed.': '손패가 꼬였을 때도 가치를 내며 필요 시 방어를 크게 끌어올립니다.',
    'Primary blade generation and payoff enabler.': '시브 생성의 중심이며 보상 카드들을 작동시키는 핵심 파츠입니다.',
    'Block plus Shiv keeps every turn efficient.': '방어와 시브를 함께 제공해 매 턴 효율을 유지합니다.',
    'Cheap control that helps protect aggressive hands.': '공격적인 손패를 지켜 주는 저비용 제어 카드입니다.',
    'Turns your generated blades into real scaling damage.': '생성된 시브를 실제 스케일링 딜로 바꿉니다.',
    'Finds generators and smooths dead hands.': '생성 카드를 찾고 꼬인 손패를 정리합니다.',
    'Adds draw without dropping defense.': '방어를 포기하지 않고 드로우를 보충합니다.',
    'Reliable early defense plus discard outlet.': '안정적인 초반 방어와 버리기 수단을 동시에 제공합니다.',
    'Converts wide turns into boss damage.': '손패가 넓게 펼쳐진 턴을 보스 딜로 바꿔 줍니다.',
    'Cheap Weak buys time for poison ticks.': '저렴한 Weak 부여로 독이 쌓일 시간을 벌어 줍니다.',
    'Stable block anchor for long fights.': '장기전에서 방어의 중심이 되는 카드입니다.',
    'Main poison source.': '주요 독 누적 수단입니다.',
    'Closes bosses once poison count is established.': '독이 충분히 쌓인 뒤 보스를 마무리합니다.',
    'Defense plus draw makes setup cleaner.': '방어와 드로우를 함께 제공해 세팅 과정을 매끄럽게 합니다.',
    'Finds poison payoffs on demand.': '필요한 타이밍에 독 보상 카드를 찾아 줍니다.',
    'Bridges aggressive hallway fights.': '공격적인 일반 전투 구간을 무난하게 이어 줍니다.',
    'Passive scaling for long elite and boss combats.': '엘리트와 보스 장기전에서 수동적으로 성장합니다.',
    'Main star gain engine.': '별 수급의 핵심 엔진입니다.',
    'Cheap setup that keeps hands moving.': '손패 흐름을 유지해 주는 저비용 세팅 카드입니다.',
    'Block plus star gain fixes tempo loss.': '방어와 별 수급을 함께 해결해 템포 손실을 줄입니다.',
    'Wide payoff for built star turns.': '별을 모은 턴에 광역 보상을 제공합니다.',
    'Universal setup through Weak and Vulnerable.': 'Weak과 Vulnerable을 동시에 걸어 어떤 전투에서도 세팅 역할을 합니다.',
    'Retained until premium defensive cards arrive.': '상위 방어 카드가 올 때까지 임시로 유지합니다.',
    'Temporary damage floor while assembling payoffs.': '보상 카드를 모으는 동안 최소 딜을 책임집니다.',
    'Single-target closer once stars are banked.': '별 자원이 모이면 단일 적 마무리 카드가 됩니다.',
    'Debuff glue for every difficult target.': '까다로운 적 상대로 모든 운영을 이어 주는 약화 카드입니다.',
    'Defensive tempo plus star progression.': '방어 템포와 별 진행도를 동시에 올립니다.',
    'Keeps the resource engine online.': '자원 엔진이 끊기지 않게 유지합니다.',
    'Main board reset tool.': '전장을 정리하는 주력 카드입니다.',
    'Stable fallback block.': '안정적인 기본 방어 수단입니다.',
    'Low-risk card flow.': '리스크가 적은 카드 순환 도구입니다.',
    'Long-fight durability and scaling.': '장기전에서 생존력과 성장성을 동시에 제공합니다.',
    'Deck fixing for slow matchups.': '느린 매치업에서 덱 정렬을 도와 줍니다.',
    'Efficient summon foundation.': '효율적인 Summon 운영의 기반입니다.',
    'Primary payoff for preserving Osty health.': 'Osty 체력을 지켜냈을 때 가장 큰 보상을 주는 카드입니다.',
    'Cheap activation that keeps pressure letant.': '저비용으로 계속 압박을 이어 가게 해 줍니다.',
    'Sets up future burst turns cleanly.': '다음 폭발 턴을 깔끔하게 준비합니다.',
    'Keeps bad hands from collapsing.': '손패가 나빠도 전투가 무너지지 않게 받쳐 줍니다.',
    'Rebuys key cards during extended fights.': '장기전에서 핵심 카드를 다시 가져옵니다.',
    'Buys time against multi-enemy boards.': '다수 적 전투에서 시간을 벌어 줍니다.',
    'Temporary filler until stronger payoffs replace it.': '더 강한 보상 카드가 오기 전까지 쓰는 임시 카드입니다.',
    'Main AOE doom application and block card.': '광역 Doom 부여와 방어를 동시에 맡는 핵심 카드입니다.',
    'Supports resource-heavy control turns.': '자원을 많이 쓰는 제어 턴을 보조합니다.',
    'Maintains summon baseline for stability.': '안정적인 운영을 위해 최소 Summon 라인을 유지합니다.',
    'Loops premium control cards.': '고급 제어 카드를 반복해서 사용하게 해 줍니다.',
    'Needed until doom density fully carries combat.': 'Doom 밀도가 전투를 스스로 끌고 갈 수 있을 때까지 필요한 카드입니다.',
    'Cheap interaction for awkward turns.': '애매한 턴을 넘기게 해 주는 저비용 상호작용 카드입니다.',
    'Adds extra insurance in elite fights.': '엘리트 전투에서 추가 안정성을 제공합니다.',
    'Converts built doom states into a hard close.': '쌓아 둔 Doom 상태를 확실한 마무리로 바꿉니다.',
    'Main reliable orb setup.': '안정적으로 오브를 전개하는 핵심 카드입니다.',
    'Best early payoff for every lightning line.': '모든 번개 라인의 초반 최고 보상 카드입니다.',
    'Turns evoke chains into real board damage.': '연속 격발을 실제 전장 화력으로 전환합니다.',
    'Tempo attack that keeps the orb engine advancing.': '오브 엔진을 유지하면서 딜 템포도 확보하는 공격 카드입니다.',
    'Hold only enough block for rough turns.': '위험한 턴을 넘길 만큼의 방어만 유지합니다.',
    'High-value random power access.': '가치 높은 랜덤 파워 접근 수단입니다.',
    'Supports draw and orb rotation.': '드로우와 오브 순환을 함께 보조합니다.',
    'Temporary filler until more orb cards appear.': '더 좋은 오브 카드가 나올 때까지 임시로 쓰는 카드입니다.',
    'Reliable early orb presence.': '초반에 안정적으로 오브를 유지하게 해 줍니다.',
    'Finds powers that accelerate scaling.': '스케일링을 앞당기는 파워를 찾아 줍니다.',
    'Adds lightning payoff density.': '번개 보상 카드 밀도를 높여 줍니다.',
    'Main Focus growth source.': 'Focus 성장을 책임지는 핵심 카드입니다.',
    'Still useful after Focus is established.': 'Focus가 갖춰진 뒤에도 계속 가치가 있습니다.',
    'Carry block until powers take over.': '파워 엔진이 완성될 때까지 방어를 책임집니다.',
    'Draw plus frost stabilizes setup turns.': '드로우와 서리 오브로 세팅 턴을 안정화합니다.',
    'Single-slot finisher for longer boss fights.': '긴 보스전에서 한 장으로 마무리 역할을 맡습니다.',
    'Remove basic Strikes before trimming Anger; Anger scales far harder with Strength.': '기본 Strike를 먼저 제거하고 Anger는 나중에 줄이세요. 힘이 붙으면 Anger의 성장폭이 훨씬 큽니다.',
    'Use Bash on targets that must die immediately instead of spending it on weak hallway fights.': '약한 일반 전투에 Bash를 쓰기보다 즉시 정리해야 하는 대상에게 아껴 쓰세요.',
    'Do not over-defend. This list wins by shortening fights, not by blocking forever.': '과하게 방어하지 마세요. 이 리스트는 오래 버티는 것이 아니라 전투를 짧게 끝내며 이깁니다.',
    'Treat HP as a resource, but leave enough margin for elite burst windows.': '체력을 자원처럼 쓰되, 엘리트 폭딜 턴을 견딜 여유는 반드시 남기세요.',
    'Body Slam becomes worth duplicating only after your block package is consistent.': 'Body Slam 복사는 방어 패키지가 안정된 뒤에야 가치가 생깁니다.',
    'This list rewards card removal heavily because every weak draw hurts your conversion turns.': '이 리스트는 카드 제거 효율이 매우 높습니다. 약한 카드 한 장이 전환 턴 전체를 망칠 수 있기 때문입니다.',
    'Do not keep too many reactive skills or the deck stops snowballing.': '반응형 스킬을 너무 많이 남기면 덱의 스노우볼이 끊깁니다.',
    'Accuracy matters more than a second Finisher if your Shiv generation is already dense.': '시브 생성이 충분하다면 두 번째 Finisher보다 Accuracy 쪽이 더 중요합니다.',
    'Discard aggressively when it helps preserve cheap velocity turns.': '저비용 템포 턴을 살릴 수 있다면 과감하게 버리기를 사용하세요.',
    'This list wins by surviving efficiently, not by racing early damage.': '이 리스트는 초반 딜 레이스가 아니라 효율적으로 버티면서 이깁니다.',
    'Catalyst is best treated as a finisher, not a card you force on curve.': 'Catalyst는 억지로 곡선대로 내는 카드가 아니라 마무리 카드로 쓰는 편이 좋습니다.',
    'Keep deck size controlled so poison sources appear early.': '독 카드가 초반에 잘 잡히도록 덱 크기를 통제하세요.',
    'Hands with early Venerate and Glow are often keeps even if damage looks low.': '초반 Venerate와 Glow가 잡힌 손패는 딜이 낮아 보여도 유지할 가치가 높습니다.',
    'Do not spend stars inefficiently on hallway fights that are already won.': '이미 이긴 일반 전투에 별 자원을 비효율적으로 쓰지 마세요.',
    'Remove starter Strikes aggressively because they dilute your payoff turns.': '보상 턴 밀도를 해치므로 시작 Strike는 적극적으로 제거하는 편이 좋습니다.',
    'You do not need to rush payoffs; you need to survive cleanly until they are decisive.': '보상 카드를 서두를 필요는 없습니다. 결정적일 때까지 안정적으로 버티는 게 더 중요합니다.',
    'Debuff sequencing matters more than raw damage in elite combats.': '엘리트 전투에서는 단순 화력보다 디버프 순서가 더 중요합니다.',
    'This list improves sharply with card quality upgrades over raw duplication.': '무작정 복사하기보다 카드 질을 올릴수록 성능이 크게 좋아집니다.',
    'Protecting Osty is usually worth more than squeezing one extra weak attack into the turn.': '약한 공격 한 장을 더 넣는 것보다 Osty를 지키는 편이 대부분 더 가치 있습니다.',
    'Do not overload on narrow payoffs if your summon density is not high enough.': 'Summon 밀도가 부족한데도 좁은 보상 카드만 과하게 넣지 마세요.',
    'The deck feels best when every draw either summons, protects, or cashes out Osty damage.': '모든 드로우가 소환, 보호, 혹은 Osty 피해 전환 중 하나를 수행할 때 덱이 가장 잘 돌아갑니다.',
    'This list is slow by design; the goal is to make every enemy turn worse than yours.': '이 리스트는 의도적으로 느립니다. 목표는 적의 모든 턴을 내 턴보다 더 나쁘게 만드는 것입니다.',
    'Graveblast becomes premium once your discard contains the exact control piece you need.': '버린 카드 더미에 필요한 제어 카드가 들어가기 시작하면 Graveblast의 가치가 급상승합니다.',
    'Avoid unnecessary attacks that do not contribute to Doom pressure or survival.': 'Doom 압박이나 생존에 기여하지 않는 공격은 최대한 줄이세요.',
    'Dualcast is best spent on meaningful evokes, not just because it is available.': 'Dualcast는 그냥 낼 수 있어서 쓰는 카드가 아니라, 의미 있는 격발이 가능한 순간에 써야 합니다.',
    'Thunder becomes a premium pickup once evoke count is already dense.': '격발 빈도가 충분히 높아진 뒤에는 Thunder가 최상급 픽이 됩니다.',
    'Keep the list tight so Zap and Ball Lightning appear consistently.': 'Zap과 Ball Lightning이 꾸준히 잡히도록 덱을 얇게 유지하세요.',
    'This list is strongest when it stops adding mediocre attacks and fully commits to engine quality.': '애매한 공격 카드를 더 넣지 않고 엔진 품질에 집중할 때 가장 강해집니다.',
    'White Noise is more valuable when the power pool is already dense with hits.': '좋은 파워 풀이 충분히 형성된 뒤 White Noise의 가치가 더 올라갑니다.',
    'Focus decks want patient routing and card removal just as much as raw pickups.': 'Focus 덱은 카드 픽 못지않게 신중한 루트 선택과 카드 제거가 중요합니다.'
  },
  ja: {
    'Ironclad': 'アイアンクラッド',
    'Silent': 'サイレント',
    'Regent': 'リージェント',
    'Necrobinder': 'ネクロバインダー',
    'Defect': 'ディフェクト',
    'Attack': 'アタック',
    'Skill': 'スキル',
    'Power': 'パワー',
    'Strength burst': '筋力バースト',
    'HP conversion': 'HP変換',
    'Shiv tempo': 'シヴテンポ',
    'Poison control': '毒コントロール',
    'Resource ramp': 'リソース加速',
    'Control': 'コントロール',
    'Companion pressure': '相棒圧力',
    'Doom control': 'ドゥームコントロール',
    'Lightning tempo': 'ライトニングテンポ',
    'Scaling engine': 'スケーリングエンジン',
    'Low': '低',
    'Medium': '中',
    'High': '高',
    'Decklist Archive': 'デッキリストアーカイブ',
    'Strength Slam': 'ストレングス・スラム',
    'Blood Fortress': 'ブラッド・フォートレス',
    'Shiv Velocity': 'シヴ・ベロシティ',
    'Poison Control': 'ポイズン・コントロール',
    'Star Ramp': 'スター・ランプ',
    'Royal Control': 'ロイヤル・コントロール',
    'Osty Beatdown': 'オスティ・ビートダウン',
    'Doom Engine': 'ドゥーム・エンジン',
    'Lightning Cycle': 'ライトニング・サイクル',
    'Focus Scaling': 'フォーカス・スケーリング',
    'Scale Strength quickly, then cash out with efficient multi-hit and heavy finishers.': '筋力を素早く伸ばし、効率的な連撃と強力なフィニッシャーで締めるリストです。',
    'Convert health into oversized block turns and grind with compact premium attacks.': '体力を大型ブロックターンに変換し、高効率の攻撃で押し切るリストです。',
    'Flood the hand with cheap blades, cycle fast, and convert tempo into letant pressure.': '低コストのシヴを大量生成し、高速循環で継続的な圧力を作るリストです。',
    'Survive cleanly, stack poison, and let the fight collapse on its own clock.': '安定して耐えながら毒を積み、自然に戦闘を崩壊させるリストです。',
    'Accumulate stars early and convert them into oversized payoff turns before bosses stabilize.': '序盤に星を貯め、ボスが安定する前に大きな見返りターンへ変換するリストです。',
    'Use stars to stay ahead on defense and debuffs, then win through safe repeated payoff windows.': '防御とデバフで主導権を取り、安全な見返りターンを繰り返して勝つリストです。',
    'Keep Osty healthy, force efficient summon turns, and end fights with high-pressure companion damage.': 'Ostyの体力を守りつつ効率的な召喚ターンを作り、相棒の高圧力ダメージで締めるリストです。',
    'Stack Doom across the board and let delayed inevitability carry elite and boss encounters.': '盤面全体にDoomを積み、遅延型の確定火力でエリートやボス戦を押し切るリストです。',
    'Channel and evoke lightning repeatedly to keep damage output high without slowing the deck down.': 'ライトニングを何度も生成・解放し、デッキ速度を落とさず高火力を維持するリストです。',
    'Build a slower engine that wins through high-value orbs, powers, and safe repeated cycling.': '高価値のオーブとパワー、安定した循環で勝つ遅めのエンジン型リストです。',
    'Prioritize cheap Strength gain, survive with compact block tools, and end elite fights before the deck bloats.': '低コストの筋力獲得を優先し、小さな防御パッケージで耐えつつ、デッキが重くなる前にエリート戦を終わらせます。',
    'Exploit Ironclad sustain to buy tempo with self-damage cards, stabilize, then win through repeated efficient attacks.': 'アイアンクラッドの回復力を活かし、自傷カードでテンポを買い、安定後は高効率の攻撃を繰り返して勝ちます。',
    'Lean on card draw and cheap generation to keep output high every turn instead of waiting for one huge combo round.': '一度の大コンボを待つのではなく、ドローと低コスト生成で毎ターンの出力を高く保ちます。',
    'Focus on stability, weak application, and poison density so bosses die without overcommitting to attack cards.': '安定性、弱体付与、毒密度を重視し、攻撃カードに寄せすぎずにボスを倒します。',
    'Use low-cost star generation to set up one or two decisive payoff cycles instead of playing fair every turn.': '毎ターン正面から交換するより、低コストの星生成で決定的な見返りターンを一、二度作ることに集中します。',
    'Prefer consistency over burst by stabilizing every turn and cashing stars only when the board is fully under control.': '爆発力より安定性を優先し、毎ターン盤面を整え、完全に制御できた時だけ星を使います。',
    'Route the deck around reliable summon generation so Osty stays active and every payoff attack remains live.': '安定した召喚供給を軸に組み、Ostyを常に稼働させて見返り攻撃を腐らせない構成にします。',
    'Use defensive doom application to stabilize while your damage profile scales without repeated attack commitments.': '防御を兼ねたDoom付与で安定しつつ、毎ターン攻撃を重ねなくても火力が伸びる形にします。',
    'Prioritize cheap orb setup, repeated evoke triggers, and enough draw to keep the cycle continuous.': '低コストのオーブ展開、連続解放、十分なドローを優先し、循環が止まらないようにします。',
    'Accept slower starts, preserve HP with defensive orb turns, and win once Focus scaling pushes every orb above rate.': '遅い立ち上がりを受け入れ、防御的なオーブターンでHPを守り、Focus成長でオーブ効率が十分に上がったら勝ち切ります。',
    'Remove basic Strikes before trimming Anger; Anger scales far harder with Strength.': 'Angerを削る前に基本Strikeを除去してください。筋力が乗るとAngerの伸び幅ははるかに大きくなります。',
    'Use Bash on targets that must die immediately instead of spending it on weak hallway fights.': '弱い通常戦で使うより、即座に倒す必要がある相手にBashを使ってください。',
    'Do not over-defend. This list wins by shortening fights, not by blocking forever.': '過剰防御は不要です。このリストは延々と守るのではなく、戦闘を短くして勝ちます。',
    'Treat HP as a resource, but leave enough margin for elite burst windows.': 'HPは資源として扱いますが、エリートの強いターンを耐える余裕は残してください。',
    'Body Slam becomes worth duplicating only after your block package is consistent.': 'Body Slamを増やす価値が出るのは、防御パッケージが安定してからです。',
    'This list rewards card removal heavily because every weak draw hurts your conversion turns.': '弱い1枚のドローが変換ターンを崩すため、このリストはカード除去の恩恵が非常に大きいです。',
    'Do not keep too many reactive skills or the deck stops snowballing.': '反応型スキルを残しすぎると、デッキの伸びが止まります。',
    'Accuracy matters more than a second Finisher if your Shiv generation is already dense.': 'シヴ生成が十分なら、2枚目のFinisherよりAccuracyの方が重要です。',
    'Discard aggressively when it helps preserve cheap velocity turns.': '低コストの加速ターンを守れるなら、積極的に捨てて構いません。',
    'This list wins by surviving efficiently, not by racing early damage.': 'このリストは序盤火力レースではなく、効率よく耐えながら勝ちます。',
    'Catalyst is best treated as a finisher, not a card you force on curve.': 'Catalystは無理にカーブで打つカードではなく、フィニッシャーとして扱うべきです。',
    'Keep deck size controlled so poison sources appear early.': '毒カードが早く引けるようにデッキ枚数を抑えてください。',
    'Hands with early Venerate and Glow are often keeps even if damage looks low.': '序盤のVenerateとGlowがある手札は、火力が低く見えても保持する価値があります。',
    'Do not spend stars inefficiently on hallway fights that are already won.': 'すでに勝っている通常戦で星を無駄遣いしないでください。',
    'Remove starter Strikes aggressively because they dilute your payoff turns.': '見返りターンの密度を下げるため、初期Strikeは積極的に除去した方が良いです。',
    'You do not need to rush payoffs; you need to survive cleanly until they are decisive.': '見返りカードを急ぐ必要はありません。決定打になるまで丁寧に生き残ることが重要です。',
    'Debuff sequencing matters more than raw damage in elite combats.': 'エリート戦では単純な火力よりデバフの順序が重要です。',
    'This list improves sharply with card quality upgrades over raw duplication.': '単純な複製より、カード品質を上げる方が大きく強化されます。',
    'Protecting Osty is usually worth more than squeezing one extra weak attack into the turn.': '弱い攻撃を1枚追加するより、Ostyを守る方がほとんどの場合価値があります。',
    'Do not overload on narrow payoffs if your summon density is not high enough.': '召喚密度が足りないのに限定的な見返りカードを増やしすぎないでください。',
    'The deck feels best when every draw either summons, protects, or cashes out Osty damage.': 'すべてのドローが召喚、防御、またはOstyダメージの回収のどれかを担う時、このデッキは最も滑らかに回ります。',
    'This list is slow by design; the goal is to make every enemy turn worse than yours.': 'このリストは意図的に遅い構成で、相手のすべてのターンをこちらより悪いものにするのが目的です。',
    'Graveblast becomes premium once your discard contains the exact control piece you need.': '必要な制御札が捨て札に入るようになると、Graveblastは一気に最上位の価値になります。',
    'Avoid unnecessary attacks that do not contribute to Doom pressure or survival.': 'Doom圧や生存に寄与しない不要な攻撃は避けてください。',
    'Dualcast is best spent on meaningful evokes, not just because it is available.': 'Dualcastは使えるから使うのではなく、意味のある解放ができる時に使うべきです。',
    'Thunder becomes a premium pickup once evoke count is already dense.': '解放回数が十分に多くなれば、Thunderは最優先級のピックになります。',
    'Keep the list tight so Zap and Ball Lightning appear consistently.': 'ZapとBall Lightningが安定して来るように、デッキは引き締めてください。',
    'This list is strongest when it stops adding mediocre attacks and fully commits to engine quality.': '半端な攻撃を増やすのをやめ、エンジン品質に集中した時に最も強くなります。',
    'White Noise is more valuable when the power pool is already dense with hits.': '当たりのパワーが増えるほど、White Noiseの価値は上がります。',
    'Focus decks want patient routing and card removal just as much as raw pickups.': 'Focusデッキは新規取得だけでなく、慎重なルート選択とカード除去も同じくらい重要です。'
  },
  es: {
    'Ironclad': 'Ironclad',
    'Silent': 'Silent',
    'Regent': 'Regent',
    'Necrobinder': 'Necrobinder',
    'Defect': 'Defect',
    'Attack': 'Ataque',
    'Skill': 'Habilidad',
    'Power': 'Poder',
    'Strength burst': 'Ráfaga de Fuerza',
    'HP conversion': 'Conversión de vida',
    'Shiv tempo': 'Tempo de Shiv',
    'Poison control': 'Control de veneno',
    'Resource ramp': 'Aceleración de recursos',
    'Control': 'Control',
    'Companion pressure': 'Presión del compañero',
    'Doom control': 'Control de Doom',
    'Lightning tempo': 'Tempo de rayos',
    'Scaling engine': 'Motor de escalado',
    'Low': 'Baja',
    'Medium': 'Media',
    'High': 'Alta',
    'Decklist Archive': 'Archivo de Decklists',
    'Strength Slam': 'Golpe de Fuerza',
    'Blood Fortress': 'Fortaleza de Sangre',
    'Shiv Velocity': 'Velocidad de Shiv',
    'Poison Control': 'Control de Veneno',
    'Star Ramp': 'Rampa de Estrellas',
    'Royal Control': 'Control Real',
    'Osty Beatdown': 'Golpiza de Osty',
    'Doom Engine': 'Motor de Doom',
    'Lightning Cycle': 'Ciclo de Relámpagos',
    'Focus Scaling': 'Escalado de Focus',
    'Scale Strength quickly, then cash out with efficient multi-hit and heavy finishers.': 'Acelera Fuerza rápidamente y luego remata con golpes eficientes y finalizadores pesados.',
    'Convert health into oversized block turns and grind with compact premium attacks.': 'Convierte vida en turnos enormes de bloqueo y desgasta con ataques compactos de alta calidad.',
    'Flood the hand with cheap blades, cycle fast, and convert tempo into letant pressure.': 'Llena la mano de cuchillas baratas, cicla rápido y convierte el tempo en presión letante.',
    'Survive cleanly, stack poison, and let the fight collapse on its own clock.': 'Sobrevive con limpieza, acumula veneno y deja que el combate se derrumbe por su propio reloj.',
    'Accumulate stars early and convert them into oversized payoff turns before bosses stabilize.': 'Acumula estrellas temprano y conviértelas en turnos explosivos antes de que el jefe se estabilice.',
    'Use stars to stay ahead on defense and debuffs, then win through safe repeated payoff windows.': 'Usa estrellas para mantener ventaja en defensa y debilitaciones, y gana con ventanas repetidas y seguras de recompensa.',
    'Keep Osty healthy, force efficient summon turns, and end fights with high-pressure companion damage.': 'Mantén a Osty con vida, fuerza turnos eficientes de invocación y cierra peleas con daño letante del compañero.',
    'Stack Doom across the board and let delayed inevitability carry elite and boss encounters.': 'Acumula Doom en todo el tablero y deja que la inevitabilidad retrasada gane peleas contra élites y jefes.',
    'Channel and evoke lightning repeatedly to keep damage output high without slowing the deck down.': 'Canaliza y evoca rayos repetidamente para mantener alto el daño sin frenar el mazo.',
    'Build a slower engine that wins through high-value orbs, powers, and safe repeated cycling.': 'letruye un motor más lento que gana con orbes valiosos, poderes y ciclos seguros repetidos.',
    'Prioritize cheap Strength gain, survive with compact block tools, and end elite fights before the deck bloats.': 'Prioriza el aumento barato de Fuerza, sobrevive con herramientas compactas de bloqueo y termina las peleas de élite antes de que el mazo se vuelva pesado.',
    'Exploit Ironclad sustain to buy tempo with self-damage cards, stabilize, then win through repeated efficient attacks.': 'Aprovecha la recuperación de Ironclad para comprar tempo con cartas de auto-daño, estabilizar y luego ganar con ataques eficientes repetidos.',
    'Lean on card draw and cheap generation to keep output high every turn instead of waiting for one huge combo round.': 'Apóyate en robo y generación barata para mantener alta la producción cada turno en vez de esperar un único gran combo.',
    'Focus on stability, weak application, and poison density so bosses die without overcommitting to attack cards.': 'Enfócate en estabilidad, aplicación de Weak y densidad de veneno para matar jefes sin sobrecargar el mazo de ataques.',
    'Use low-cost star generation to set up one or two decisive payoff cycles instead of playing fair every turn.': 'Usa generación barata de estrellas para preparar uno o dos ciclos decisivos en lugar de intercambiar de forma justa cada turno.',
    'Prefer consistency over burst by stabilizing every turn and cashing stars only when the board is fully under control.': 'Prioriza consistencia sobre explosión, estabilizando cada turno y gastando estrellas solo cuando el tablero está totalmente controlado.',
    'Route the deck around reliable summon generation so Osty stays active and every payoff attack remains live.': 'letruye el mazo alrededor de invocaciones fiables para que Osty siga activo y todos los ataques de recompensa sigan siendo útiles.',
    'Use defensive doom application to stabilize while your damage profile scales without repeated attack commitments.': 'Usa aplicación defensiva de Doom para estabilizar mientras tu perfil de daño escala sin necesidad de atacar cada turno.',
    'Prioritize cheap orb setup, repeated evoke triggers, and enough draw to keep the cycle continuous.': 'Prioriza la preparación barata de orbes, evocaciones repetidas y suficiente robo para mantener el ciclo continuo.',
    'Accept slower starts, preserve HP with defensive orb turns, and win once Focus scaling pushes every orb above rate.': 'Acepta inicios lentos, conserva vida con turnos defensivos de orbes y gana cuando el escalado de Focus vuelve premium a cada orbe.',
    'Remove basic Strikes before trimming Anger; Anger scales far harder with Strength.': 'Quita primero los Strikes básicos antes de recortar Anger; Anger escala mucho mejor con Fuerza.',
    'Use Bash on targets that must die immediately instead of spending it on weak hallway fights.': 'Usa Bash en objetivos que deban morir ya, no en peleas fáciles del mapa.',
    'Do not over-defend. This list wins by shortening fights, not by blocking forever.': 'No te sobredefiendas. Esta lista gana acortando combates, no bloqueando para siempre.',
    'Treat HP as a resource, but leave enough margin for elite burst windows.': 'Trata la vida como un recurso, pero deja suficiente margen para los picos de daño de élites.',
    'Body Slam becomes worth duplicating only after your block package is consistent.': 'Body Slam solo vale la pena duplicarlo cuando tu paquete defensivo ya es consistente.',
    'This list rewards card removal heavily because every weak draw hurts your conversion turns.': 'Esta lista premia mucho la eliminación de cartas porque cada robo débil arruina tus turnos de conversión.',
    'Do not keep too many reactive skills or the deck stops snowballing.': 'No mantengas demasiadas habilidades reactivas o el mazo dejará de escalar.',
    'Accuracy matters more than a second Finisher if your Shiv generation is already dense.': 'Accuracy importa más que un segundo Finisher si tu generación de Shiv ya es alta.',
    'Discard aggressively when it helps preserve cheap velocity turns.': 'Descarta de forma agresiva cuando eso ayude a conservar turnos rápidos y baratos.',
    'This list wins by surviving efficiently, not by racing early damage.': 'Esta lista gana sobreviviendo con eficiencia, no compitiendo en daño temprano.',
    'Catalyst is best treated as a finisher, not a card you force on curve.': 'Catalyst funciona mejor como finalizador, no como carta que debas jugar siempre en curva.',
    'Keep deck size controlled so poison sources appear early.': 'Mantén el tamaño del mazo controlado para que las fuentes de veneno aparezcan pronto.',
    'Hands with early Venerate and Glow are often keeps even if damage looks low.': 'Las manos con Venerate y Glow temprano suelen ser buenas aunque parezca que hacen poco daño.',
    'Do not spend stars inefficiently on hallway fights that are already won.': 'No gastes estrellas de forma ineficiente en peleas de pasillo que ya están ganadas.',
    'Remove starter Strikes aggressively because they dilute your payoff turns.': 'Quita los Strikes iniciales con agresividad porque diluyen tus turnos de recompensa.',
    'You do not need to rush payoffs; you need to survive cleanly until they are decisive.': 'No necesitas apresurar tus recompensas; necesitas sobrevivir con limpieza hasta que sean decisivas.',
    'Debuff sequencing matters more than raw damage in elite combats.': 'En combates contra élites importa más el orden de los debuffs que el daño bruto.',
    'This list improves sharply with card quality upgrades over raw duplication.': 'Esta lista mejora mucho más con calidad de cartas que con duplicaciones sin criterio.',
    'Protecting Osty is usually worth more than squeezing one extra weak attack into the turn.': 'Proteger a Osty suele valer más que meter un ataque débil extra en el turno.',
    'Do not overload on narrow payoffs if your summon density is not high enough.': 'No te llenes de recompensas demasiado específicas si tu densidad de invocaciones todavía es baja.',
    'The deck feels best when every draw either summons, protects, or cashes out Osty damage.': 'El mazo funciona mejor cuando cada robo invoca, protege o convierte el daño de Osty en valor.',
    'This list is slow by design; the goal is to make every enemy turn worse than yours.': 'Esta lista es lenta por diseño; la meta es hacer que cada turno del enemigo sea peor que el tuyo.',
    'Graveblast becomes premium once your discard contains the exact control piece you need.': 'Graveblast se vuelve premium cuando tu descarte ya contiene la pieza exacta de control que necesitas.',
    'Avoid unnecessary attacks that do not contribute to Doom pressure or survival.': 'Evita ataques innecesarios que no aporten presión de Doom ni supervivencia.',
    'Dualcast is best spent on meaningful evokes, not just because it is available.': 'Dualcast se aprovecha mejor en evocaciones realmente valiosas, no solo porque esté disponible.',
    'Thunder becomes a premium pickup once evoke count is already dense.': 'Thunder se vuelve una elección premium cuando ya tienes muchas evocaciones.',
    'Keep the list tight so Zap and Ball Lightning appear consistently.': 'Mantén la lista ajustada para que Zap y Ball Lightning aparezcan de forma consistente.',
    'This list is strongest when it stops adding mediocre attacks and fully commits to engine quality.': 'Esta lista es más fuerte cuando deja de añadir ataques mediocres y se compromete del todo con la calidad del motor.',
    'White Noise is more valuable when the power pool is already dense with hits.': 'White Noise vale más cuando tu conjunto de poderes ya tiene muchas buenas opciones.',
    'Focus decks want patient routing and card removal just as much as raw pickups.': 'Los mazos de Focus necesitan tanto rutas pacientes y eliminación de cartas como nuevas adquisiciones.'
  }
};

let characterData = [
  {
    id: 'ironclad',
    name: 'Ironclad',
    title: 'Front-loaded damage and HP conversion decks that either snowball Strength or turn self-damage into massive defensive tempo.',
    hp: '80 HP',
    relic: 'Burning Blood',
    identity: 'Strength, self-damage, Exhaust',
    accent: '#d86a4c',
    panel: 'linear-gradient(135deg, rgba(216,106,76,0.95), rgba(76,20,18,0.92))',
    decks: [
      {
        id: 'strength-slam',
        name: 'Strength Slam',
        subtitle: 'Scale Strength quickly, then cash out with efficient multi-hit and heavy finishers.',
        plan: 'Prioritize cheap Strength gain, survive with compact block tools, and end elite fights before the deck bloats.',
        metrics: [
          { label: 'Archetype', value: 'Strength burst' },
          { label: 'Target Size', value: '14 cards' },
          { label: 'Avg Cost', value: '1.1' },
          { label: 'Difficulty', value: 'Low' }
        ],
        core: [
          { name: 'Bash', cost: '2', count: '1x', type: 'Attack', text: 'Applies Vulnerable to set up all follow-up damage.' },
          { name: 'Anger', cost: '0', count: '2x', type: 'Attack', text: 'Free damage that multiplies pressure once Strength is online.' },
          { name: 'Armaments', cost: '1', count: '1x', type: 'Skill', text: 'Smooth early turns and upgrades your premium hits mid-combat.' },
          { name: 'Inflame', cost: '1', count: '2x', type: 'Power', text: 'Primary scaling anchor for every damage line.' },
          { name: 'Heavy Blade', cost: '2', count: '1x', type: 'Attack', text: 'Main finisher once Strength stacks begin to matter.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Keep only enough block to survive elite turns.' },
          { name: 'Blood Wall', cost: '1', count: '1x', type: 'Skill', text: 'Efficient defensive spike that fits the HP-trading plan.' },
          { name: 'Shrug It Off', cost: '1', count: '1x', type: 'Skill', text: 'Compact block plus draw to find your Strength cards.' },
          { name: 'Pommel Strike', cost: '1', count: '1x', type: 'Attack', text: 'Bridge card that keeps damage flowing while cycling.' }
        ],
        notes: [
          'Remove basic Strikes before trimming Anger; Anger scales far harder with Strength.',
          'Use Bash on targets that must die immediately instead of spending it on weak hallway fights.',
          'Do not over-defend. This list wins by shortening fights, not by blocking forever.'
        ]
      },
      {
        id: 'blood-fortress',
        name: 'Blood Fortress',
        subtitle: 'Convert health into oversized block turns and grind with compact premium attacks.',
        plan: 'Exploit Ironclad sustain to buy tempo with self-damage cards, stabilize, then win through repeated efficient attacks.',
        metrics: [
          { label: 'Archetype', value: 'HP conversion' },
          { label: 'Target Size', value: '15 cards' },
          { label: 'Avg Cost', value: '1.0' },
          { label: 'Difficulty', value: 'Medium' }
        ],
        core: [
          { name: 'Blood Wall', cost: '1', count: '2x', type: 'Skill', text: 'The deck exists to abuse this efficiency.' },
          { name: 'Bash', cost: '2', count: '1x', type: 'Attack', text: 'Vulnerable makes your compact finishers matter.' },
          { name: 'Armaments', cost: '1', count: '1x', type: 'Skill', text: 'Upgrades key defense cards and keeps scaling clean.' },
          { name: 'Body Slam', cost: '1', count: '2x', type: 'Attack', text: 'Turns oversized block turns directly into lethal damage.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Retained only until premium block density is online.' },
          { name: 'True Grit', cost: '1', count: '1x', type: 'Skill', text: 'Lets you trim junk during combat while blocking.' },
          { name: 'Shrug It Off', cost: '1', count: '2x', type: 'Skill', text: 'Keeps block and card flow stable.' },
          { name: 'Second Wind', cost: '1', count: '1x', type: 'Skill', text: 'Punishes dead hands and spikes defense when needed.' }
        ],
        notes: [
          'Treat HP as a resource, but leave enough margin for elite burst windows.',
          'Body Slam becomes worth duplicating only after your block package is consistent.',
          'This list rewards card removal heavily because every weak draw hurts your conversion turns.'
        ]
      }
    ]
  },
  {
    id: 'silent',
    name: 'Silent',
    title: 'Flexible tempo decks built on discard smoothing, Shivs, and poison-based inevitability.',
    hp: '70 HP',
    relic: 'Ring of the Snake',
    identity: 'Discard, Shiv, Poison',
    accent: '#6ec17e',
    panel: 'linear-gradient(135deg, rgba(54,137,86,0.95), rgba(10,50,35,0.92))',
    decks: [
      {
        id: 'shiv-velocity',
        name: 'Shiv Velocity',
        subtitle: 'Flood the hand with cheap blades, cycle fast, and convert tempo into letant pressure.',
        plan: 'Lean on card draw and cheap generation to keep output high every turn instead of waiting for one huge combo round.',
        metrics: [
          { label: 'Archetype', value: 'Shiv tempo' },
          { label: 'Target Size', value: '15 cards' },
          { label: 'Avg Cost', value: '0.8' },
          { label: 'Difficulty', value: 'Medium' }
        ],
        core: [
          { name: 'Blade Dance', cost: '1', count: '2x', type: 'Skill', text: 'Primary blade generation and payoff enabler.' },
          { name: 'Cloak and Dagger', cost: '1', count: '2x', type: 'Skill', text: 'Block plus Shiv keeps every turn efficient.' },
          { name: 'Neutralize', cost: '0', count: '1x', type: 'Attack', text: 'Cheap control that helps protect aggressive hands.' },
          { name: 'Accuracy', cost: '1', count: '1x', type: 'Power', text: 'Turns your generated blades into real scaling damage.' }
        ],
        support: [
          { name: 'Acrobatics', cost: '1', count: '2x', type: 'Skill', text: 'Finds generators and smooths dead hands.' },
          { name: 'Backflip', cost: '1', count: '1x', type: 'Skill', text: 'Adds draw without dropping defense.' },
          { name: 'Survivor', cost: '1', count: '1x', type: 'Skill', text: 'Reliable early defense plus discard outlet.' },
          { name: 'Finisher', cost: '1', count: '1x', type: 'Attack', text: 'Converts wide turns into boss damage.' }
        ],
        notes: [
          'Do not keep too many reactive skills or the deck stops snowballing.',
          'Accuracy matters more than a second Finisher if your Shiv generation is already dense.',
          'Discard aggressively when it helps preserve cheap velocity turns.'
        ]
      },
      {
        id: 'poison-control',
        name: 'Poison Control',
        subtitle: 'Survive cleanly, stack poison, and let the fight collapse on its own clock.',
        plan: 'Focus on stability, weak application, and poison density so bosses die without overcommitting to attack cards.',
        metrics: [
          { label: 'Archetype', value: 'Poison control' },
          { label: 'Target Size', value: '16 cards' },
          { label: 'Avg Cost', value: '1.0' },
          { label: 'Difficulty', value: 'Low' }
        ],
        core: [
          { name: 'Neutralize', cost: '0', count: '1x', type: 'Attack', text: 'Cheap Weak buys time for poison ticks.' },
          { name: 'Survivor', cost: '1', count: '1x', type: 'Skill', text: 'Stable block anchor for long fights.' },
          { name: 'Deadly Poison', cost: '1', count: '2x', type: 'Skill', text: 'Main poison source.' },
          { name: 'Catalyst', cost: '1', count: '1x', type: 'Skill', text: 'Closes bosses once poison count is established.' }
        ],
        support: [
          { name: 'Backflip', cost: '1', count: '2x', type: 'Skill', text: 'Defense plus draw makes setup cleaner.' },
          { name: 'Acrobatics', cost: '1', count: '1x', type: 'Skill', text: 'Finds poison payoffs on demand.' },
          { name: 'Cloak and Dagger', cost: '1', count: '1x', type: 'Skill', text: 'Bridges aggressive hallway fights.' },
          { name: 'Noxious Fumes', cost: '1', count: '1x', type: 'Power', text: 'Passive scaling for long elite and boss combats.' }
        ],
        notes: [
          'This list wins by surviving efficiently, not by racing early damage.',
          'Catalyst is best treated as a finisher, not a card you force on curve.',
          'Keep deck size controlled so poison sources appear early.'
        ]
      }
    ]
  },
  {
    id: 'regent',
    name: 'Regent',
    title: 'Star-based scaling decks that either tempo into sweeping board control or build explosive late turns.',
    hp: '75 HP',
    relic: 'Divine Right',
    identity: 'Stars, control, payoff turns',
    accent: '#ffbf49',
    panel: 'linear-gradient(135deg, rgba(255,191,73,0.95), rgba(97,54,11,0.92))',
    decks: [
      {
        id: 'star-ramp',
        name: 'Star Ramp',
        subtitle: 'Accumulate stars early and convert them into oversized payoff turns before bosses stabilize.',
        plan: 'Use low-cost star generation to set up one or two decisive payoff cycles instead of playing fair every turn.',
        metrics: [
          { label: 'Archetype', value: 'Resource ramp' },
          { label: 'Target Size', value: '14 cards' },
          { label: 'Avg Cost', value: '1.0' },
          { label: 'Difficulty', value: 'Medium' }
        ],
        core: [
          { name: 'Venerate', cost: '1', count: '2x', type: 'Skill', text: 'Main star gain engine.' },
          { name: 'Glow', cost: '0', count: '2x', type: 'Skill', text: 'Cheap setup that keeps hands moving.' },
          { name: 'Gather Light', cost: '1', count: '2x', type: 'Skill', text: 'Block plus star gain fixes tempo loss.' },
          { name: 'Astral Pulse', cost: '2', count: '1x', type: 'Attack', text: 'Wide payoff for built star turns.' }
        ],
        support: [
          { name: 'Falling Star', cost: '1', count: '1x', type: 'Attack', text: 'Universal setup through Weak and Vulnerable.' },
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Retained until premium defensive cards arrive.' },
          { name: 'Strike', cost: '1', count: '2x', type: 'Attack', text: 'Temporary damage floor while assembling payoffs.' },
          { name: 'Nova Burst', cost: '2', count: '1x', type: 'Attack', text: 'Single-target closer once stars are banked.' }
        ],
        notes: [
          'Hands with early Venerate and Glow are often keeps even if damage looks low.',
          'Do not spend stars inefficiently on hallway fights that are already won.',
          'Remove starter Strikes aggressively because they dilute your payoff turns.'
        ]
      },
      {
        id: 'royal-control',
        name: 'Royal Control',
        subtitle: 'Use stars to stay ahead on defense and debuffs, then win through safe repeated payoff windows.',
        plan: 'Prefer consistency over burst by stabilizing every turn and cashing stars only when the board is fully under control.',
        metrics: [
          { label: 'Archetype', value: 'Control' },
          { label: 'Target Size', value: '16 cards' },
          { label: 'Avg Cost', value: '1.1' },
          { label: 'Difficulty', value: 'High' }
        ],
        core: [
          { name: 'Falling Star', cost: '1', count: '1x', type: 'Attack', text: 'Debuff glue for every difficult target.' },
          { name: 'Gather Light', cost: '1', count: '2x', type: 'Skill', text: 'Defensive tempo plus star progression.' },
          { name: 'Venerate', cost: '1', count: '1x', type: 'Skill', text: 'Keeps the resource engine online.' },
          { name: 'Astral Pulse', cost: '2', count: '1x', type: 'Attack', text: 'Main board reset tool.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Stable fallback block.' },
          { name: 'Glow', cost: '0', count: '1x', type: 'Skill', text: 'Low-risk card flow.' },
          { name: 'Sanctum', cost: '1', count: '1x', type: 'Power', text: 'Long-fight durability and scaling.' },
          { name: 'Stargaze', cost: '1', count: '1x', type: 'Skill', text: 'Deck fixing for slow matchups.' }
        ],
        notes: [
          'You do not need to rush payoffs; you need to survive cleanly until they are decisive.',
          'Debuff sequencing matters more than raw damage in elite combats.',
          'This list improves sharply with card quality upgrades over raw duplication.'
        ]
      }
    ]
  },
  {
    id: 'necrobinder',
    name: 'Necrobinder',
    title: 'Resource-routing decks that turn Osty, Summon, and Doom into either board control or burst finishing patterns.',
    hp: '66 HP',
    relic: 'Bound Phylactery',
    identity: 'Summon, Doom, Osty, souls',
    accent: '#b58cff',
    panel: 'linear-gradient(135deg, rgba(135,104,205,0.95), rgba(39,16,72,0.94))',
    decks: [
      {
        id: 'osty-beatdown',
        name: 'Osty Beatdown',
        subtitle: 'Keep Osty healthy, force efficient summon turns, and end fights with high-pressure companion damage.',
        plan: 'Route the deck around reliable summon generation so Osty stays active and every payoff attack remains live.',
        metrics: [
          { label: 'Archetype', value: 'Companion pressure' },
          { label: 'Target Size', value: '15 cards' },
          { label: 'Avg Cost', value: '0.9' },
          { label: 'Difficulty', value: 'Medium' }
        ],
        core: [
          { name: 'Bodyguard', cost: '1', count: '2x', type: 'Skill', text: 'Efficient summon foundation.' },
          { name: 'Unleash', cost: '1', count: '2x', type: 'Attack', text: 'Primary payoff for preserving Osty health.' },
          { name: 'Poke', cost: '0', count: '2x', type: 'Attack', text: 'Cheap activation that keeps pressure letant.' },
          { name: 'Invoke', cost: '1', count: '1x', type: 'Skill', text: 'Sets up future burst turns cleanly.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Keeps bad hands from collapsing.' },
          { name: 'Graveblast', cost: '1', count: '1x', type: 'Attack', text: 'Rebuys key cards during extended fights.' },
          { name: 'Negative Pulse', cost: '1', count: '1x', type: 'Skill', text: 'Buys time against multi-enemy boards.' },
          { name: 'Strike', cost: '1', count: '1x', type: 'Attack', text: 'Temporary filler until stronger payoffs replace it.' }
        ],
        notes: [
          'Protecting Osty is usually worth more than squeezing one extra weak attack into the turn.',
          'Do not overload on narrow payoffs if your summon density is not high enough.',
          'The deck feels best when every draw either summons, protects, or cashes out Osty damage.'
        ]
      },
      {
        id: 'doom-engine',
        name: 'Doom Engine',
        subtitle: 'Stack Doom across the board and let delayed inevitability carry elite and boss encounters.',
        plan: 'Use defensive doom application to stabilize while your damage profile scales without repeated attack commitments.',
        metrics: [
          { label: 'Archetype', value: 'Doom control' },
          { label: 'Target Size', value: '16 cards' },
          { label: 'Avg Cost', value: '1.0' },
          { label: 'Difficulty', value: 'High' }
        ],
        core: [
          { name: 'Negative Pulse', cost: '1', count: '2x', type: 'Skill', text: 'Main AOE doom application and block card.' },
          { name: 'Invoke', cost: '1', count: '1x', type: 'Skill', text: 'Supports resource-heavy control turns.' },
          { name: 'Bodyguard', cost: '1', count: '1x', type: 'Skill', text: 'Maintains summon baseline for stability.' },
          { name: 'Graveblast', cost: '1', count: '2x', type: 'Attack', text: 'Loops premium control cards.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Needed until doom density fully carries combat.' },
          { name: 'Poke', cost: '0', count: '1x', type: 'Attack', text: 'Cheap interaction for awkward turns.' },
          { name: 'Soul Ward', cost: '1', count: '1x', type: 'Skill', text: 'Adds extra insurance in elite fights.' },
          { name: 'Hex Feast', cost: '2', count: '1x', type: 'Attack', text: 'Converts built doom states into a hard close.' }
        ],
        notes: [
          'This list is slow by design; the goal is to make every enemy turn worse than yours.',
          'Graveblast becomes premium once your discard contains the exact control piece you need.',
          'Avoid unnecessary attacks that do not contribute to Doom pressure or survival.'
        ]
      }
    ]
  },
  {
    id: 'defect',
    name: 'Defect',
    title: 'Orb-centric lists that either compress lightning burst or generate scaling through long-form focus engines.',
    hp: '70 HP',
    relic: 'Cracked Core',
    identity: 'Orbs, Focus, Evoke',
    accent: '#66baff',
    panel: 'linear-gradient(135deg, rgba(93,165,255,0.95), rgba(13,42,94,0.94))',
    decks: [
      {
        id: 'lightning-cycle',
        name: 'Lightning Cycle',
        subtitle: 'Channel and evoke lightning repeatedly to keep damage output high without slowing the deck down.',
        plan: 'Prioritize cheap orb setup, repeated evoke triggers, and enough draw to keep the cycle continuous.',
        metrics: [
          { label: 'Archetype', value: 'Lightning tempo' },
          { label: 'Target Size', value: '15 cards' },
          { label: 'Avg Cost', value: '1.0' },
          { label: 'Difficulty', value: 'Low' }
        ],
        core: [
          { name: 'Zap', cost: '1', count: '2x', type: 'Skill', text: 'Main reliable orb setup.' },
          { name: 'Dualcast', cost: '1', count: '2x', type: 'Skill', text: 'Best early payoff for every lightning line.' },
          { name: 'Thunder', cost: '1', count: '1x', type: 'Power', text: 'Turns evoke chains into real board damage.' },
          { name: 'Ball Lightning', cost: '1', count: '2x', type: 'Attack', text: 'Tempo attack that keeps the orb engine advancing.' }
        ],
        support: [
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Hold only enough block for rough turns.' },
          { name: 'White Noise', cost: '1', count: '1x', type: 'Skill', text: 'High-value random power access.' },
          { name: 'Coolheaded', cost: '1', count: '1x', type: 'Skill', text: 'Supports draw and orb rotation.' },
          { name: 'Strike', cost: '1', count: '1x', type: 'Attack', text: 'Temporary filler until more orb cards appear.' }
        ],
        notes: [
          'Dualcast is best spent on meaningful evokes, not just because it is available.',
          'Thunder becomes a premium pickup once evoke count is already dense.',
          'Keep the list tight so Zap and Ball Lightning appear consistently.'
        ]
      },
      {
        id: 'focus-scaling',
        name: 'Focus Scaling',
        subtitle: 'Build a slower engine that wins through high-value orbs, powers, and safe repeated cycling.',
        plan: 'Accept slower starts, preserve HP with defensive orb turns, and win once Focus scaling pushes every orb above rate.',
        metrics: [
          { label: 'Archetype', value: 'Scaling engine' },
          { label: 'Target Size', value: '16 cards' },
          { label: 'Avg Cost', value: '1.1' },
          { label: 'Difficulty', value: 'Medium' }
        ],
        core: [
          { name: 'Zap', cost: '1', count: '1x', type: 'Skill', text: 'Reliable early orb presence.' },
          { name: 'White Noise', cost: '1', count: '2x', type: 'Skill', text: 'Finds powers that accelerate scaling.' },
          { name: 'Thunder', cost: '1', count: '1x', type: 'Power', text: 'Adds lightning payoff density.' },
          { name: 'Defragment', cost: '1', count: '2x', type: 'Power', text: 'Main Focus growth source.' }
        ],
        support: [
          { name: 'Dualcast', cost: '1', count: '1x', type: 'Skill', text: 'Still useful after Focus is established.' },
          { name: 'Defend', cost: '1', count: '2x', type: 'Skill', text: 'Carry block until powers take over.' },
          { name: 'Coolheaded', cost: '1', count: '2x', type: 'Skill', text: 'Draw plus frost stabilizes setup turns.' },
          { name: 'Adaptive Strike', cost: '2', count: '1x', type: 'Attack', text: 'Single-slot finisher for longer boss fights.' }
        ],
        notes: [
          'This list is strongest when it stops adding mediocre attacks and fully commits to engine quality.',
          'White Noise is more valuable when the power pool is already dense with hits.',
          'Focus decks want patient routing and card removal just as much as raw pickups.'
        ]
      }
    ]
  }
];

let nav = document.getElementById('character-nav');
let summaryName = document.getElementById('summary-name');
let summaryDescription = document.getElementById('summary-description');
let summaryStats = document.getElementById('summary-stats');
let deckSectionTitle = document.getElementById('deck-section-title');
let deckSectionNote = document.getElementById('deck-section-note');
let deckSwitcher = document.getElementById('deck-switcher');
let deckName = document.getElementById('deck-name');
let deckSubtitle = document.getElementById('deck-subtitle');
let deckPlan = document.getElementById('deck-plan');
let deckMetrics = document.getElementById('deck-metrics');
let coreCards = document.getElementById('core-cards');
let supportCards = document.getElementById('support-cards');
let notesList = document.getElementById('notes-list');
let cardRowTemplate = document.getElementById('card-row-template');
let languageSelect = document.getElementById('language-select');
let themeSelect = document.getElementById('theme-select');
let themeLabel = document.getElementById('theme-label');
let themeOptionDark = document.getElementById('theme-option-dark');
let themeOptionLight = document.getElementById('theme-option-light');

function detectPreferredLanguage() {
  let candidates = [];

  if (Array.isArray(navigator.languages)) {
    candidates.push(...navigator.languages);
  }

  if (navigator.language) {
    candidates.push(navigator.language);
  }

  for (let candidate of candidates) {
    let normalized = String(candidate).toLowerCase().split('-')[0];
    if (languages.includes(normalized)) {
      return normalized;
    }
  }

  return 'en';
}

function detectPreferredTheme() {
  let storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
}

let activeCharacter = characterData[0].id;
let activeDeck = characterData[0].decks[0].id;
let currentLanguage = detectPreferredLanguage();
let currentTheme = detectPreferredTheme();

function tr(text) {
  if (currentLanguage === 'en') {
    return text;
  }

  return translations[currentLanguage]?.[text] || text;
}

function ui() {
  return uiText[currentLanguage] || uiText.en;
}

function formatDeckCount(count) {
  let currentUi = ui();
  if (currentLanguage === 'ko') {
    return `${count}${currentUi.suffixes.lists}`;
  }
  if (currentLanguage === 'ja') {
    return `${count}${currentUi.suffixes.lists}`;
  }
  if (currentLanguage === 'es' && currentUi.suffixes.lists === '') {
    return String(count);
  }
  return `${count} ${currentUi.suffixes.lists}`.trim();
}

function formatCost(cost) {
  let currentUi = ui();
  if (currentLanguage === 'ko' || currentLanguage === 'ja') {
    return `${cost}${currentUi.suffixes.cost}`;
  }
  return `${cost} ${currentUi.suffixes.cost}`;
}

function applyStaticText() {
  let currentUi = ui();
  document.documentElement.lang = currentLanguage;
  document.getElementById('hero-title').textContent = tr('Decklist Archive');
  document.getElementById('hero-text').textContent = currentUi.heroText;
  document.getElementById('hero-action-primary').textContent = currentUi.heroActionPrimary;
  document.getElementById('hero-action-secondary').textContent = currentUi.heroActionSecondary;
  document.getElementById('panel-label').textContent = currentUi.panelLabel;
  document.getElementById('panel-note').textContent = currentUi.panelNote;
  document.getElementById('summary-kicker').textContent = currentUi.summaryKicker;
  document.getElementById('decklist-kicker').textContent = currentUi.decklistKicker;
  document.getElementById('deck-plan-kicker').textContent = currentUi.deckPlanKicker;
  document.getElementById('core-kicker').textContent = currentUi.coreKicker;
  document.getElementById('core-heading').textContent = currentUi.coreHeading;
  document.getElementById('support-kicker').textContent = currentUi.supportKicker;
  document.getElementById('support-heading').textContent = currentUi.supportHeading;
  document.getElementById('notes-kicker').textContent = currentUi.notesKicker;
  document.getElementById('notes-heading').textContent = currentUi.notesHeading;
  document.getElementById('language-label').textContent = currentUi.languageLabel;
  themeLabel.textContent = currentUi.themeLabel;
  themeOptionDark.textContent = currentUi.themeOptions.dark;
  themeOptionLight.textContent = currentUi.themeOptions.light;

  let points = document.getElementById('hero-points');
  points.innerHTML = '';
  currentUi.heroPoints.forEach((point) => {
    let item = document.createElement('li');
    item.textContent = point;
    points.appendChild(item);
  });
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;
  themeSelect.value = currentTheme;
}

function getActiveCharacter() {
  return characterData.find((character) => character.id === activeCharacter) || characterData[0];
}

function getActiveDeck(character) {
  return character.decks.find((deck) => deck.id === activeDeck) || character.decks[0];
}

function renderCharacterNav() {
  nav.innerHTML = '';

  characterData.forEach((character) => {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'character-pill';
    button.dataset.character = character.id;
    button.textContent = tr(character.name);
    button.style.setProperty('--pill-accent', character.accent);
    button.addEventListener('click', () => {
      activeCharacter = character.id;
      activeDeck = character.decks[0].id;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    nav.appendChild(button);
  });
}

function renderSummary(character) {
  let currentUi = ui();
  summaryName.textContent = tr(character.name);
  summaryDescription.textContent = tr(character.title);
  summaryStats.innerHTML = [
    { label: currentUi.labels.health, value: character.hp },
    { label: currentUi.labels.relic, value: tr(character.relic) },
    { label: currentUi.labels.identity, value: tr(character.identity) },
    { label: currentUi.labels.deckCount, value: formatDeckCount(character.decks.length) }
  ].map((item) => `
    <article class="stat-card">
      <p class="stat-label">${item.label}</p>
      <p class="stat-value">${item.value}</p>
    </article>
  `).join('');

  document.documentElement.style.setProperty('--accent-color', character.accent);
  document.documentElement.style.setProperty('--accent-panel', character.panel);
}

function renderDeckSwitcher(character, deck) {
  let currentUi = ui();
  deckSwitcher.innerHTML = '';
  deckSectionTitle.textContent = `${tr(character.name)} ${currentUi.suffixes.decklists}`.trim();
  deckSectionNote.textContent = `${formatDeckCount(character.decks.length)} ${currentUi.suffixes.curated}`;

  character.decks.forEach((entry) => {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'deck-pill';
    button.dataset.deck = entry.id;
    button.textContent = tr(entry.name);
    button.addEventListener('click', () => {
      activeDeck = entry.id;
      render();
    });
    button.classList.toggle('is-active', entry.id === deck.id);
    button.setAttribute('aria-pressed', String(entry.id === deck.id));
    deckSwitcher.appendChild(button);
  });
}

function renderMetrics(deck) {
  let currentUi = ui();
  let metricMap = {
    'Archetype': currentUi.labels.archetype,
    'Target Size': currentUi.labels.targetSize,
    'Avg Cost': currentUi.labels.avgCost,
    'Difficulty': currentUi.labels.difficulty
  };

  deckMetrics.innerHTML = deck.metrics.map((metric) => `
    <article class="metric-card">
      <p class="stat-label">${metricMap[metric.label] || metric.label}</p>
      <p class="metric-value">${tr(metric.value)}</p>
    </article>
  `).join('');
}

function createCardRow(card) {
  let node = cardRowTemplate.content.cloneNode(true);
  node.querySelector('.card-row-name').textContent = card.name;
  node.querySelector('.card-row-text').textContent = tr(card.text);
  node.querySelector('.card-cost').textContent = formatCost(card.cost);
  node.querySelector('.card-count').textContent = card.count;
  node.querySelector('.card-type').textContent = tr(card.type);
  return node;
}

function renderCardList(container, cards) {
  container.innerHTML = '';
  cards.forEach((card) => {
    container.appendChild(createCardRow(card));
  });
}

function renderNotes(deck) {
  notesList.innerHTML = '';
  deck.notes.forEach((note) => {
    let item = document.createElement('li');
    item.textContent = tr(note);
    notesList.appendChild(item);
  });
}

function syncCharacterButtons() {
  document.querySelectorAll('.character-pill').forEach((button) => {
    let isActive = button.dataset.character === activeCharacter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderDeckOverview(deck) {
  deckName.textContent = tr(deck.name);
  deckSubtitle.textContent = tr(deck.subtitle);
  deckPlan.textContent = tr(deck.plan);
  renderMetrics(deck);
  renderCardList(coreCards, deck.core);
  renderCardList(supportCards, deck.support);
  renderNotes(deck);
}

function bindLanguageSwitcher() {
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener('change', (event) => {
    currentLanguage = languages.includes(event.target.value) ? event.target.value : 'en';
    render();
  });
}

function bindThemeSwitcher() {
  applyTheme();
  themeSelect.addEventListener('change', (event) => {
    currentTheme = event.target.value === 'light' ? 'light' : 'dark';
    window.localStorage.setItem('theme', currentTheme);
    applyTheme();
  });
}

function render() {
  applyTheme();
  applyStaticText();
  renderCharacterNav();
  let character = getActiveCharacter();
  let deck = getActiveDeck(character);
  renderSummary(character);
  renderDeckSwitcher(character, deck);
  renderDeckOverview(deck);
  syncCharacterButtons();
  languageSelect.value = currentLanguage;
  themeSelect.value = currentTheme;
}

bindLanguageSwitcher();
bindThemeSwitcher();
render();
