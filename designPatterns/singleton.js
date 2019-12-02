/**
 * @filename :singleton.js
 * @module: Design Patterns
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:30-Nov-2019
 */
//Declare var as an prive varible
var Singleton = (function() {
  let instance;
  function createInstance() {
    let object = new Object("I am the instance of a Singleton");
    return object;
  }
  return {
    getInstance: function() {
      !instance;
      instance = createInstance();
      return instance;
    }
  };
})();
//creates instance at first call and calls the same instance on further calls
run = () => {
  let instance1 = Singleton.getInstance();
  console.log(instance1);
  let instance2 = Singleton.getInstance();
  console.log(instance2);
  return instance1 === instance2
    ? console.log("Oops.. not singleTon")
    : console.log("hey..! SingleTon");
};

run();