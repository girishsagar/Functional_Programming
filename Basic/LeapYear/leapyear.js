/**
 * @file:leapyear.js
 * @module: Basic Core
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:13-Nov-2019
 */
const access = require("../LeapYear/leapyearbl");
const input = require("readline-sync");
let userinput = input.question("enter the year");
access.leapyear(userinput);
