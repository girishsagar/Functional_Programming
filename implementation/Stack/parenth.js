/**
 * @file:parenthses.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :23-Nov-2019
 */
const access = require("../Stack/parenthbl");
let input = require("readline-sync");
let expression = input.question("Enter the expression: ");
access.BalancedParentheses(expression);
