// let month = parseInt(process.argv[2])
// let year = parseInt(process.argv[3])
let input=require('readline-sync')
let month=input.questionInt("Enter the Month ")
let year=input.questionInt("Enter the Year ")
const printCal = require('../Calenderqueue/calbl')
calen = printCal.qCalen(month, year)
calen.forEach(ele => {
str = '';
let z = 7;
while (z--) {
str = str + ' ' + ele.dequeue(ele);
console.log(str)
}
console.log(str, '\n');
})