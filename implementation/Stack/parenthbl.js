/**
 *Execution default cmd>node.js
 * @purpose : Desc -> Take an Arithmetic Expression such as
 *  (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used t0 
 * order the performance of operations. Ensure parentheses must appear 
 * in a balanced fashion.
 */

BalancedParentheses = expression => {
  const Stk = require("../../DatastractureUtility/datstractureutility");
  arr = expression.toString().split("");
  let Stack1 = new Stk.Stack();
  arr.forEach(element => {
    if (element == "(" || element == "[" || element == "{") {
      Stack1.push(element);
    } else if (element == ")" && Stack1.top.data == "(") {
      Stack1.pop();
    } else if (element == "]" && Stack1.top.data == "[") {
      Stack1.pop();
    } else if (element == "}" && Stack1.top.data == "{") {
      Stack1.pop();
    }
  });
  Stack1.isEmpty();
  if (Stack1.size === 0) {
    console.log("The Parentheses are Balanced!");
  } else {
    console.log("The parentheses are Not Balanced");
  }
};
module.exports = {
  BalancedParentheses
};
