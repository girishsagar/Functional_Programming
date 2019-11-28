/**
 * @file:anagram.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :23-Nov-2019
 */

const access = require("./anagstackbl");
const input = require("readline-sync");
let num = input.question("enter the Number ");
access.anag(num);

