/**
 * Exexution default cmd>node.js
 * @purpose :To fin a give year is leap year are not
 */
exports.leapyear = userinput => {
  try {
    let year = userinput;
    if ((year % 400 == 0 && year & (100 !== 0)) || year % 4 == 0) {
      console.log("leap year");
    } else {
      console.log("not a leap year");
    }
  } catch (e) {
    console.log(e);
  }
};
