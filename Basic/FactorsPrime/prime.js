/**
 * @file: prime.js.
 * @module: Basic core
 * @author: Girish Sagar
 * @version:(npm) 6.11.3
 * @since:13-Nov-2019
 */
const input = require("readline-sync");
const access = require("../FactorsPrime/primebl");
let number = input.question("Enter the number to find PrimeFactors ");
access.primefact(number);
