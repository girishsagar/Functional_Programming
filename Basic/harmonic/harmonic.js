/**
 * @file: harmonic.js.
 * @module: BVasic core
 * @author: Girish Sagar
 * @version:(npm) 6.11.3
 * @since:13-Nov-2019
 */

const acess = require("../harmonic/harmonicbl");
var input = require("readline-sync");
let number = input.question("Enter the number to find harmonic ");
acess.harmonic(number);
