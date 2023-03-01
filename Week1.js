// Week 1 Assignment

// QUEUES

// Challenge 1: Draw and explain in a diagram of how the queue data structure works.

Queues: FIFO (First In First Out)

In queue, elements are added to the back and removed from the front. The first element added to the queue will be the first element removed from the queue.

the great example of queue is a line of people who doesnt have reservation, who are walk-ins, waiting for a table in the restaurant. The first person in line is the first person to get table. The last person in line is the last person to get the table.

good illustrative example will be push() and shift() methods in array, that adds element to the end of the array and removes the first element of the array.

queue = [1, 2, 3, 4, 5]
queue.push(6) // [1, 2, 3, 4, 5, 6]
queue.shift() // [2, 3, 4, 5, 6]


// Challenge 2: create 2 methods that are will:
// • enqueue (insert a element at the end of the queue)
// • dequeue (remove a element from the start of the queue)

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


// Challenge 3: Create 3 additional methods that are:
// • peek (retrieves the element at the start of the queue, WITHOUT removing it)
// • isEmpty (checks if the queue is empty – should return true or false)
// o hint - what property of the queue can you use to build this methodJ?
// • printQueue (prints the elements in the queue)

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.size === 0;
  }
  printQueue() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}


//---------------------------------------------------------//

// STACKS
// Challenge 1: Draw and explain in a diagram of how the stack data structure works.

Stacks: LIFO (Last In First Out)

In stack, elements are added to the top and removed from the top. The last element added to the stack will be the first element removed from the stack.

the great example of stack is a stack of plates. The last plate you put on the stack is the first plate you take off the stack.

good illustrative example will be push() and pop() methods in array, that adds element to the end of the array and removes the last element of the array.

stack = [1, 2, 3, 4, 5]
stack.push(6) // [1, 2, 3, 4, 5, 6]
stack.pop() // [1, 2, 3, 4, 5]

// Challenge 2: Create 2 methods that are:
// • push (insert a element to the top of the stack)
// • pop (remove a element from the top of the stack)

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.size) return null;
    let temp = this.top;
    if (this.size === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.size--;
    return temp.val;
  }
}

// Challenge 3: Create 3 additional methods that are:
// • peek (retrieves the element at the top of the stack, WITHOUT removing it)
// • isEmpty (checks if the stack is empty – should return true or false)
// o hint - what property of the stack can you use to build this method?
// • printStack (prints the elements in the stack)

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return this.size === 0;
  }
  printStack() {
    let arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

// ---------------------------------------------------------//

// BINARY SEARCH TREES

// Challenge 1: Given the following illustrations, identify each tree:

Tree #1: Binary Tree
Tree #2: Binary Search Tree
Tree #3: Binary Tree
Tree #4: Binary Search Tree
Tree #5: Tree
Tree: Not applicable


// Challenge 2:  Create 3 methods that are:
// • insert (inserts a node as a child of the given parent node)
// • find (retrieves a given node)
// • contains (returns a Boolean if a given node exists)


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}


// Challenge 3: Create 1 additional method that is:
// • remove (removes a node and its children from the BST)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
  this.root = null;
}
}

remove(value) {
  if (!this.root) return false;
  let current = this.root;
  let parent = null;
  let found = false;
  while (current && !found) {
    if (value < current.value) {
      parent = current;
      current = current.left;
    } else if (value > current.value) {
      parent = current;
      current = current.right;
    } else {
      found = true;
    }
  }
}
