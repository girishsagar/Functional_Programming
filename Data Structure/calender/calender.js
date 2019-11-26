/**
 * @file:calender.js
 * @module:Data Stracture
 * @author :Girish Sagar <girishsagar51@gmail.com>
 * @version :12.11.1 (node)
 * @since :25-Nov-2019
 */

const input = require("readline-sync");
const dow = require("../Calender/Dayofweak");
const LY = require("../Calender/Leapyear");
const cal = require("../Calender/calenderbl");
let m = input.questionInt("Enter the Month ");
let y = input.questionInt("Enter the year ");
if (0 < m <= 12 && 0 < y <= 9999) {
  d0 = dow.date(1, m, y);
  console.log("day is ", d0);
}
let md;
if (LY.leapyear(y) && m == 2) {
  md = 29;
} else if (!LY.leapyear(y) && m == 2) {
  md = 28;
} else if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
  md = 31;
} else if ([4, 6, 9, 11].includes(m)) {
  md = 30;
}
data = cal.calendar(d0, md);

data.forEach(element => {
  str = "";
  element.forEach(el => {
    str = str + el + " ";
  });
  console.log(str, "\n");
});
