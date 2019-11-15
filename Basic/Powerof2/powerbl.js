/**
 * Execution :1 Default cmd>node.js
 * @Purpose :To find given number Power 2^n
 */
exports.powerof = (num) => {
  let input = require("readline-sync");
  num = input.question("Enter to fin to the power numbrer");
  let power = 1;
  try {
    for (let i = 1; i <= num; i++) {
      power = power * 2;
      console.log("power :" + power);
    }
  } catch (e) {
    console.log(e);
  }
};
