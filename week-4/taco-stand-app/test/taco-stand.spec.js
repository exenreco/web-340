/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     taco-stand.spec.js
 * Description:   used for unit testing the functionality of the TacoStandEmitter class.
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand.js");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  tacoStand.on('serve', (customer) => {
      assert.strictEqual(customer, 'John');
      console.log("Passed testServeCustomer");
  });
  try {
      tacoStand.serveCustomer('John');
  } catch (err) {
      console.error(`Failed testServeCustomer: ${err}`);
  }
}

function testPrepareTaco() {
  tacoStand.on('prepare', (taco) => {
      assert.strictEqual(taco, 'beef');
      console.log("Passed testPrepareTaco");
  });
  try {
      tacoStand.prepareTaco('beef');
  } catch (err) {
      console.error(`Failed testPrepareTaco: ${err}`);
  }
}

function testHandleRush() {
  tacoStand.on('rush', (rush) => {
      assert.strictEqual(rush, 'lunch');
      console.log("Passed testHandleRush");
  });
  try {
      tacoStand.handleRush('lunch');
  } catch (err) {
      console.error(`Failed testHandleRush: ${err}`);
  }
}

// Execute tests
testServeCustomer();
testPrepareTaco();
testHandleRush();