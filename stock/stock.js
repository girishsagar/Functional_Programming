/**
 * @filename :stock.js
 * @module: Object Oriented Programming
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:30-Nov-2019
 */
//importing a logic file and json file 
const  list=require('../stock/stockBl')
let fs=require('fs')
let util=fs.readFileSync('/home/admin1/Girijavascript/object Orianted/stock/stock.json', 'utf8')
let obj=JSON.parse(util)
console.log(util);
console.log('*****************************');
console.log("the stock Report is ")
console.log('*****************************');
let len = obj.Stock.length; 
for(let i in len) //ternary operator
{
  let StockName = obj.Stock[i].StockName;
  let NumOfShares = obj.Stock[i].NumOfShares;
  let SharePrice = obj.Stock[i].SharePrice;
  let company=new list(StockName,NumOfShares,SharePrice);
  let total=company.total();
  //adding a stocks price and number of shares
  //displaying all details 
  console.log("Name : " +  StockName + " , " + "NumOfShares : " + NumOfShares + " , " + "SharePrice : " +SharePrice);
  console.log("Total value of stock is =" + total)
}
