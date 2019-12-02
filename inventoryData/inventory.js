/**
 * @filename :inventory.js
 * @module: Object Oriented Programming
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:29-Nov-2019
 */
let util=require('../inventoryData/glossary')
let fs = require('fs');
let content = fs.readFileSync('/home/admin1/Girijavascript/object Orianted/inventoryData/inventory.json', 'utf8')
console.log(content);
let obj = JSON.parse(content);
 console.log('****************************');
 console.log("Resultant of Rice");
 console.log('****************************');
 let len = obj.Rice.length; 
for (let i = 0; i < len; i++) {
   let name = obj.Rice[i].name;
   let weight = obj.Rice[i].weight;
   let price = obj.Rice[i].price;
   let company=new util(name,weight,price);
   let total=company.total();
   console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
   console.log("Total price of rice is =" + total)
}
console.log('--------------------------');
console.log("Resultant of pulses");
console.log('---------------------------');
 leng = obj.Pulses.length;
for (let i = 0; i < leng; i++) {
   let name = obj.Pulses[i].name;
   let weight = obj.Pulses[i].weight;
   let price = obj.Pulses[i].price;
   let company = new util(name, weight, price);
   let total = company.total();
   console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
   console.log("Total price of rice is =" + total)
}
console.log('====================================');
console.log("Resultant of Wheats");
console.log('====================================');
 leng = obj.Wheats.length;
for (let i = 0; i < leng; i++) {
   let name = obj.Wheats[i].name;
   let weight = obj.Wheats[i].weight;
   let price = obj.Wheats[i].price;
   let company = new util(name, weight, price);
   let total = company.total();
   console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
   console.log("Total price of rice is =" + total)
}
