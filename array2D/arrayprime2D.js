/**
 * @file:arryprime2D.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :25-Nov-2019
 */
/**
 * @param {number}
 * @description :passing a user input values
 * @function :prime2D
 * @description :calling a  prime 2D function
 */
const access = require("./arryprimebl");
const input = require("readline-sync");
let number = input.question("enter the Number ");
access.prime2D(number);
