/**
 * @filename :clinic.js
 * @module: Object Oriented Programming
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:30-Nov-2019
 */
//importing an readline-sync
const access = require("readline-sync");
let fs = require("fs");
//Reading an a file from by using readfile-sync
let content = fs.readFileSync(
  "/home/admin1/Girijavascript/object Orianted/clininique/clinicDetail.json",
  "utf8"
);
let obj = JSON.parse(content);
console.log(content);
console.log("---------------------------");
console.log("Doctore has to be seen only 5 Patients per day at avilable time");
console.log("----------------------------");
let len = obj.Patient.length;
for (i = 0; i < len; i++) {
  i < 5;
  let name = obj.Patient[i].name;
  let id = obj.Patient[i].id;
  let mobNo = obj.Patient[i].phone;

  console.log(
    "Name : " + name + " , " + "id : " + id + " , " + "MobNo : " + mobNo
  );
}
