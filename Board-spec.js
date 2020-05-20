"use strict";
import { expect } from "chai";
import Board from "./Board";
import Card from "./Card";

const createAceOfSpades = () => {
    return Card.create(Card.ACE + Card.SPADES);
};
const createKingOfSpades = () => {
    return Card.create(Card.KING + Card.SPADES);
};

describe("Board", () => {
    it("should exist", () => {
        expect(Board).to.not.be.undefined;
    });

    it("should allow placing Card on an empty Board", () => {
        const board = new Board();
        const card = createAceOfSpades();

        const canPlace = board.canPlace(0, 0, card);
        expect(canPlace).to.be.true;
        board.placeCard(0, 0, card);

        expect(board.grid[0]).to.equal(card);
    });

    it("should allow placing another Card on an empty Board", () => {
        const board = new Board();
        const cardOne = createAceOfSpades();
        const cardTwo = createKingOfSpades();

        board.placeCard(0, 0, cardOne);

        const canPlace = board.canPlace(1, 1, cardTwo);

        expect(canPlace).to.be.true;
    });

    it("should disallow placing already placed Card", () => {
        const board = new Board();
        const card = createAceOfSpades();

        board.placeCard(0, 0, card);
        const canPlace = board.canPlace(2, 2, card);
        expect(canPlace).to.be.false;
    });

    it("should disallow placing same suit card in same row", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(1, 0, new Card("spades"));
        expect(canPlace).to.be.false;
    });

    it("should disallow placing same suit card in same column", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(0, 1, new Card("spades"));
        expect(canPlace).to.be.false;
    });

    it("should disallow placing same value card in the same row", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(0, 1, new Card(null, "ace"));
        expect(canPlace).to.be.false;
    });

    it("should disallow placing same value card in the same column", () => {
        const board = new Board();
        const aceOfSpades = createAceOfSpades();
        board.placeCard(0, 0, aceOfSpades);

        const canPlace = board.canPlace(1, 0, new Card(null, "ace"));
        expect(canPlace).to.be.false;
    });
});
