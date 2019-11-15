/**
 * Exexution default cmd>node.js
 * @purpose :Prime Factorization of N using a Brute Force
 */
var input = require("readline-sync");
exports.primefact = number => {
  number = input.question("Enter the number to find PrimeFactors ");
  //let fact=1;
  for (let i = 2; i < number; i++) {
    while (number % i == 0) {
      console.log(i);
      number = number / i;
    }
  }
};
