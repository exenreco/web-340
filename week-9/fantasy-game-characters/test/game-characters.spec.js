"use strict";

/**
 * Author:        Exenreco Bell
 * Date:          October 30, 2024
 * File Name:     game-characters.spec.js
 * Description:   ensure that the GameCharacters class in game-character.js works as expected.
 */

const { GameCharacters } = require("../src/game-characters.js");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((error, characters) => {
      expect(characters).not.toBeNull();
      expect(characters).toEqual(
        expect.arrayContaining([
          // Array of characters
          expect.objectContaining({
            emoji: expect.any(String),
            class: expect.any(String),
            gender: expect.any(String),
            funFact: expect.any(String),
          }),
        ])
      );
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test

    const invalidGameCharacters = new GameCharacters("invalid-script.js");

    invalidGameCharacters.getCharacters((error, characters) => {
      expect(characters).toBeNull();
      expect(error).toMatch(/Cannot find module/);
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test

    const failingGameCharacters = new GameCharacters("failing-script.js");

    failingGameCharacters.getCharacters((error, characters) => {
      expect(characters).toBeNull();
      expect(error).toMatch(/This is an error message/);
      done();
    });
  });
});
