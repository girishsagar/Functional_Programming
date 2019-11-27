/**
 * @file:queueanagram.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :25-Nov-2019
 */
const input = require("readline-sync");
const access = require("./queueangbl");
let prim = new access.Deque();
let str = input.question("enter the Number ");
let primeanag = prim.prime(str);
console.log(primeanag);
console.log(prim.printqueue());
