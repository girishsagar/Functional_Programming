/**
 * Execution : Default cmd>node.js
 * @Purpose :To find a Harmonic Series for a given number
 */
var input = require("readline-sync");
exports.harmonic = number => {
  number = input.question("Enter the number to find harmonic ");
  let sum = 1;
  let result;
  for (let i = 0; i <= number; i++) {
    result = sum + 1.0 / i;
    console.log(result);
  }
};
