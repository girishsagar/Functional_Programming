/**
 * Execution :1 Default cmd>node.js
 * @Purpose :To find given number Power 2^n
 */
exports.powerof = number => {
  let power = 1;
  try {
    for (let i = 1; i <= number; i++) {
      power = power * 2;
      console.log("power :" + power);
    }
  } catch (e) {
    console.log(e);
  }
};
