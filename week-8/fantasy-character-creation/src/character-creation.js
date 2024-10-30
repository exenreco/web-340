"use strict";

/**
 * Author:        Exenreco Bell
 * Date:          October 30, 2024
 * File Name:     character-creation.js
 * Description:   main module that handles the logic for creating, reading, and managing fantasy characters.
 */


/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const

fs = require("fs").promises,

path = require("path"),

filePath = path.join(__dirname, "characters.json");

/**
 * CREATE CHARACTER
 *
 * Writes a new character to the characters.json file.
 *
 * @param {Object} character - Character object with properties: class, gender, and a unique trait.
 *
 * @return {void}
 */
async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const

    fileData = await fs.readFile(filePath, "utf-8").catch(() => "[]"),

    characters = JSON.parse(fileData || "[]");

    characters.push(character);

    await fs.writeFile(filePath, JSON.stringify(characters, null, 2), "utf-8");

  } catch (error) {

    throw new Error("Failed to create character: " + error.message);
  }
}

/**
 * GET CHARACTER
 *
 * Reads all characters from the characters.json file.
 *
 * @returns {Promise<Array>} promise - A promise that resolves to an array of character objects.
 */
async function getCharacters() {
  // TODO: Implement this function
  try {
    const fileData = await fs.readFile(filePath, "utf-8");

    return JSON.parse(fileData || "[]");
  } catch (error) {

    throw new Error("Failed to retrieve characters: " + error.message);
  }
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters, filePath }; // For promises
