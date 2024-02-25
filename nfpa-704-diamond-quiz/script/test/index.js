const assert = require('assert');
const { it } = require('mocha');
const Diamond = require('../diamonds');

describe("NFPA 704 Diamond", () => {
    let greenDiamond;
    beforeEach(() => {
        greenDiamond = new Diamond('green', {0: "gross", 2: "flame"});
    });

    it("Create a diamond tile", () => {
        const actualColor = greenDiamond.color;
        const expectedColor = 'green';
        const actualKV = greenDiamond.levels[0];
        const expectedKV = 'gross';
        const actualUndefKV = greenDiamond.levels[1];
        const expectedUndef = undefined;
        
        assert.strictEqual(actualColor, expectedColor);
        assert.strictEqual(actualKV, expectedKV);
        assert.strictEqual(actualUndefKV, expectedUndef);   // helps assert obj access is by key, not index
    });

    it("Changes the color", () => {
        greenDiamond.color = 'orange';
        const actualColor = greenDiamond.color;
        const expectedColor = 'orange';

        assert.strictEqual(actualColor, expectedColor);
    });
});

describe("Quiz structure", () => {
    it("Has n questions", () => {
        const bunchaQs = ["hi", "not a q", "bad test"];
        const questionsLen = bunchaQs.length;

        assert.strictEqual(questionsLen, 3);
    });
});