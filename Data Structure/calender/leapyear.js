/**
 * Execution default cmd>node.js
 * @purpose To find an a LeapYear
 */
exports.leapyear = userinput => {
  try {
    let year = userinput;
    if ((year % 400 == 0 && year % 100 !== 0) || year % 4 == 0) {
      console.log("leap year " + year);
    } else {
      console.log(" Not a leap year " + year);
    }
  } catch (e) {
    console.log(e);
  }
};
