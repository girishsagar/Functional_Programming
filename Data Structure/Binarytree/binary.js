/**
 * @file:binary.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :23-Nov-2019
 */
const input = require("readline-sync");
const access = require("../Utility/binaryutil");

let Bst = new access.BinarySearchTree();

let num = input.question("Enter the no of inputs:");
for (let i = 0; i < num; i++) {
  let data = input.question("Enter the data:");
  Bst.insert(data);
}
let root = Bst.getrootnode();
console.log("the Post-Order is ");
Bst.inorder(root);
console.log("The pre-order is ");

Bst.preorder(root);
console.log("The Post-Order is ");
Bst.postorder(root);

// var bst = new BinarySearchTree();
// bst.insert(25);
// bst.insert(45);
// bst.insert(10);
// bst.insert(85);
