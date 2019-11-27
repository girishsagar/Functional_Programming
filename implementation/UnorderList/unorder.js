/**
 * @file:Unorder.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :21-Nov-2019
 */
const file = require("./Unorderbl");
const input = require("readline-sync");
let findword = input.question("Enter the word to find:");
file.filesearch(findword);
//Crearting one class Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
