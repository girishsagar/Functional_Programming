/**
 * @filename :address.js
 * @module: Object Oriented Programming
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:29-Nov-2019
 */
let AddressBook = require("./adressBl");
let addressObject = new AddressBook();
//importing a json file using jsonParse() function
addressObject.jsonParse(
  "/home/admin1/Girijavascript/objectOrianted/adreessBook/adress.json"
);
//importing reline-sync to communicate with an user
const access = require("readline-sync");
let select = access.question(
  "Enter you choice\n 1: Add new Record\n 2: search for record  \n 3: modify \n 4: Delete record \n"
);
switch (parseInt(select)) {
  case 1:
    let fname = access.question("Enter your firstName  ");
    let lname = access.question("Enter your lastName ");
    let address = access.question("Enter the address ");
    let pno = access.questionInt(" Enter your contact number  ");
    let city = access.question("Enter the city ");
    let state = access.question("Enter the State ");
    let zipcode = access.questionInt("Enter the Zipcode ");
    // calling assAdress function to add an detail to the json file
    const data=addressObject.addAddress(fname, lname, address, pno, city, state, zipcode);
    console.log("contetn in js file",data);
    addressObject.jsonSave(data)
    break;
  //cllaing search function
  case 2:
    let name = access.question("Enter the name you want to search ");
    addressObject.search(name);
    break;
  // calling update function to modify an details
  case 3:
    let nameUpdate = access.question(
      "Enter the name you want to update/modify \n"
    );
    addressObject.update(nameUpdate);
    break;
  //delete function removing the details
  case 4:
    let nameDelete = access.question("Enter the name you want to Delete \n");
    addressObject.delete(nameDelete);
    break;
}
