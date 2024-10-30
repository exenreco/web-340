"use strict";

/**
 * Author:        Exenreco Bell
 * Date:          October 30, 2024
 * File Name:     game-characters.js
 * Description:   A class designed to manage interactions with a separate script that generates or retrieves game characters.
 */

const { spawn } = require("child_process"),
  path = require("path");

class GameCharacters {
  constructor(scriptFile) {
    // TODO: Set the script file path

    if (typeof scriptFile !== "string") {
      throw new Error("scriptFile must be a string");
    }
    this.scriptPath = path.join(__dirname, scriptFile);
  }

  getCharacters(callback) {
    // TODO: Implement this method

    const child = spawn("node", [this.scriptPath]);

    child.stdout.on("data", (data) => {
      const characters = JSON.parse(data.toString());
      callback(null, characters);
    });

    child.stderr.on("data", (error) => {
      const errorMessage = error.toString().trim();
      console.error(`Error: ${errorMessage}`);
      callback(errorMessage, null);
    });

    child.on("close", (error) => {
      if (error !== 0) {
        const errorMsg = `The game data file failed & exited with code ${error}.`;
        console.error(errorMsg);
        callback("/Cannot find module/", null);
      }
    });
  }
}

module.exports = { GameCharacters };
