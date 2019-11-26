/**
 * @file:Bankcash.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :22-Nov-2019
 */
let list = require("../../DatastractureUtility/datstractureutility");
let q=new list.Queue();
let input = require("readline-sync");
let num1 = input.question("Enter the no of input == ");
for (let i = 0; i < num1; i++) {
  let data1 = input.question("Enter the data");
  q.enqueue(data1);
}
let num2 = input.question("Enter the no of output   ");
for (let i = 0; i < num2; i++) {
  q.dequeue(i);
  console.log("The Dequed item is == " ,i)
}
