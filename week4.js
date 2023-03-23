// Week 4 Assignement

// Challenge 1: Given the following graphs, appropriately label them as being undirected-weighted, directed-
// weighted, undirected-unweighted, and directed-unweighted.

// graph #1 - Undirected-Unweighted
// graph #2 - Undirected-Weighted
// graph #3 - Directed-Weighted
// graph #4 - Directed-Unweighted


//--------------------------------------//

// Challenge 2: Define what vertices and edges mean to you.

// Vertices - nodes
// Edges - connections between nodes

//--------------------------------------//

// Challenge 3: You were just hired as a backend engineer for a new start-up to compete with LinkedIn, and your
// first task as a engineer was to create a undirected, unweighted graph of the first 4 users of the website. Create a
// Graph class that utilizes a adjacencyList to structure the graph of the mutual connections between each user.

// Create the following methods:
// - addVertex(v): v – vertex to add
// - addEdge(v1, v2): v1 – first vertex to add, v2 – second vertex to add
// - removeEdge(v1, v2): v1 – first vertex to remove, v2 – second vertex to remove
// - removeVertex(v): v – vertex to remove

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (v) => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (v) => v !== v1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// Step 1: Seed some data - here is the list of friends and their initial mutual connections:
// - Tom Brady: [‘Lebron James’, ‘Tony Kim’]
// - Tony Kim: [‘Patrick Mahomes’, ‘Lebron James’, ‘Tom Brady’]
// - Patrick Mahomes: [‘Lebron James’]
// - Lebron James: [‘Tom Brady’, ‘Tony Kim’, ‘Patrick Mahomes’]

const graph = new Graph();
graph.addVertex("Tom Brady");
graph.addVertex("Tony Kim");
graph.addVertex("Patrick Mahomes");
graph.addVertex("Lebron James");
graph.addEdge("Tom Brady", "Tony Kim");
graph.addEdge("Tom Brady", "Lebron James");
graph.addEdge("Tony Kim", "Patrick Mahomes");
graph.addEdge("Tony Kim", "Lebron James");
graph.addEdge("Patrick Mahomes", "Lebron James");

// Step 2: Lebron James no longer wants a account on our platform, go ahead and remove the connection between
// those connections.

graph.removeVertex("Lebron James");


