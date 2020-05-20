class Board {
  constructor() {
    this.grid = new Array(16).fill(null);
    this.identity = null;
  }

  placeCard(row, col, card) {
    this.grid[(row << 2) + col] = card;
  }

  canPlace(row, col, card) {
    // Make sure we don't have this card already placed
    if (card.identity) {
      const res = this.grid.findIndex((el) => {
        return el && el.identity === card.identity;
      });
      if (res >= 0) {
        return false;
      }
    }

    // Checking same row as row,col
    for (let i = 0; i < 4; i++) {
      const index = i + (col << 2);
      const currentCard = this.grid[index];
      if (currentCard !== null) {
        if (currentCard.similar(card)) {
          return false;
        }
      }
    }

    // Checking same column as row,col
    for (let i = 0; i < 4; i++) {
      const index = row + (i << 2);
      const currentCard = this.grid[index];
      if (currentCard !== null) {
        if (currentCard.similar(card)) {
          return false;
        }
      }
    }

    if (this.grid[row * 4 + col] !== null) {
      return false;
    } else {
      return true;
    }
  }
}

export default Board;
