const input = require("readline-sync");

let list = require("../../DatastractureUtility/linkedlistutility");
let fs = require("fs");
let file = fs.readFileSync("../DatastractureUtility/file2.txt");

let olist = new list.LinkedList(); //object
fileArr = file.toString().split(" ");
console.log(fileArr);

try {
  fileArr.forEach(element => {
    olist.insertFirst(parseInt(element));
    olist.sortedInsert(parseInt(element));
  });
  olist.printList();
  let num = input.questionInt("Enter the number to found ");

  ifsearchDelElseadd = num => {
    if (olist.findElement(num)) {
      olist.deleteElement(num);
    } else {
      console.log("not found ");
      olist.sortedInsert(num);
      olist.sortedInsert(num);
    }
    arr = olist.getArr();
    fs.writeFileSync("../DatastractureUtility/file2.txt", arr.join(" "));
    olist.printList();
  };
  ifsearchDelElseadd(num);
} catch (e) {
  console.log(e.message);
  console.log(e.name);
}
