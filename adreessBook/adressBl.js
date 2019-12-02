/**
 * execution default cmd>node.js
 * @description :adressbook holding a pepole details like firstname,lastname,adress,contactnumber,
 * state,zipcode etc...
 */
let fs = require("fs");
let r = require("readline-sync");
/**
 * @class :AdressBook
 * @description: creating a AdressBook class with having a two property content and fname
 */
class AddressBook {
  constructor() {
    this.content = null;
    this.fname = null;
  }
}
/**
 * @function :jsonParse()
 * @description :used to convert to javascriptObject
 */
AddressBook.prototype.jsonParse = fname => {
  try {
    this.fname = fname;
    this.content = JSON.parse(fs.readFileSync('/home/admin1/Girijavascript/object Orianted/adreessBook/adress.json'));
  } catch (err) {
    console.log("error" + err);
  }
};
/**
 * @function :addAddress
 * @description :it will add the details of the person to an a json file
 */
AddressBook.prototype.addAddress = (
  firstname,
  lastname,
  houseno = null,
  city = null,
  state = null,
  zipcode=null
) => {
  try {

    this.content.push({
      firstname: firstname,
      lastname: lastname,
      houseno: houseno,
      city: city,
      state:state,
      zipcode:zipcode
    });
    console.log("added succefully");
    console.log(this.content);
    return this.content;
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :sort
 * @description :used to sort details in ascending order
 */
AddressBook.prototype.sort = () => {
  try {
    this.content.sort((a, b) =>
      (a.firstname + a.lastname).localeCompare(b.firstname + b.lastname)
    );
    console.log("sorted succefully");
    console.log(this.content);
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :search
 * @description :searching for particular details specified by an user
 */
AddressBook.prototype.search = name => {
  try {
    this.content.forEach(el => {
      !(el.firstname + " " + el.lastname).search(name); //ternary operator
      console.log(el);
    });
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :delete
 * @description:deleting a details specified by an user
 */
AddressBook.prototype.delete = name => {
  try {
    names = name.split(" ");
    //terenary operator
    return name.length == 1
      ? name.push(" ")
      : (this.content = this.content.filter(
          ele => ele.firstname != names[0] || ele.lastname != names[1]
        )
          ? console.log("deleted succefully")
          : console.log(this.content));
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :update
 * @description :updating an old detail with new details
 */
AddressBook.prototype.update = name => {
  try {
    names = name.split(" ");
    if (names.length == 1) names.push(" ");
    this.content.forEach(ele => {
      if (ele.firstname == names[0] && ele.lastname == names[1]) {
        key = r.question("enter key you want to modify:");
        if (ele[key]) {
          data = r.question("enter data:");
          ele[key] = data;
        } else console.log("key not found");
      }
    });
    console.log("updated succefully");
    console.log(this.content);
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :jsonSave
 * @description :saving a detils back to jsonfile
 */
AddressBook.prototype.jsonSave = (data) => {
  try {
    console.log("data in save",data);
    
      //stringify() :convert javascript object into an string.

    fs.writeFileSync('/home/admin1/Girijavascript/object Orianted/adreessBook/adress.json', JSON.stringify(data));
  } catch (err) {
    console.log("error", err);
  }
};
/**
 * @function :getdata
 * @description :it will return the details to an user.
 */
AddressBook.prototype.getdata = () => this.content;

//export the class
module.exports = AddressBook;
