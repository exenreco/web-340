const
  assert = require('assert'),
  calculateDistance = require('../src/distance-calculator');

// Test for distance between Earth and Mars
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test for distance between Venus and Jupiter
function testVenusToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Venus', 'Jupiter'), 4.48);
    console.log('Passed testVenusToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

// Test for handling an invalid planet name
function testInvalidPlanetName() {
  try {
    calculateDistance('Earth', 'Pluto'); // Pluto isn't defined in our dictionary
    console.error('Failed testInvalidPlanetName: No error was thrown for an invalid planet');
    return false;
  } catch (error) {
    console.log('Passed testInvalidPlanetName');
    return true;
  }
}

// Call your test functions here
testEarthToMars();
testVenusToJupiter();
testInvalidPlanetName();