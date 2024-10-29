/**
 * Author:      Exenreco Bell
 * Date:        October 29, 2024
 * File Name:   index.js
 * Description: Starter file for the recipes app.
*/

// TODO: Import your module using require

const { createRecipe, setTimer, quit } = require('./recipes.js');

// TODO: Implement your CLI program here

// Demonstrate the createRecipe function
console.log("Demonstrating createRecipe function:");
const recipeResult = createRecipe(['flour', 'sugar', 'butter', 'eggs']);
console.log(recipeResult); // Expected: Recipe created with ingredients: flour, sugar, butter, eggs

// Demonstrate the setTimer function
console.log("\nDemonstrating setTimer function:");
const timerResult = setTimer(20);
console.log(timerResult); // Expected: Timer set for 20 minutes

// Demonstrate the quit function
console.log("\nDemonstrating quit function:");
const quitResult = quit();
console.log(quitResult); // Expected: Program exited