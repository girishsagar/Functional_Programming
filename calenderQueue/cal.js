/**
 * @file:cal.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :27-Nov-2019
 */
 
let input = require("readline-sync");
let month = input.questionInt("Enter the Month ");
let year = input.questionInt("Enter the Year ");
const printCal = require("./calBl");
calen = printCal.qCalen(month, year);
calen.forEach(ele => {
  str = "";
  let z = 7;
  while (z--) {
    str = str + " " + ele.dequeue(ele);
    console.log(str);
  }
  console.log(str, "\n");
});
