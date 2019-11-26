/**
 * Execution defaulr cmd>node.js
 * @purpose :To the Util Class add dayOfWeek static function that takes a
 *  date as input and prints the day  of the week that date falls on.
 */
const input = require("readline-sync");
exports.date = (day, month, year) => {
  try {
    var y0 = year - (14 - month) / 12;
    var x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
    var m0 = month + 12 * ((14 - month) / 12) - 2;
    var d0 = (day + x + (31 * m0) / 12) % 12;
    return d0;
  } catch (e) {
    console.log(e.messgae);
  }
};
