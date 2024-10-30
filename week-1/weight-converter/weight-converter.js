/**
 * Author: Exenreco Bell
 * Date: October 23, 2024
 * File Name: weight-converter.js
 * Description: This script takes one command line argument; which is the weight in pounds. It checks if the input is valid (a number) and converts it to kilograms using a conversion factor of 2.20462. The result is rounded to two decimal places.
*/

"use strict";

// TODO: Implement the weight conversion logic here


// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
  return pounds * 0.453592;
}

// Access command line arguments
const args = process.argv.slice(2);

// Check if the argument is provided
if (args.length === 0) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1);
}

// Check if the argument is a number
const pounds = parseFloat(args[0]);
if (isNaN(pounds)) {
  console.error('Input must be a number.');
  process.exit(1);
}

// Convert pounds to kilograms
const kilograms = poundsToKilograms(pounds);

// Print the result rounded to two decimal places
console.log(kilograms.toFixed(2));