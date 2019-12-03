/*************************************************
 * @filename :prototype.js
 * @module: Design Patterns (Creation pattern)
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:02-Dec-2019
 *************************************************/
/**
 * @function student
 * @description:declaring a three parameters
 *
 * @param {name} name
 * @param {age} age
 * @param {add} add
 */

student = (name, age, add) => {
  this.name = name;
  this.age = age;
  this.add = add;
  this.say = () => {
    console.log(
      `Student name is ${this.name} and age is ${this.age} and address is ${this.add} `
    );
  };
};
//function to show prototype
function customerPrototype(proto) {
  this.proto = proto;
  this.clone = function() {
    var std = new student();
    std.name = proto.name;
    std.age = proto.age;
    std.add = proto.add;
    return std;
  };
}
//instantiating student is costly so we will use customerPrototype each time
function run() {
  var proto = new student("Girish", "25", "mysore");
  var prototype = new customerPrototype(proto);
  var std = prototype.clone();
  std.say();
  proto.say();
  var s = prototype.clone();
  s.say();
}
run();
