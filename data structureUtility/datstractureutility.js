/**
 * Execution default cmd>node.js
 * @purpose : Desc -> Take an Arithmetic Expression such as
 * (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used t0
 * order the performance of operations. Ensure parentheses must appear
 * in a balanced fashion.
 */
/**
 * @class:Node
 * @description :Creating a Empty class with twd varible data and previous
 */
class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}
/**
 * @class :Stack
 * @description:creating a stack class with two varible top and size
 */
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  /**
   *
   * @param {data}
   * @description :user is enter an input
   * @function :push
   * @description :storing/inserting a data into a statck
   */
  push(data) {
    var node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }
  /**
   * @function :pop
   * @description :removing an element from the Stack
   */
  pop() {
    let temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }
  /**
   * @function:isEmpty
   * @description :it is checking for a stack is empty are not
   */
  isEmpty() {
    console.log(this.size === 0);
  }
}
/**
 * Execution default cmd>node.js
 * @purpose :Create a Program which creates Banking Cash Counter  where people come
 * in to deposit Cash and withdraw Cash.
 */
class QNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * @class ;Queue
 * @description ;passing an three private a varibles front,rear and size
 */
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  /**
   * @function:isEmpty
   * @description :it is checking for a stack is empty are not
   */
  isEmpty = () => {
    return this.size;
  };
  /**
   * @function:enqueue
   * @description :it is used to insertb an data from the user
   */
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
  /**
   * @function:deque
   * @description :the dequeue function used remove the element from the queue
   */
  dequeue = () => {
    let data = this.front.data;
    this.front.data = this.front.next;
    if (this.isEmpty()) {
      this.rear = null;
    }
    this.size--;
    return data;
  };
  /**
   * @function: size
   * @description :check for an queue is full are not
   */
  size = () => {
    return this.size;
  };
}

/**
 * Execution default cmd>node.js
 * @purpose :A palindrome is a string that reads the same  forward and backward,
 * for example, radar, toot, and madam. We would like to construct an algorithm
 */
/**
 * @class;Deque
 * @description ;creating an empty class with one defaule varible items
 */
class Deque {
  constructor() {
    this.items = [];
  }
  /**
   * @function:isEmpty
   * @description :it is checking for a stack is empty are not
   */
  isEmpty = () => {
    return !Boolean(this.items.length);
  };
  /**
   * @function:addFront
   * @description :adding an element from the front side
   */
  addFront = item => {
    this.items.unshift(item);
  };
  /**
   * @function:addRear
   * @description :used to add data at the rear end
   */
  addRear = item => {
    this.items.push(item);
  };
  /**
   * @function:removeFront
   * @description :it is removing an Element from front end side*/
  removeFront = () => {
    return this.items.shift();
  };
  /**
   * @function:removeRear
   * @description :it will remove the element from rear side
   */
  removeRear = () => {
    return this.items.pop();
  };
  /**
   * @function:size
   * @description :check for an size in queue
   */
  size = () => {
    return this.items.length;
  };
  /**
   * @function :palindrome
   * @description :
   */
  palindrome = str => {
    let charDeque = new Deque();
    for (let i = 0; i < str.length; i++) {
      charDeque.addRear(str[i]);
    }
    let compare = true;
    while (charDeque.size() > 1 && compare) {
      let first = charDeque.removeFront();
      let last = charDeque.removeRear();
      return first !== last ? false : true;
    }
  };
}
module.exports = {
  Node,
  Stack,
  Deque,
  Queue
};
