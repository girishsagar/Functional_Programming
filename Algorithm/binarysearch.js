/**
 * @file: binarysearch.js.
 * @module: Algorithm
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:15-Nov-2019
 */

const access = require("../Utility/utility");
const input = require("readline-sync");
let array = input.question("Enter the array ");
let search = input.question("Enter the search value ");
var result = access.binarySearch(array, search);
if (result == -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index:" + result);
}
