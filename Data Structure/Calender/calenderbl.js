/**
 * Execution default cmd>node.js
 * @purpose :Write a program Calendar.java that takes the month and
 *  year as command-line arguments and prints the Calendar of the month.
 */
calendar = (d0, md) => {
  let matrix = [];
  matrix.push(["sun", "mon", "tue", "wed", "thu", "fri", "sat"]);
  let k = 1;
  for (i = 1; i < 7; i++) {
    let date = [];
    for (j = 0; j < 7; j++) {
      if (k <= md && j >= d0) {
        if (k > 9) date.push(k + " ");
        else date.push(" " + k + " ");
        k++;
        d0 = d0 - 7;
      } else date.push(" ");
    }
    matrix.push(date);
  }
  return matrix;
};
module.exports = {
  calendar
};
