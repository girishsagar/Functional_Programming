/**
 * Execution default cmd>node.js
 * @description :. For e.g. 17 and 71 are both
 * Prime and Anagrams in the 0 to 1000 range. Further store in a 2D Array
 */
/**
 * @function :prime
 * @description :checking for palidrome from 0 to 1000
 */
anag = () => {
  prime = number => {
    try {
      number == 0 || 1 ? false : true;
      for (let i = 2; i < number; i++) return number % i == 0 ? false : true;
    } catch (e) {
      console.log(e);
    }
  };
};
let start = 1,
  end = 100;
try {
  for (let index = 0; index < 10; index++) {
    let a = [];
    let b = [];
    for (let n = start; n < end; n++) {
      if (prime(n)) {
        a.push(n);
      }
    }
    start = start + 100;
    end = end + 100;
    for (let j = 1; j < a.length; j++) {
      for (let k = j + 1; k < a.length - 1; k++) {
        let m = a[j].toString();
        let n = a[k].toString();

        if (prime(m, n)) {
          b.push(m, n);
          b.push(n);
        }
      }
    }
    console.log(b.join(",") + "\n");
  }
} catch (e) {
  console.log("e.Inavalid number");
}
module.exports = {
  anag
};
