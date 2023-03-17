// Week 3 Assignment


// Challenge 1: Given the following trees, label them as:
// • Binary Search Tree - tree #1
// • Max Binary Heap - tree #2
// • Min Binary Heap - tree #3


//--------------------------------------//

// Challenge 2: Given the following max binary heap trees, create a function called maxValue() that returns the VALUE of the largest number in the tree.

class MaxBinaryHeap {
  constructor() {
    this.values = [6, 5, 3, 4, 2, 1];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  maxValue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIndex < length) {
            leftChild = this.values[leftChildIndex];
            if (leftChild > element) {
                swap = leftChildIndex;
            }
        }
        if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                swap = rightChildIndex;
            }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
    }
}
}


//--------------------------------------//

// Challenge 3: Given the following min binary heap trees, create a function called minValue() that returns the VALUE of the smallest number in the tree.


class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  minValue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIndex < length) {
            leftChild = this.values[leftChildIndex];
            if (leftChild < element) {
                swap = leftChildIndex;
            }
        }
        if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                swap = rightChildIndex;
            }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
    }
}
}


//--------------------------------------//

// Challenge 4: Given the following binary heap tree, create a function called isMaxHeap(heap) that accepts a heap as a argument, and it should return either true or false if it’s a valid max heap tree.


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  isMaxHeap(heap) {
    for (let i = 0; i < heap.length; i++) {
      if (heap[i] < heap[Math.floor((i - 1) / 2)]) {
        return false;
      }
    }
    return true;
  }
}
