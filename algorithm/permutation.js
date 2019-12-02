/**
 * @file:permutation.js
 * @module: Algorithm
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:20-Nov-2019
 */
const input = require("readline-sync");
const access = require("../Utility/Algorithmutility");
var permu = input.question("Enter the num");
var result = access.permutation(permu);
console.log(result);
