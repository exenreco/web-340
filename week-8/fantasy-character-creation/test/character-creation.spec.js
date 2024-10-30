"use strict";

/**
 * Author:        Exenreco Bell
 * Date:          October 30, 2024
 * File Name:     character-creation.spec.js
 * Description:   used for testing the functionality defined in your character-creation.js module
 */


/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const path = require("path"),
  {
    createCharacter,
    getCharacters,
    filePath,
  } = require("../src/character-creation.js");

// Mock fs.promises
jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}));

const fs = require("fs").promises;

describe("Character Creation Module", () => {
  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.clearAllMocks();
  });

  // TODO: Write your tests here. You should have at least three tests:

  // 1. Test that createCharacter writes a new character to the file
  test("should write a new character to the file", async () => {

    const character = { class: "Warrior", gender: "Male", trait: "Brave", emoji: '🧞' };

    fs.readFile.mockResolvedValueOnce("[]"); // Simulate initial empty file

    fs.writeFile.mockResolvedValueOnce(); // Simulate successful write

    await createCharacter(character);

    expect(fs.writeFile).toHaveBeenCalledWith(
      filePath,
      JSON.stringify([character], null, 2),
      "utf-8"
    );
  });

  // 2. Test that getCharacters reads characters from the file
  test("should read characters from the file", async () => {

    const characters = [
      { class: "Mage", gender: "Female", trait: "Intelligent", emoji: '⚔️' },
    ];

    fs.readFile.mockResolvedValueOnce(JSON.stringify(characters)); // Mock readFile with expected data

    const result = await getCharacters();

    expect(result).toEqual(characters);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("should handle errors when reading from the file", async () => {
    fs.readFile.mockRejectedValueOnce(new Error("Failed to read file"));

    await expect(getCharacters()).rejects.toThrow(
      "Failed to retrieve characters"
    );
  });
});
