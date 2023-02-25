class Node {

  constructor {

  this.value. value = value;

  [this.next](http://this.next) = null;

  }

  }

  class Stack {

  constructor() {

  [this.top](http://this.top) = null;

  this.bottom = null;

  this.size = 0;

  }

  push(val) {

  const newNode = new Node(val);

  if (!this.size) {
  this.top = newNode;
  this.bottom = newNode;
  } else {
  const temp = this.top;
  this.top = newNode;
  this.top.next = temp;

}
this.size++;
return this;
  }


  pop() {
  if (!this.size) return null;
  const temp = this.top;
  if (this.size === 1) {
    this.top = null;
  this.bottom = null;
  }
  this.top = this.top.next;
  this.size--;
  return temp.value;
  }
  }


// Queue
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.length) return null;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return temp.val;
  }
}



// Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    }

    insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (val === current.val) return;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }

    find(val) {
      if (!this.root) return;
      let current = this.root;
      let found = false;
      while (current && !found) {
        // if (val === current.val) return true;
        if (val < current.val) {
          current = current.left;
        } else if (val > current.val) {
          current = current.right;
        } else {
          found = true;
        }
      }
      return current;;
    }
