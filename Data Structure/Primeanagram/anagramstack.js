/**
 * Anagramstack
 */
const access = require("./anagstackbl");
const input = require("readline-sync");
let num = input.question("enter the Number ");
access.anag(num);

