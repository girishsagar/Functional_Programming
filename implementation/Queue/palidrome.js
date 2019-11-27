/**
 * @file:Palidrome.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :23-Nov-2019
 */
/**
 * @function :Deque
 * @description :importing an Deque function toc heck for an palidrome
 */
const input = require("readline-sync");
const access = require("../../data structureUtility/datstractureutility");
let pali = new access.Deque();
let str = input.question("enter the string ");
let checkPallindrome = pali.palindrome(str);
console.log(checkPallindrome);
