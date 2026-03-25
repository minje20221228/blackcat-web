const characterData = [
  {
    id: 'ironclad',
    name: 'Ironclad',
    title: 'Hellforged bruiser with HP trading, Vulnerable setup, and raw front-loaded damage.',
    hp: '80 HP',
    unlock: 'Starter character',
    relic: 'Burning Blood',
    mechanic: 'Self-damage, Exhaust, Strength',
    accent: '#d86a4c',
    panel: 'linear-gradient(135deg, rgba(216,106,76,0.95), rgba(76,20,18,0.92))',
    cards: [
      { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 6 damage.', image: 'Beta-StS2 Ironclad-Strike.png' },
      { name: 'Defend', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 5 Block.', image: 'Beta-StS2 Ironclad-Defend.png' },
      { name: 'Bash', type: 'Attack', rarity: 'Basic', cost: '2', description: 'Deal 8 damage. Apply 2 Vulnerable.', image: 'Beta-StS2 Ironclad-Bash.png' },
      { name: 'Anger', type: 'Attack', rarity: 'Common', cost: '0', description: 'Deal 6 damage. Add a copy of this card into your Discard Pile.', image: 'Beta-StS2 Ironclad-Anger.png' },
      { name: 'Armaments', type: 'Skill', rarity: 'Common', cost: '1', description: 'Gain 5 Block. Upgrade a card in your Hand.', image: 'Beta-StS2 Ironclad-Armaments.png' },
      { name: 'Blood Wall', type: 'Skill', rarity: 'Common', cost: '1', description: 'Lose 2 HP. Gain 16 Block.', image: 'Beta-StS2 Ironclad-BloodWall.png' }
    ]
  },
  {
    id: 'silent',
    name: 'Silent',
    title: 'Fast draw-discard assassin built around poison, shivs, and flexible tempo turns.',
    hp: '70 HP',
    unlock: 'Unlocked after Ironclad win',
    relic: 'Ring of the Snake',
    mechanic: 'Discard, Sly, Poison, Shiv',
    accent: '#6ec17e',
    panel: 'linear-gradient(135deg, rgba(54,137,86,0.95), rgba(10,50,35,0.92))',
    cards: [
      { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 6 damage.', image: 'Beta-StS2 Silent-Strike.png' },
      { name: 'Defend', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 5 Block.', image: 'Beta-StS2 Silent-Defend.png' },
      { name: 'Neutralize', type: 'Attack', rarity: 'Basic', cost: '0', description: 'Deal 3 damage. Apply 1 Weak.', image: 'Beta-StS2 Silent-Neutralize.png' },
      { name: 'Survivor', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 8 Block. Discard 1 card.', image: 'Beta-StS2 Silent-Survivor.png' },
      { name: 'Acrobatics', type: 'Skill', rarity: 'Common', cost: '1', description: 'Draw 3 cards. Discard 1 card.', image: 'Beta-StS2 Silent-Acrobatics.png' },
      { name: 'Backflip', type: 'Skill', rarity: 'Common', cost: '1', description: 'Gain 5 Block. Draw 2 cards.', image: 'Beta-StS2 Silent-Backflip.png' },
      { name: 'Blade Dance', type: 'Skill', rarity: 'Common', cost: '1', description: 'Add 3 Shivs into your Hand. Exhaust.', image: 'Beta-StS2 Silent-BladeDance.png' },
      { name: 'Cloak and Dagger', type: 'Skill', rarity: 'Common', cost: '1', description: 'Gain 6 Block. Add 1 Shiv into your Hand.', image: 'Beta-StS2 Silent-CloakandDagger.png' }
    ]
  },
  {
    id: 'regent',
    name: 'Regent',
    title: 'Royal engine builder who banks stars for scaling control, creation effects, and sweeping turns.',
    hp: '75 HP',
    unlock: 'Unlocked after Silent win',
    relic: 'Divine Right',
    mechanic: 'Stars, creation, control',
    accent: '#ffbf49',
    panel: 'linear-gradient(135deg, rgba(255,191,73,0.95), rgba(97,54,11,0.92))',
    cards: [
      { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 6 damage.', image: 'Beta-StS2 Regent-Strike.png' },
      { name: 'Defend', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 5 Block.', image: 'Beta-StS2 Regent-Defend.png' },
      { name: 'Falling Star', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 7 damage. Apply 1 Weak. Apply 1 Vulnerable.', image: 'Beta-StS2 Regent-FallingStar.png' },
      { name: 'Venerate', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 2 Star.', image: 'Beta-StS2 Regent-Venerate.png' },
      { name: 'Astral Pulse', type: 'Attack', rarity: 'Common', cost: '2', description: 'Deal 14 damage to ALL enemies.', image: 'Beta-StS2 Regent-AstralPulse.png' },
      { name: 'Gather Light', type: 'Skill', rarity: 'Common', cost: '1', description: 'Gain 7 Block. Gain 1 Star.', image: 'Beta-StS2 Regent-GatherLight.png' },
      { name: 'Glow', type: 'Skill', rarity: 'Common', cost: '0', description: 'Gain 1 Star. Draw 2 cards.', image: 'Beta-StS2 Regent-Glow.png' }
    ]
  },
  {
    id: 'necrobinder',
    name: 'Necrobinder',
    title: 'Pet-and-resource specialist that routes fights through Osty, Doom, and soul economy.',
    hp: '66 HP',
    unlock: 'Unlocked after Regent win',
    relic: 'Bound Phylactery',
    mechanic: 'Summon, Doom, Osty, Souls',
    accent: '#b58cff',
    panel: 'linear-gradient(135deg, rgba(135,104,205,0.95), rgba(39,16,72,0.94))',
    cards: [
      { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 6 damage.', image: 'Beta-StS2 Necrobinder-Strike.png' },
      { name: 'Defend', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 5 Block.', image: 'Beta-StS2 Necrobinder-Defend.png' },
      { name: 'Bodyguard', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Summon 5.', image: 'Beta-StS2 Necrobinder-Bodyguard.png' },
      { name: 'Unleash', type: 'Attack', rarity: 'Basic', cost: '1', description: "Osty deals 6 damage. Deals additional damage equal to Osty's current HP.", image: 'Beta-StS2 Necrobinder-Unleash.png' },
      { name: 'Poke', type: 'Attack', rarity: 'Common', cost: '0', description: 'Osty deals 6 damage.', image: 'Beta-StS2 Necrobinder-Poke.png' },
      { name: 'Graveblast', type: 'Attack', rarity: 'Common', cost: '1', description: 'Deal 4 damage. Put a card from your Discard Pile into your Hand. Exhaust.', image: 'Beta-StS2 Necrobinder-Graveblast.png' },
      { name: 'Invoke', type: 'Skill', rarity: 'Common', cost: '1', description: 'Next turn, Summon 2 and gain 2 Nether energy.', image: 'Beta-StS2 Necrobinder-Invoke.png' },
      { name: 'Negative Pulse', type: 'Skill', rarity: 'Common', cost: '1', description: 'Gain 5 Block. Apply 7 Doom to ALL enemies.', image: 'Beta-StS2 Necrobinder-NegativePulse.png' }
    ]
  },
  {
    id: 'defect',
    name: 'Defect',
    title: 'Orb automation specialist with explosive evokes, focus scaling, and energy conversion loops.',
    hp: '70 HP',
    unlock: 'Unlocked after Necrobinder win',
    relic: 'Cracked Core',
    mechanic: 'Orbs, Focus, Evoke, channeling',
    accent: '#66baff',
    panel: 'linear-gradient(135deg, rgba(93,165,255,0.95), rgba(13,42,94,0.94))',
    cards: [
      { name: 'Strike', type: 'Attack', rarity: 'Basic', cost: '1', description: 'Deal 6 damage.', image: 'Beta-StS2 Defect-Strike.png' },
      { name: 'Defend', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Gain 5 Block.', image: 'Beta-StS2 Defect-Defend.png' },
      { name: 'Zap', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Channel 1 Lightning.', image: 'Beta-StS2 Defect-Zap.png' },
      { name: 'Dualcast', type: 'Skill', rarity: 'Basic', cost: '1', description: 'Evoke your rightmost Orb twice.', image: 'Beta-StS2 Defect-Dualcast.png' },
      { name: 'Thunder', type: 'Power', rarity: 'Uncommon', cost: '1', description: 'Whenever you Evoke Lightning, deal 6 damage to each enemy hit.', image: 'Beta-StS2 Defect-Thunder.png' },
      { name: 'White Noise', type: 'Skill', rarity: 'Uncommon', cost: '1', description: "Add a random Power into your Hand. It's free to play this turn. Exhaust.", image: 'Beta-StS2 Defect-WhiteNoise.png' },
      { name: 'Adaptive Strike', type: 'Attack', rarity: 'Rare', cost: '2', description: 'Deal 18 damage. Add a 0-cost copy of this card into your Discard Pile.', image: 'Beta-StS2 Defect-AdaptiveStrike.png' }
    ]
  }
];

const nav = document.getElementById('character-nav');
const summaryName = document.getElementById('summary-name');
const summaryDescription = document.getElementById('summary-description');
const summaryStats = document.getElementById('summary-stats');
const galleryTitle = document.getElementById('gallery-title');
const galleryNote = document.getElementById('gallery-note');
const grid = document.getElementById('card-grid');
const template = document.getElementById('card-template');
const searchInput = document.getElementById('search-input');
const costFilter = document.getElementById('cost-filter');
const typeFilter = document.getElementById('type-filter');
const resetFiltersButton = document.getElementById('reset-filters');

const filterState = {
  query: '',
  cost: 'all',
  type: 'all'
};

let activeCharacter = characterData[0].id;

function buildImageUrl(filename) {
  return `https://slaythespire.wiki.gg/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

function buildFallbackArt(character, card) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 320">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${character.accent}"/>
          <stop offset="100%" stop-color="#111217"/>
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="36" fill="url(#bg)"/>
      <circle cx="386" cy="82" r="74" fill="rgba(255,255,255,0.08)"/>
      <circle cx="124" cy="242" r="116" fill="rgba(0,0,0,0.18)"/>
      <text x="34" y="66" fill="#f5f1df" font-size="26" font-family="Georgia, serif">${character.name}</text>
      <text x="34" y="126" fill="#fff8ea" font-size="48" font-weight="700" font-family="Georgia, serif">${card.name}</text>
      <text x="34" y="170" fill="#f2e7c6" font-size="24" font-family="Arial, sans-serif">${card.type} • ${card.rarity}</text>
      <text x="34" y="260" fill="#fff" font-size="74" font-weight="700" font-family="Arial, sans-serif">${card.cost}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getActiveCharacter() {
  return characterData.find((entry) => entry.id === activeCharacter) || characterData[0];
}

function getFilteredCards(character) {
  const normalizedQuery = filterState.query.trim().toLowerCase();

  return character.cards.filter((card) => {
    const matchesQuery =
      normalizedQuery === '' ||
      card.name.toLowerCase().includes(normalizedQuery) ||
      card.description.toLowerCase().includes(normalizedQuery);
    const matchesCost = filterState.cost === 'all' || card.cost === filterState.cost;
    const matchesType = filterState.type === 'all' || card.type === filterState.type;

    return matchesQuery && matchesCost && matchesType;
  });
}

function populateSelect(selectElement, values, allLabel) {
  selectElement.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = allLabel;
  selectElement.appendChild(allOption);

  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
}

function syncFilterOptions(character) {
  const costs = [...new Set(character.cards.map((card) => card.cost))].sort((a, b) => Number(a) - Number(b));
  const types = [...new Set(character.cards.map((card) => card.type))].sort();

  populateSelect(costFilter, costs, 'All costs');
  populateSelect(typeFilter, types, 'All types');

  if (!costs.includes(filterState.cost)) {
    filterState.cost = 'all';
  }

  if (!types.includes(filterState.type)) {
    filterState.type = 'all';
  }

  costFilter.value = filterState.cost;
  typeFilter.value = filterState.type;
  searchInput.value = filterState.query;
}

function renderNav() {
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
      syncFilterOptions(getActiveCharacter());
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
    { label: 'Unlock', value: character.unlock },
    { label: 'Relic', value: character.relic },
    { label: 'Identity', value: character.mechanic }
  ].map((item) => `
    <article class="stat-card">
      <p class="stat-label">${item.label}</p>
      <p class="stat-value">${item.value}</p>
    </article>
  `).join('');

  document.documentElement.style.setProperty('--accent-color', character.accent);
  document.documentElement.style.setProperty('--accent-panel', character.panel);
}

function renderCards(character) {
  const filteredCards = getFilteredCards(character);
  grid.innerHTML = '';

  galleryTitle.textContent = `${character.name} card gallery`;
  galleryNote.textContent = `${filteredCards.length} of ${character.cards.length} cards shown.`;

  if (filteredCards.length === 0) {
    const emptyState = document.createElement('article');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <p class="section-kicker">No Matches</p>
      <h3>No cards match the current filters.</h3>
      <p class="section-note">Try clearing search text or widening cost and type filters.</p>
    `;
    grid.appendChild(emptyState);
    return;
  }

  filteredCards.forEach((card) => {
    const node = template.content.cloneNode(true);
    const article = node.querySelector('.card-tile');
    const image = node.querySelector('.card-art');

    article.style.setProperty('--card-accent', character.accent);
    image.src = buildImageUrl(card.image);
    image.alt = `${character.name} ${card.name} card art`;
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      image.src = buildFallbackArt(character, card);
    }, { once: true });

    node.querySelector('.card-rarity').textContent = card.rarity;
    node.querySelector('.card-character').textContent = character.name;
    node.querySelector('.card-cost').textContent = `${card.cost} cost`;
    node.querySelector('.card-name').textContent = card.name;
    node.querySelector('.card-description').textContent = card.description;

    const tags = node.querySelector('.card-tags');
    [card.type, card.rarity].forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'card-tag';
      span.textContent = tag;
      tags.appendChild(span);
    });

    grid.appendChild(node);
  });
}

function syncActivePill() {
  document.querySelectorAll('.character-pill').forEach((button) => {
    const isActive = button.dataset.character === activeCharacter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function bindFilterControls() {
  searchInput.addEventListener('input', (event) => {
    filterState.query = event.target.value;
    render();
  });

  costFilter.addEventListener('change', (event) => {
    filterState.cost = event.target.value;
    render();
  });

  typeFilter.addEventListener('change', (event) => {
    filterState.type = event.target.value;
    render();
  });

  resetFiltersButton.addEventListener('click', () => {
    filterState.query = '';
    filterState.cost = 'all';
    filterState.type = 'all';
    syncFilterOptions(getActiveCharacter());
    render();
  });
}

function render() {
  const character = getActiveCharacter();
  renderSummary(character);
  renderCards(character);
  syncActivePill();
}

renderNav();
syncFilterOptions(getActiveCharacter());
bindFilterControls();
render();
