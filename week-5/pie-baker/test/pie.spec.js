/**
 * Author:      Exenreco Bell
 * Date:        October 29, 2024
 * File Name:   pie.spec.js
 * Description: used for unit testing the functionality defined in pie.js
 */

"use strict";

const { bakePie } = require("../src/pie.js");

// Your tests here
describe("bakePie", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {}); // Mock console.warn
    jest.spyOn(process, "exit").mockImplementation((code) => {}); // Mock process.exit
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore original implementations
  });

  test("should successfully bake a pie with all essential ingredients", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter"]);
    expect(result).toBe("Apple pie successfully baked!");
  });

  test("should log a warning and not bake if flour is missing", () => {
    bakePie("apple", ["sugar", "butter"]);
    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Missing essential ingredient: flour"
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("should log a warning and not bake if sugar is missing", () => {
    bakePie("apple", ["flour", "butter"]);
    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Missing essential ingredient: sugar"
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });

  test("should log a warning and not bake if butter is missing", () => {
    bakePie("apple", ["flour", "sugar"]);
    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Missing essential ingredient: butter"
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
