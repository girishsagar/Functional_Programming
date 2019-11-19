/**
 * @filename :flip.js
 * @module: Basic Core.
 * @input :Enter the toss
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:19-Nov-2019
 */
const input = require("readline-sync");
const access = require("./flibl");
let toss = input.question("Enter the Toss ");
access.flipCoin(toss);
