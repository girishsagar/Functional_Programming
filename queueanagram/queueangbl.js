/**
 * Execution default cmd>node.js
 * @purpose :Add the Prime Numbers that are Anagram in the Range of0 - 1000
 * in a Queue using the Linked List and Print the Anagrams from theQueue
 */
//creating Deque class with one varaible item
class Deque {
  constructor() {
    this.items = [];
  }
  /**
   * @function :isEmpty
   * @description:check from queue is empty or not
   */
  isEmpty = () => {
    return !Boolean(this.items.length);
  };
  /**
   * @function :addFront
   * @description:adding a data to front
   */
  addFront = item => {
    this.items.unshift(item);
  };
  /**
   * @function :addRear
   * @description :adding a data at last
   */
  addRear = item => {
    this.items.push(item);
    Console.log(item);
  };
  /**
   * @function :removeFront
   * @description :removing a data at front
   */
  removeFront = () => {
    return this.items.shift();
  };
  /**
   * @function :removeFront
   * @description :removing a data at last
   */
  removeRear = () => {
    return this.items.pop();
  };
  /**
   * @function :size
   * @description :checking for queue size
   */
  size = () => {
    return this.items.length;
  };
  /**
   * @function :printqueue
   * @description :printing a data/items in queue
   */
  printqueue() {
    var str = " ";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
  /**
   * @function :prime
   * @description :checking for given number is prime number are not
   */
  prime = number => {
    var ch = new Deque();
    try {
      if (number == 0 || number == 1) {
        return false;
      }
      for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
      }
      return true;
    } catch (e) {
      console.log(e);
    }

    var compare = true;
    while (ch.size() > 1 && compare) {
      var first = ch.removeFront();
      var last = ch.removeRear();
      if (first !== last) {
        compare = false;
      }
      return compare;
    }
    console.log(this.printqueue(i));
  };
}
module.exports = {
  Deque
};
