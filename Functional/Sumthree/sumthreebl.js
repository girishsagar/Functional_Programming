/**
 * Execution default cmd>nodejs
 * @filename ;tripple.js
 * @purpose :Desc -> A program with cubic running time. Read in N integers and counts the
 *  number of triples that sum to exactly 0
 * @
 */
exports.sumthreeint = () => {
  let arr = [0, -1, 2, -3, 1];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          console.log("[" + arr[i], arr[j], arr[k] + "]");
        }
      }
    }
  }
};
