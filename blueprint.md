# Slay the Spire 2 Decklist Viewer

## Overview

A web application to display and manage Slay the Spire 2 decklists. This application will use modern web technologies, including Web Components, to create a dynamic and reusable UI.

## Current Task: Initial Decklist Implementation

### Plan

1.  **`index.html`**:
    *   Set up the basic HTML structure with a title and a container for the decklist.
    *   Add placeholder custom elements (`<card-display>`) for the cards.

2.  **`style.css`**:
    *   Apply a dark theme inspired by the game.
    *   Style the card elements to be visually distinct and readable.
    *   Use CSS variables for colors and spacing.

3.  **`main.js`**:
    *   Create the `<card-display>` Web Component.
    *   The component will display card information such as name, cost, type, and description.
    *   The component will use Shadow DOM for encapsulation.
