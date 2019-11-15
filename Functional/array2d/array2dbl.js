/**
 * Execution :1 Default cmd>node.js
 * @Purpose :Desc -> A library for reading in 2D arrays of integers, doubles, or booleans from
 * standard input and printing them out to standard output.
 */

exports.array2d = (row, col) => {
  var input=require('readline-sync')
  col=input.question("Enter th col")
  row=input.question("Enter the row")
  try {
    let input = require("readline-sync");

    var array = [];
    for (let i = 0; i < row; i++) {
      array.push([]);
      for (let j = 0; j < col; j++) {
        var array2 = input.question("enter the elements");
        array[i][j] = array2;
      }
    }
    console.log(array);
  } catch (e) {
    console.log(e);
  }
};
