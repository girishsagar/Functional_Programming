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
let input1 = input.questionInt("Enter the value of an input 1 ");
let input2 = input.questionInt("Enter the value of an input 2 ");
let input3 = input.questionInt("Enter the value of an input 3 ");
var output=access.qudratic(input1, input2, input3);
return output
