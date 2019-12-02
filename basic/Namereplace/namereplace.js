/**
 * @file:namereplace.js
 * @module: Basic Core
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:13-Nov-2019
 */
const access = require("../Namereplace/namereplacebl");
const input = require("readline-sync");
str = input.question("Enter the string  ");
access.nameReplace(str);
