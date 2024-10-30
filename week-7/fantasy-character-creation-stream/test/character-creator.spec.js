/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     character-creator.spec.js
 * Description:   cli test for the  character creator class
 */
const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write("Mage");
    characterCreator.write("Female");
    characterCreator.write("Loves arcane mysteries.");

    characterCreator.on('data', (data) => {
      expect(data.toString()).toBe("Mage (Female): Loves arcane mysteries.");
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Empty string written to CharacterCreator');
      done();
    });
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write("Warrior");
    characterCreator.write("Male");
    characterCreator.write("Enjoys fighting dragons.");

    characterCreator.on('data', (data) => {
      expect(data.toString()).toBe("Warrior (Male): Enjoys fighting dragons.");
      done();
    });
  });
});