/**
 * Execution default cmd>node.js
 * @purpose : Desc -> Take an Arithmetic Expression such as
 * (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used t0
 * order the performance of operations. Ensure parentheses must appear
 * in a balanced fashion.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  //insert element into the stack
  push(data) {
    var node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size +=1;
    return this.top;
  }
  //remove element to top of the stack
  pop() {
    let temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }
  isEmpty() {
    console.log(this.size === 0);
  }
}
/**
 * Execution default cmd>node.js
 * @purpose :Create a Program which creates Banking Cash Counter  where people come 
 * in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue 
 * to either deposit or withdraw money and dequeue the people.Maintain the Cash Balance.
 */
class QNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty = () => {
    return this.size;
  };
  enqueue = data => {
    // let node = new QNode(data);
    let node = new Queue(data);
    if (this.rear == null) {
      this.rear = node;
      this.front = node;
      this.rear.next = node;
      this.rear = node;
    }
  };
  dequeue = () => {
    let data = this.front.data;
    this.front.data = this.front.next;
    if (this.isEmpty()) {
      this.rear = null;
    }
    this.size--;
    return data;
  };
  size = () => {
    return this.size;
  };
}

/**
 * Execution default cmd>node.js
 * @purpose :A palindrome is a string that reads the same  forward and backward,
 * for example, radar, toot, and madam. We would like to construct an algorithm
 * to input a string of  characters and check whether it is a palindrome.
 * I/P -> Take a String as an Inpu
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
  };

  removeFront = () => {
    return this.items.shift();
  };

  removeRear = () => {
    return this.items.pop();
  };

  size = () => {
    return this.items.length;
  };

  palindrome = str => {
    var charDeque = new Deque();
    for (let i = 0; i < str.length; i++) {
      charDeque.addRear(str[i]);
    }
    var compare = true;
    while (charDeque.size() > 1 && compare) {
      var first = charDeque.removeFront();
      var last = charDeque.removeRear();
      if (first !== last) {
        compare = false;
      }
    }
    return compare;
  };
}

module.exports = {
  Node,
  Stack,
  Deque,
  Queue
};
