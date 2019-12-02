/**
 * Execution : Default cmd>node.js
 * @Purpose :To find a Harmonic Series for a given number
 */
exports.harmonic = number => {
  let sum = 1;
  let result;
  try {
    for (let i = 0; i <= number; i++) {
      result = sum + 1.0 / i;
      console.log(result);
    }
  } catch (e) {
    console.log(e);
  }
};
