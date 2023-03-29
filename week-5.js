// Week 5 Assignement

// Challenge 1: Using the DFS (recursive or iterative) method on a undirected, unweighted graph, create a method
// that returns all the odd valued vertices

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  getOddVerticesDFS() {
    const result = [];
    const visited = {};
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex] && vertex % 2 === 1) {
        this.depthFirstRecursiveHelper(vertex, visited, result);
      }
    }
    return result;
  }

  depthFirstRecursiveHelper(vertex, visited, result) {
    visited[vertex] = true;
    result.push(vertex);
    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor] && neighbor % 2 === 1) {
        this.depthFirstRecursiveHelper(neighbor, visited, result);
      }
    }
  }
}

let g = new Graph();

g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")

g.addEdge("1","2")
g.addEdge("1","3")
g.addEdge("2","4")
g.addEdge("3","5")
g.addEdge("4","5")
g.addEdge("4","6")
g.addEdge("5","6")

 console.log(g.getOddVerticesDFS()); // RESULT: [1, 3, 5]

//------------------------------------------//

// // Challenge 2: Using the BFS (recursive or iterative) method on a undirected, unweighted graph, create a method, that returns all the even valued vertices

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  getEvenVerticesBFS() {
    const result = [];
    const visited = {};
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex] && vertex % 2 === 0) {
        this.breadthFirstSearchHelper(vertex, visited, result);
      }
    }
    return result;
  }

  breadthFirstSearchHelper(vertex, visited, result) {
    const queue = [vertex];
    visited[vertex] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      if (currentVertex % 2 === 0) {
        result.push(currentVertex);
      }
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}


let g = new Graph();

g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")

g.addEdge("1","2")
g.addEdge("1","3")
g.addEdge("2","4")
g.addEdge("3","5")
g.addEdge("4","5")
g.addEdge("4","6")
g.addEdge("5","6")


console.log(g.getEvenVerticesBFS()); // RESULT: [2, 4, 6]


// ------------------------//
// Challenge 3:
// You are given a connected undirected graph. Perform a DFS of the graph. Use recursive approach to find DFS traversal of the graph starting from the 0th vertex from left to right according to the graph. Input: V = 5, adj = [[2,3,1] , [0], [0, 4], [0], [2]]; Output: 0 2 4 3 1

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  getDFS() {
    const result = [];
    const visited = {};
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        this.depthFirstRecursiveHelper(vertex, visited, result);
      }
    }
    return result;
  }

  depthFirstRecursiveHelper(vertex, visited, result) {
    visited[vertex] = true;
    result.push(vertex);
    for (let neighbor of this.adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        this.depthFirstRecursiveHelper(neighbor, visited, result);
      }
    }
  }
}
let g = new Graph();
g.addVertex("0");
g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addEdge("0", "2");
g.addEdge("0", "3");
g.addEdge("1", "0");
g.addEdge("2", "0");
g.addEdge("2", "4");
g.addEdge("3", "0");
g.addEdge("4", "2");

console.log(g.getDFS()); // RESULT: [0, 2, 4, 3, 1]
