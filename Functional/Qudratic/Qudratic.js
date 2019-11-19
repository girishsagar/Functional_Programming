/**
 * @Filename :qudratic.js
 * @module: Function Algorithm
 * @input :I/P -> N number of integer, and N integer input array.
 * @logic : delta = b*b - 4*a*c.Root 1 of x = (-b + sqrt(delta))/(2*a).Root 2 of x = (-b - sqrt(delta))/(2*a)
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:14-Nov-2019
 */
const access = require("../Qudratic/Qudraticbl");
let input = require("readline-sync");
let input2 = input.question("Enter the value of an input2 ");
let input3 = input.question("Enter the value of an input3");
access.qudratic(input1, input2, input3);
