/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     character-creator.js
 * Description:   A class used for creating a character creation system for a fantasy video game
 */

const { Duplex } = require('stream');
class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.data = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const input = chunk.toString();
    if (!input) {
      this.emit('error', new Error('Empty string written to CharacterCreator'));
    } else {
      this.data.push(input);
      callback();
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
    const character = {
      classType: this.data[0] || 'Unknown',
      gender: this.data[1] || 'Unknown',
      funFact: this.data[2] || 'No fun fact provided'
    };
    const description = `${character.classType} (${character.gender}): ${character.funFact}`;
    this.push(description);
    this.push(null); // End the stream
  }
}

module.exports = CharacterCreator;