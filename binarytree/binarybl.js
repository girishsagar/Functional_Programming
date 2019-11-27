/**
 * Execution default cmd>node.js
 * @purpose :A binary tree is a tree which is characterized by any of
 *  the following properties:It can be empty (null).It can contain a root
 *  node which contain some value and two subtree, left subtree and right subtree,
 * which are also binary tree.
 */
/**
 * @class :Node
 * @description :defining a three property data,left and right
 */
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
/**
 * @class:BinarySearchTree
 * @description:defining a o ne private varible root.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   * @param {data} data
   * @function :insert
   * @description :craeting an one node with a vlaue data
   */
  insert(data) {
    var newNode = new Node(data);
    return this.root == null
      ? (this.root = newNode)
      : this.insertnode(this.root, newNode);
  }
  /**
   * @param {node,newNode}
   * @description:pasiing a value to the parameters
   * @function :insertnode
   * @description:It compares the given the roots
   */
  insertnode(node, newNode) {
    return newNode.data < node.data
      ? node.left == null
        ? (node.left = newNode)
        : this.insertnode(node.left, newNode)
      : node.right == null
      ? (node.right = newNode)
      : this.insertnode(node.right, newNode);
  }
  /**
   * @param {node}
   * @function :inorder
   * @description :this method traverse the tree node from leftnode-->rootnode-->rightnode
   */
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  /**
   * @param {node} node
   * @function :preorder
   * @description: this method will traverse the Tree node form rootnode-->leftnode-->rightnode
   */
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  /**
   * @param {node} node
   * @function :postorder
   * @description: this method will travers the Tree nods from leftnode-->rightnode-->rootnode
   */
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  /**
   * @function :getrootnode
   * @description :this method returns the rootnode of tree
   */
  getrootnode() {
    return this.root;
  }
}
/**
 * @module :Node,BinarySearchTree
 * @description :Exporting a two functions
 */
module.exports = {
  Node,
  BinarySearchTree
};
