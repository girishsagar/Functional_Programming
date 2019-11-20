/**
 * @file:guess.js
 * @module: Algorithm
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:20-Nov-2019
 */
var access = require("../Utility/Algorithmutility");
var input = require("readline-sync");
var number = input.question("enter The number:");
access.binarySort(number);
