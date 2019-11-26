/**
 * Execution default cmd>node.js
 * @purpose :A binary tree is a tree which is characterized by any of
 *  the following properties:It can be empty (null).It can contain a root
 *  node which contain some value and two subtree, left subtree and right subtree,
 * which are also binary tree.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {  
    var newNode = new Node(data);
    if (this.root == null) this.root = newNode;
    else this.insertnode(this.root, newNode);
  }
  insertnode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) node.left = newNode;
      else this.insertnode(node.left, newNode);
    } else {
      if (node.right == null) node.right = newNode;
      else this.insertnode(node.right, newNode);
    }
  }
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  /**
   * 
   * @param {*} node 
   */
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  getrootnode() {
    return this.root;
  }
}

module.exports = {
  Node,
  BinarySearchTree
};

// var bst = new BinarySearchTree();
// bst.insert(25);
// bst.insert(45);
// bst.insert(10);
// bst.insert(85);

// var root = bst.getrootnode();
// console.log("the inoinsert(data1)
// console.log(" the preoder is ");
// var pre = bst.preorder(root);
