/**
 * @file: power.js.
 * @module: Algorithm
 * @author: Girish Sagar
 * @version:(npm) 6.11.3
 * @since:15-Nov-2019
 */
const access = require("../Powerof2/powerbl");
const input = require("readline-sync");
let number = input.question("Enter to fin to the power numbrer");
var power=access.powerof(number);

