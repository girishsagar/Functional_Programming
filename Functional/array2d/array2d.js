/**
 * @file: array2D.js.
 * @module: Function Algorithm
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:13-Nov-2019
 */
const access = require("../array2d/array2dbl");
const input = require("readline-sync");
col = input.question("Enter th col");
row = input.question("Enter the row");
access.array2d(row, col);
