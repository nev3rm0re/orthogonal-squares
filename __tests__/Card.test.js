import Card from "../Card";

describe("Card", () => {
    test("should exist", () => {
        expect(Card).toBeDefined;
    });

    test("should map to old way", () => {
        const cardOldWay = new Card("spades", "ace");
        const card = Card.create(Card.ACE + Card.SPADES);
        expect(card).toBeInstanceOf(Card);
        expect(card).toEqual(cardOldWay);
    });

    test("should be able to compare to other Card using `similar` method", () => {
        const card = Card.create(Card.ACE + Card.SPADES);
        const isSimilar = card.similar(Card.create(Card.ACE + Card.HEARTS));
        expect(isSimilar).toBe(true);
    });

    test("Should be able to compare with suits only", () => {
        const card = Card.create(Card.ACE + Card.SPADES);
        const isSimilar = card.similar(new Card("spades", null));
        expect(isSimilar).toBe(true);
    });
});
