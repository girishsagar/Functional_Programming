/**
 * Execution default cmd>node.js
 * @purpose :Add the Prime Numbers that are Anagram in the Range of0 - 1000 
 * in a Queue using the Linked List and Print the Anagrams from theQueue
 * 
 */
class Deque {
  constructor() {
    this.items = [];
  }

  isEmpty = () => {
    return !Boolean(this.items.length);
  };

  addFront = item => {
    this.items.unshift(item);
  };

  addRear = item => {
    this.items.push(item);
    Console.log(item);
  };

  removeFront = () => {
    return this.items.shift();
  };

  removeRear = () => {
    return this.items.pop();
  };

  size = () => {
    return this.items.length;
  }
  printqueue()
  {
    var str=' ';
    for(var i=0;i<this.items.length;i++)
    str+=this.items[i] + " "
    return str;
  }
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
      // ch.addRear(i)
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
   HTMLFormControlsCollection.log(this.printqueue(i))
  };
}
module.exports = {
  Deque
};
