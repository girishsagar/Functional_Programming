/**
 * Execution default cmd>node.js
 * @purpose :ake a range of 0 - 1000 Numbers and find the Prime numbers in that
 * range. Store the prime numbers in a 2D Array
 */
exports.prime2D = number => {
  primenumber = number => {
    try {
      if (number == 0 || number == 1) {
        return false;
      }
      for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
      }
      return true;
    } catch (e) {
      console.log(e);
    }
  };
  let arr1 = [];

  for (let i = 0; i < number / 100; i++) {
    let arr = [];
    {
      for (let j = i * 100; j <= (i + 1) * 100; j++) {
        if (primenumber(j)) arr.push(j);
      }
    }
    arr1.push(arr);
  }
  arr1.forEach(a => {
    let str = "";
    a.forEach(b => {
      str = str + b + " ";
    });
    console.log("[" + [str] + "]");
  });
};
