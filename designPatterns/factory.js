/**
 * @filename :factory.js
 * @module: Design pattern (Creational Pattern)
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:02-Dec-2019
 */
/**
 * @class:Company
 * @description:defining a company class having a one property " Key"
 */
class Company {
  constructor(key) {
    this.key = key;
  }
}
/**
 * @class:Pc
 * @description :Extending an parent class property and with two new property name and type (Hierarchical) inheritance
 */
class Pc extends Company {
  constructor(key, name) {
    super(key);
    this.name = name;
    this.type = "Product PC";
  }
}
/**
 * @class:Laptop
 * @description :Extending an parent class property and with one new property name (Hierarchical) inheritance
 */
class Laptop extends Company {
  constructor(key, name) {
    super(key);
    this.name = name;
    this.type = "Product Laptop";
  }
}
/**
 * @class:CompanyServer
 * @description :Extending an parent class property and with two new property name,type (Hierarchical) inheritance
 */
class CompanyServer extends Company {
  constructor(key, name) {
    super(key);
    this.name = name;
    this.type = "Product server";
  }
}
/**
 * @function:computeFactory
 * @description;adding new function inside acomputefactory
 */
function computerFactory() {
  this.device = (key, name, type) => {
    switch (type) {
      case 1:
        return new Pc(key, name);
        break;
      case 2:
        return new Laptop(key, name);
        break;
      case 3:
        return new CompanyServer(key, name);
    }
  };
}
/**
 * @function:say
 * @description:printing the deatails
 */
say = () => {
  console.log(this.key + " The product " + this.name + " belongs " + this.type);
};
//creating an instance of an object using "new " keyword
const cf = new computerFactory();
let factory = [];
factory.push(cf.device("C1", "zebronic", 1));
factory.push(cf.device("P1", "lenevo", 2));
factory.push(cf.device("S1", "shell", 2));

factory.forEach(ele => {
  say.call(ele);
});
