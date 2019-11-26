/**
 * Execution defaule cmd>node.js
 * @purpose : Read the Text from a file, split it into words and
 * arrange it as Linked List. Take a user input to search a Word
 * in the List. If the Word is not found then add it to the list,
 * and if it found then remove the word from the List. In the end 
 * save the list into a file
 */
class Node {
  //Creating a node
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  //creating aLinkedlist class
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Inserting data/item to an a list
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //Printing the List
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  //InsertLast
  insertLast(data) {
    let node = new Node(data);
    let current;
    //checking for list is Empty or not
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //Sorting the list in order
  sortedInsert(data) {
    let node   = new Node(data);
    let current = this.head;
    if (!this.head || node.data <= current.data) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      while (current.next && node.data >= current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  //Finding an Element in a file
  findElement(fdata) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.data == fdata) {
        console.log(fdata, "Found at:", count);
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }
  //inserting an Eleemnt in a given Position
  insertAt(data, pos) {
    let node = new Node(data);
    let current = this.head;
    let count = 0;
    if (pos == 0) {
      this.head = node;
      node.next = current;
      this.size++;
    } else if (0 < pos && pos <= this.size) {
      while (pos > count + 1) {
        current = current.next;
        count++;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    } else {
      console.log(
        "Position Entered is out of range, please enter number between 0 and",
        this.size
      );
    }
  }
  //Deleting the First Elenment in a Node
  deleteFirst() {
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    } else {
      return null;
    }
    this.size--;
  }
  //Deleting an a elemnt at Last
  deleteLast() {
    if (this.head) {
      let current = this.head;
      if (current.next == null) {
        this.head = null;
      } else {
        while (current.next.next) {
          current = current.next;
        }
        current.next = null;
      }
      this.size--;
    } else {
      console.log("Nothing to delete");
    }
  }
  getArr() {
    //q.enqueue(data1);
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  deleteElement(data) {
    let current = this.head;
    if (!this.head) {
      return false;
    } else if (this.head.data == data) {
      this.head = current.next;
      this.size--;
    } else {
      let prev = null;
      while (current.data != data) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }
  sortedInsertwodupli(data) {
    let node = new Node(data);
    let current = this.head;
    if (this.head && node.data == current.data) {
      console.log("already exists");
    } else if (!this.head || node.data < current.data) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else if (current.next && node.data == current.next.data) {
      console.log("already exists");
    } else {
      while (current.next && node.data > current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  sortedInstDupFalsOrAdd(data) {
    let node = new Node(data);
    let current = this.head;
    if (this.head && node.data == current.data) {
      this.deleteElement(data);
    } else if (!this.head || node.data < current.data) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else if (current.next && node.data == current.next.data) {
      this.deleteElement(data);
    } else {
      while (current.next && node.data > current.next.data) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  isEmpty() {
    this.isEmpty();
    {
      return this.size == 0;
    }
  } 
}

module.exports = {
  LinkedList,
  Node
};
