/**
 * @file:anagrampalidrome.js
 * @module: Algorithm
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:20-Nov-2019
 */

const access = require("../Utility/Algorithmutility");
const input = require("readline-sync");
var anagram = input.question("Enter the String");
var result = access.anagramPalindrome(anagram);
console.log(result);
