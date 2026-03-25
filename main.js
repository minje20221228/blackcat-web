class CardDisplay extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const name = document.createElement('h2');
    name.textContent = this.getAttribute('name');

    const cost = document.createElement('div');
    cost.setAttribute('class', 'cost');
    cost.textContent = this.getAttribute('cost');

    const type = document.createElement('div');
    type.setAttribute('class', 'type');
    type.textContent = this.getAttribute('type');

    const description = document.createElement('p');
    description.textContent = this.getAttribute('description');

    const style = document.createElement('style');
    style.textContent = `
      .card {
        border: 1px solid var(--card-border-color);
        background-color: var(--card-background-color);
        padding: 15px;
        border-radius: 10px;
        width: 200px;
        position: relative;
      }
      .cost {
        position: absolute;
        top: 10px;
        left: 10px;
        border: 1px solid var(--text-color);
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .type {
        font-style: italic;
        margin-bottom: 10px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(card);
    card.appendChild(name);
    card.appendChild(cost);
    card.appendChild(type);
    card.appendChild(description);
  }
}

customElements.define('card-display', CardDisplay);
