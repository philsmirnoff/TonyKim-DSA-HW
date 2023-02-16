// DAY 5 Assignmment
// Problem #1:
// Please construct the two classes with appropriate properties for the Node and SSL, then for the SSL, please write the methods for:
// - Shift()
// - Unshift()
// - Push()
// - Pop()
// - Get()
// - Set()
// - Insert()
// - Remove()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// shift()
shift() {
  if (!this.length) return;
  let removedHead = this.head;
  this.head = removedHead.next;
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return removedHead;
}

// unshift()
unshift(val) {
  let newNode = new Node(val);
  if (!this.length) {
  this.head = newNode;
  this.tail = newNode;
} else {
  newNode.next = this.head;
  this.head = newNode;
}
  this.length++;
  return this;
}


// push()
push(val) {
  let newNode = new Node(val);

  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}


// pop()
pop() {
  if (!this.length) return;
  let current = this.head;
  let newTail = current;

  while (current.next) {
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}
