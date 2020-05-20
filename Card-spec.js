import { expect } from 'chai';
import Card from './Card';

describe('Card', () => {
  it('should exist', () => {
    expect(Card).to.not.be.undefined;
  });

  it('(spades([1]), ace/(0)) should equal to ACE(0) + SPADES(5)', () => {
    const cardOldWay = new Card('spades', 'ace');
    const card = Card.create(Card.ACE + Card.SPADES);
    expect(card).to.be.instanceOf(Card);
    expect(card).to.eql(cardOldWay);
  });

  it('should be able to compare to other Cards using `similar` method', () => {
    const card = Card.create(Card.ACE + Card.SPADES);
    const isSimilar = card.similar(Card.create(Card.ACE + Card.HEARTS));
    expect(isSimilar).to.be.true;
  });

  it('should be able to compare with suits only', () => {
    const card = Card.create(Card.ACE + Card.SPADES);
    const isSimilar = card.similar(new Card('spades', null));
    expect(isSimilar).to.be.true;
  });
});
