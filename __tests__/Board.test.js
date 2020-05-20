import Board from "../Board";
import Card from "../Card";

const createAceOfSpades = () => {
    return Card.create(Card.ACE + Card.SPADES);
};

const createKingOfSpades = () => {
    return Card.create(Card.KING + Card.SPADES);
};

describe("Board", () => {
    test("should exist", () => {
        expect(Board).toBeDefined;
    });

    test("should allow placing Card on an empty Board", () => {
        const board = new Board();
        const card = createAceOfSpades();

        const canPlace = board.canPlace(0, 0, card);
        expect(canPlace).toBe(true);
    });

    test("should allow getting the card from the Board's position", () => {
        const board = new Board();
        const card = createAceOfSpades();

        board.placeCard(0, 0, card);
        const returnedCard = board.getCard(0, 0);
        expect(returnedCard).toEqual(card);
    });

    test("should allow placing another Card on an empty Board", () => {
        const board = new Board();
        const cardOne = createAceOfSpades();
        const cardTwo = createKingOfSpades();

        board.placeCard(0, 0, cardOne);

        const canPlace = board.canPlace(1, 1, cardTwo);
        expect(canPlace).toBe(true);
    });

    test("should disallow placing already placed Card", () => {
        const board = new Board();
        const card = createAceOfSpades();

        board.placeCard(0, 0, card);
        const canPlace = board.canPlace(2, 2, card);
        expect(canPlace).toBe(false);
    });

    test("should disallow placing same suit card in same row", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(1, 0, new Card("spades"));
        expect(canPlace).toBe(false);
    });

    test("should disallow placing same suit card in same column", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(0, 1, new Card("spades"));
        expect(canPlace).toBe(false);
    });

    test("should disallow placing same value card in the same row", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(0, 1, new Card(null, "ace"));
        expect(canPlace).toBe(false);
    });

    test("should disallow placing same value card in the same column", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(1, 0, new Card(null, "ace"));
        expect(canPlace).toBe(false);
    });
});
