/**
 * Exexution default cmd>node.js
 * @purpose :Prime Factorization of N using a Brute Force
 */
exports.primefact = number => {
  try {
    for (let i = 2; i < number; i++) {
      while (number % i == 0) {
        console.log(i + " ");
        number = number / i;
      }
      if (number > 2) {
        console.log(number);
      }
    }
  } catch (e) {
    console.log(e);
  }
};
