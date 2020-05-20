const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
const suitsLength = suits.length + 1; // adding 1 to accommodate for "nothing"

const values = ['ace', 'king', 'queen', 'jack'];
const valuesLength = values.length + 1; // adding 1 to accommodate for "nothing"

const conlog = (...args) => {
  if (true) return;
  console.log(...args);
};

class Card {
  constructor(suit, value) {
    const suitIndex = suits.findIndex((el) => el === suit);
    const valueIndex = values.findIndex((el) => el === value);
    // adding +1 will make not found value (-1) equal to 0
    this.identity = (suitIndex + 1) * suitsLength + (valueIndex + 1);
  }

  get suit() {
    return (this.identity % valuesLength) - 1;
  }

  get value() {
    return Math.floor(this.identity / valuesLength) - 1;
  }

  identity() {
    return this.identity;
  }

  similar(card) {
    conlog('comparing this.suit', this.suit, 'to card.suit', card.suit);
    return this.suit === card.suit || this.value === card.value;
  }

  static create(value) {
    conlog('Creating card from value', value);
    const base4 = value.toString(5);
    conlog('Base5 number is', base4);
    const card = new Card();
    const suit = Math.floor(value / suitsLength) - 1;
    conlog('Calculated suit is', suit);
    const faceValue = (value % valuesLength) - 1;
    conlog('Calculated face value is', faceValue);
    card.identity = (suit + 1) * suitsLength + (faceValue + 1);
    conlog('Set cards identity to ', card.identity);
    return card;
  }

  static get ACE() {
    return 1;
  }

  static get KING() {
    return 2;
  }
  static get QUEEN() {
    return 3;
  }
  static get JACK() {
    return 4;
  }

  static get HEARTS() {
    return suitsLength * 1;
  }
  static get SPADES() {
    return suitsLength * 2;
  }
  static get CLUBS() {
    return suitsLength * 3;
  }
  static get DIAMONDS() {
    return suitsLength * 4;
  }
}

export default Card;
