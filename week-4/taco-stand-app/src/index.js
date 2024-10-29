/**
 * Author:      Exenreco Bell
 * Date:        October 29, 2024
 * File Name:   index.js
 * Description: serves as the main entry point for our command-line interface (CLI).
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand.js");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" "),
    argument = args.join(" "); // Join the remaining parts to form the full argument string

  // TODO: Handle the commands
  switch (command) {
    case "serve":
      if (argument) {
        tacoStand.serveCustomer(argument);
        console.log(`Taco Stand serves: ${argument}`);
      } else {
        console.log(
          'Please provide a customer name after the "serve" command.'
        );
      }
      break;
    case "prepare":
      if (argument) {
        tacoStand.prepareTaco(argument);
        console.log(`Taco Stand prepares: ${argument} taco`);
      } else {
        console.log('Please provide a taco type after the "prepare" command.');
      }
      break;
    case "rush":
      if (argument) {
        tacoStand.handleRush(argument);
        console.log(`Taco Stand handles rush: ${argument}`);
      } else {
        console.log('Please provide a rush type after the "rush" command.');
      }
      break;
    default:
      console.log(
        'Unknown command. Please enter "serve", "prepare", or "rush".'
      );
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
