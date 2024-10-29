/**
 * Author:        Exenreco Bell
 * Date:          October 29, 2024
 * File Name:     pie.js
 * Description:   logics impainted for baking a pie.
 */
"use strict";

function bakePie(type, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];

  // Check for missing essential ingredients
  for (const ingredient of essentialIngredients) {
    if (!ingredients.includes(ingredient)) {
      console.warn(`Warning: Missing essential ingredient: ${ingredient}`);
      process.exit(1); // Exit the process if an essential ingredient is missing
    }
  }

  // If all essential ingredients are present, return a success message
  return `${
    type.charAt(0).toUpperCase() + type.slice(1)
  } pie successfully baked!`;
}

module.exports = { bakePie };
