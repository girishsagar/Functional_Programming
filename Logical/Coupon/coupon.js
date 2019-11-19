/**
 * @filename :coupon.js
 * @module: Logical Algorithm.
 * @input : Take a random number
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:14-Nov-2019
 */
const access = require("../Coupon/couponBl");
const input = require("readline-sync");
let number = input.question("Enter the number to Find a random Numbers  ");
var random = access.coupon(number);
console.log(random);
