/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     server.spec.js
 * Description:   logics impainted for testing character server.
 */
"use strict";

const fetch = require("node-fetch"); // Import fetch for Node.js
const server = require("../src/server.js"); // Import server script

// TODO: Implement your tests here

let serverInstance;

beforeAll((done) => {
  serverInstance = server;
  serverInstance.listen(3000, () => {
    console.log("Test server listening on port 3000");
    done();
  });
});

afterAll((done) => {
  serverInstance.close(done);
});

describe("Character Creation API", () => {
  it('should create a character', async () => {
      const response = await fetch('http://localhost:3000/create-character', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ class: "Mage", gender: "Female", funFact: "I love spells" })
      });
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.message).toBe('Character created successfully');
  });

  it('should confirm character creation', async () => {
    const response = await fetch('http://localhost:3000/confirm-character', { method: 'POST' });
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.message).toBe('Character confirmed');
  });

  it('should view the character', async () => {
      const response = await fetch('http://localhost:3000/view-character');
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.character).toBeDefined();
  });
});
