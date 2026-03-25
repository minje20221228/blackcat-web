const characterData = [
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
        subtitle: 'Flood the hand with cheap blades, cycle fast, and convert tempo into constant pressure.',
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
          { name: 'Poke', cost: '0', count: '2x', type: 'Attack', text: 'Cheap activation that keeps pressure constant.' },
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

const nav = document.getElementById('character-nav');
const summaryName = document.getElementById('summary-name');
const summaryDescription = document.getElementById('summary-description');
const summaryStats = document.getElementById('summary-stats');
const deckSectionTitle = document.getElementById('deck-section-title');
const deckSectionNote = document.getElementById('deck-section-note');
const deckSwitcher = document.getElementById('deck-switcher');
const deckName = document.getElementById('deck-name');
const deckSubtitle = document.getElementById('deck-subtitle');
const deckPlan = document.getElementById('deck-plan');
const deckMetrics = document.getElementById('deck-metrics');
const coreCards = document.getElementById('core-cards');
const supportCards = document.getElementById('support-cards');
const notesList = document.getElementById('notes-list');
const cardRowTemplate = document.getElementById('card-row-template');

let activeCharacter = characterData[0].id;
let activeDeck = characterData[0].decks[0].id;

function getActiveCharacter() {
  return characterData.find((character) => character.id === activeCharacter) || characterData[0];
}

function getActiveDeck(character) {
  return character.decks.find((deck) => deck.id === activeDeck) || character.decks[0];
}

function renderCharacterNav() {
  nav.innerHTML = '';

  characterData.forEach((character) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'character-pill';
    button.dataset.character = character.id;
    button.textContent = character.name;
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
  summaryName.textContent = character.name;
  summaryDescription.textContent = character.title;
  summaryStats.innerHTML = [
    { label: 'Health', value: character.hp },
    { label: 'Relic', value: character.relic },
    { label: 'Identity', value: character.identity },
    { label: 'Deck Count', value: `${character.decks.length} lists` }
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
  deckSwitcher.innerHTML = '';
  deckSectionTitle.textContent = `${character.name} decklists`;
  deckSectionNote.textContent = `${character.decks.length} curated archetypes for route planning and pickups.`;

  character.decks.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'deck-pill';
    button.dataset.deck = entry.id;
    button.textContent = entry.name;
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
  deckMetrics.innerHTML = deck.metrics.map((metric) => `
    <article class="metric-card">
      <p class="stat-label">${metric.label}</p>
      <p class="metric-value">${metric.value}</p>
    </article>
  `).join('');
}

function createCardRow(card) {
  const node = cardRowTemplate.content.cloneNode(true);
  node.querySelector('.card-row-name').textContent = card.name;
  node.querySelector('.card-row-text').textContent = card.text;
  node.querySelector('.card-cost').textContent = `${card.cost} cost`;
  node.querySelector('.card-count').textContent = card.count;
  node.querySelector('.card-type').textContent = card.type;
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
    const item = document.createElement('li');
    item.textContent = note;
    notesList.appendChild(item);
  });
}

function syncCharacterButtons() {
  document.querySelectorAll('.character-pill').forEach((button) => {
    const isActive = button.dataset.character === activeCharacter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderDeckOverview(deck) {
  deckName.textContent = deck.name;
  deckSubtitle.textContent = deck.subtitle;
  deckPlan.textContent = deck.plan;
  renderMetrics(deck);
  renderCardList(coreCards, deck.core);
  renderCardList(supportCards, deck.support);
  renderNotes(deck);
}

function render() {
  const character = getActiveCharacter();
  const deck = getActiveDeck(character);
  renderSummary(character);
  renderDeckSwitcher(character, deck);
  renderDeckOverview(deck);
  syncCharacterButtons();
}

renderCharacterNav();
render();
