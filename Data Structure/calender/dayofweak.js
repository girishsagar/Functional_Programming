/**
 * Execution defaulr cmd>node.js
 * @purpose :To the Util Class add dayOfWeek static function that takes a
 *  date as input and prints the day  of the week that date falls on.
 */
const input = require("readline-sync");
exports.date = (day, month, year) => {
  try {
    let year1 = year - (14 - month) / 12;
    let yearout = year1 + year1 / 4 - year1 / 100 + year1 / 400;
    let month1 = month + 12 * ((14 - month) / 12) - 2;
    let day1 = (day + yearout + (31 * month1) / 12) % 12;
    return day1;
  } catch (e) {
    console.log(e.messgae);
  }
};
