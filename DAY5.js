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

// get()
get(index) {
  if (index < 0 || index >= this.length) return null;
  let counter = 0;
  let current = this.head;

  while (counter !== index) {
    current = current.next;
    counter++;
  }
  return current;
}

// set()
set(index, val) {
  let foundNode = this.get(index);
  if (foundNode) {
    foundNode.val = val;
    return this;
  }
  return false;
}

// insert()
insert(index, val) {
  if (index < 0 || index > this.length) return;
  if (index === this.length) return this.push(val)
  if (index === 0) return this.unshift(val);

  let newNode = new Node(val);
  let prev = this.get(index - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return this;
}

// remove()
remove(index) {
  if (index < 0 || index >= this.length) return;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  let prev = this.get(index - 1);
  let removed = prev.next;
  prev.next = removed.next;
  this.length--;
  return removed;
}
}

// Problem #2:
// Given a linked list, create a method called mostFrequent(this)
// that returns the node that occurs the most in the list:
// For example, given the following linked list: // 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null
// This function should return the node of 2.
// The function should take in a argument of a linked list and // return a value of the node that occurs the most often.
// ** this – referrers to the linked list passed into the method

mostFrequent(this) {
  let current = this.head;
  let mostFrequent = 0;
  let mostFrequentNode = null;
  let count = {};

  while (current) {
    if (count[current.val]) {
      count[current.val]++;
    } else {
      count[current.val] = 1;
    }
    if (count[current.val] > mostFrequent) {
      mostFrequent = count[current.val];
      mostFrequentNode = current;
    }
    current = current.next;
  }
  return mostFrequentNode;
}

// Bonus Problem:
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store. Notice that you may not slant the container.
// Example 1: (SEE PICTURE BELOW!)
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:
// Input: height = [1,1]
// Output: 1

// we can solve this using two pointers pattern
const maxArea = (height) => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

// Time Complexity: O(n)
// Space Complexity: O(1)


class Node {

constructor(val) {

this.val = val;

this.next = null;

this.prev = null;

}

}

class DoublyLinkedList {

constructor() {

this.head = null;

this.tail = null;

this.length = 0;

}


unshift(val) {
  let newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  }
  else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length++;
  return this;
}

get (index) {
  if (index < 0 || index >= this.length) return null;
  let counter = 0;
  let current = this.head;

  if (index <= this.length / 2) {
    while (counter !== index) {
      current = current.next;
      counter++;
    }
  } else {
    counter = this.length - 1;
    current = this.tail;
    while (counter !== index) {
      current = current.prev;
      counter--;
    }
  }
  return current;
}

insert(index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) return this.unshift(val);
  if (index === this.length) return this.push(val);

  let newNode = new Node(val);
  let prev = this.get(index - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = temp;
  temp.prev = newNode;
  this.length++;
  return this;
}

remove(index) {
  if (index < 0 || index >= this.length) return;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  let removed = this.get(index);
  removed.prev.next = removed.next;
  removed.next.prev = removed.prev;
  removed.next = null;
  removed.prev = null;
  this.length--;
  return removed;
}
}




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
