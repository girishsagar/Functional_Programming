/**
 * Execution default cmd>node.js
 * @description :to find an a month and put into an array
 * @requires :importing an suprrting  method from an file
 * @requires :importing a datastracture to store a value in queue methos
 */
const Qu = require('../data structureUtility/datstractureutility');
const leapYear = require("../Calender/Leapyear");
const weekDay = require("../Calender/Dayofweak");
qCalen = (month, year) => {
  year1 = leapYear.leapyear(year);
  Weak = weekDay.date(1, month, year);
  let calen = [];
  let days = ["Sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let k = 1;
  /**
   * @varible :monthdays
   * @descrption :the month days are used to print a how many days
   */
  if (leapYear.leapyear(year) && month == 2) {
    var monthdays = 29;
  } else if (!leapYear.leapyear(year) && month == 2) {
    monthdays = 28;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    monthdays = 31;
  } else if ([4, 6, 9, 11].includes(month)) {
    monthdays = 30;
  }
  days.forEach((ele, i) => {
    calen[i] = new Qu.Queue();
    calen[i].enqueue(ele);
  });
  for (i = 1; i < 7; i++) {
    for (j = 0; j < 7; j++) {
      if (k <= monthdays && j >= Weak) {
        if (k > 9) calen[j].enqueue(k + " ");
        else calen[j].enqueue(" " + k + " ");
        k++;
        Weak = Weak - 7;
      } else calen[j].enqueue(" ");
    }
  }
  return calen;
};
module.exports = {
  qCalen
};
