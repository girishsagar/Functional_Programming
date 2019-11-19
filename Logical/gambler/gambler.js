/**
 * @filename :gambler.js
 * @module: Function Algorithm.
 * @input :$Stake, $Goal and Number of times
 * @Logic : Play till the gambler is broke or has won
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:14-Nov-2019
 */
const get = require('../gambler/gamblerBl');
const input = require("readline-sync");
let stake = input.question("Enter the stake ");
let goal = input.question("Enter the goal ");
let trial = input.question("Number of Traials ");
get.gambler(stake, goal, trial);
