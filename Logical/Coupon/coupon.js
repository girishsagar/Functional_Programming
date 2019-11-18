/**
 * @filename :coupon.js
 * @module: Logical Algorithm.
 * @input : Take a random number
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:14-Nov-2019
 */
const access = require("../Coupon/couponBl");
var random = access.coupon();
console.log(random);
