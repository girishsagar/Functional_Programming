/**
 * 
 */
filesearch = findword => {
  const fs = require("fs");
  let file = fs.readFileSync("../../DatastractureUtility/file.txt");
  let ar1 = file.toString().split(" ");
  let obj = require("../../DatastractureUtility/linkedlistutility");
  var Llist = new obj.LinkedList();
  ar1.forEach(element => {
    Llist.insertLast(element);
  });
  Llist.printList();
  try {
    if (!Llist.findElement(findword)) {
      Llist.insertLast(findword);
      arr = Llist.getArr();
      file1 = fs.writeFileSync("../../Utility/file.txt", arr.join(" "));
      console.log("Not found!");
    } else {
      Llist.deleteElement(findword);
      arr = Llist.getArr();
      file1 = fs.writeFileSync("../../Utility/file.txt", arr.join(" "));
    }
  } catch (e) {
    console.log(e.name);
    console.log(e.message);
  }
};
module.exports = {
  filesearch
};
