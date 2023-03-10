// Week 2 Assignment

class Node {
  constructor(value) {
      this.value = value
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

    let current = this.root
    while (current) {
        if (value === current.value) return;

        if (value < current.value) {
            if (!current.left) {
                current.left = newNode;
                return this;
            }
            current = current.left
        } else {
            if (!current.right) {
                current.right = newNode;
                return this;
            }
            current = current.right
        }
    }
}
// Challenge 1: Please solve this problem using BFS & DFS.
// Given a binary tree, create a method called countLeafs(tree) that returns the count of all the LEAFS of the tree.

  // DFS recursive
  countLeafs(tree) {
    if (!tree) return 0;
    if (!tree.left && !tree.right) return 1;
    return this.countLeafs(tree.left) + this.countLeafs(tree.right);
  }

  // BFS
  countLeafs(tree) {
    if (!tree) return 0;
    let queue = [tree];
    let count = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (!node.left && !node.right) count++;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return count;
  }

  ///===============================================///
  // Challenge 2: Please solve this problem using either BFS or DFS.
  // Given a binary tree, create a method called countOdds(tree) that returns a object that has a SORTED list of all
  // odd nodes and count.


// BFS
countOdds(tree) {
  if (!tree) return 0;
  let queue = [tree];
  let count = 0;
  let nodes = [];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value % 2 !== 0) {
      nodes.push(node.value);
      count++;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return {nodes, count};

}

let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(13);
tree.countLeafs(tree) // test for challenge 1
console.log(tree.countLeafs(tree.root)); // 4
tree.countOdds(tree) // test for challenge 2
console.log(tree.countOdds(tree.root));  // { nodes: [ 1, 3, 7, 13 ], count: 4 }


///===============================================///
// Challenge 3: Please solve this problem using either BFS or DFS.
// Given two binary trees, create a method called same(tree1, tree2) that returns true or false if the two binary
// trees are the same!

same(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (!tree1 || !tree2) {
    return false;
  }

  let queue1 = [tree1];
  let queue2 = [tree2];

  while (queue1.length > 0 && queue2.length > 0) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    if (node1.value !== node2.value) {
      return false;
    }

    if (node1.left && node2.left) {
      queue1.push(node1.left);
      queue2.push(node2.left);
    } else if (node1.left || node2.left) {
      return false;
    }

    if (node1.right && node2.right) {
      queue1.push(node1.right);
      queue2.push(node2.right);
    } else if (node1.right || node2.right) {
      return false;
    }
  }

  return true;
}
}

let tree1 = new BinarySearchTree();
let tree2 = new BinarySearchTree();
tree1.insert(8);
tree1.insert(3);
tree1.insert(1);
tree2.insert(8);
tree2.insert(3);
tree2.insert(1);
tree1.same(tree1, tree2)

console.log(tree1.same(tree1.root, tree2.root)); // true
