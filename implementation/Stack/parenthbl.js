/**
 *Execution default cmd>node.js
 * @purpose : Desc -> Take an Arithmetic Expression such as
 *  (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used t0
 * order the performance of operations. Ensure parentheses must appear
 * in a balanced fashion.
 */
/**
 * @function :BalancedParentheses
 * @description :checking given expression is balanced fashion are
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
  /**
   * @function :isEmpty
   * @description:checking for stack size
   */
  Stack1.isEmpty();
  return Stack1.size == 0
    ? " the Parentheses are balanced "
    : " the Parentheses are balanced ";
};
module.exports = {
  BalancedParentheses
};
