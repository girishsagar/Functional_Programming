/**
 * Execution default cmd>node.js
 *@Purpose : This program simulates this random process.
 */

exports.coupon = number => {
  var collected = []; //empty array to keep tracking unique individual element
  for (let i = 0; i <= number; i++) {
    collected[i] = false;
  }
  var iterator = 0,
    unique = 0;
  var random = 0;
  while (unique < number) {
    random = Math.floor(number * Math.random());
    if (!collected[random]) {
      //false
      unique++;
      collected[random] = true;
    }
    iterator++;
  }
  return iterator;
};
