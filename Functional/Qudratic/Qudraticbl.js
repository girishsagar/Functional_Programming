/**
 * Execution default cmd>nodejs
 * @filename ;qudratic.js
 * @purpose :to find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots.
 */
exports.qudratic = (input1, input2, input3) => {
  let root1 = 0,
    root2 = 0;
  let delta = input2 * input2 - 4 * input1 * input3;
  console.log("The delta is " + delta);
  root1 = (-input2 + Math.sqrt(delta)) / (2 * input1);
  console.log("The Root 1 is  " + root1);
  root2 = (-input2 - Math.sqrt(delta)) / (2 * input1);
  console.log("the root 2 is " + root2);
};
