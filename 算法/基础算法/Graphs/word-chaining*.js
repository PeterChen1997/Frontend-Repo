/**
 * Figure out whether the given words can form a circular chain.
 */
class vertexChain {
    constructor(value, visited) {
        this.value = value;
        this.visited = visited;
        this.adj_vertices = [];
        this.in_vertices = [];
    }
}

class graphChain {
    constructor(g) {
        this.g = g;
    }

    // This method creates a graph from a list of words. A node of
    // the graph contains a character representing the start or end
    // character of a word.
    createGraph(words_list) {
        for (let i = 0; i < words_list.length; i++) {
            let word = words_list[i];
            let start_char = word[0];
            let end_char = word[word.length - 1];

            let start = this.vertexExists(start_char);

            if (!start) {
                start = new vertexChain(start_char, false);
                this.g.push(start);
            }

            let end = this.vertexExists(end_char);
            if (!end) {
                end = new vertexChain(end_char, false);
                this.g.push(end);
            }

            // Add an edge from start vertex to end vertex
            this.addEdge(start, end);
        }
    }

    // This method returns the vertex with a given value if it
    // already exists in the graph, returns NULL otherwise
    vertexExists(value) {
        for (let i = 0; i < this.g.length; i++) {
            if (this.g[i].value === value) {
                return this.g[i];
            }
        }

        return null;
    }

    // This method returns TRUE if all nodes of the graph have
    // been visited
    allVisited() {
        for (let i = 0; i < this.g.length; i++) {
            if (this.g[i].visited === false) {
                return false;
            }
        }
        return true;
    }

    // This method adds an edge from start vertex to end vertex by
    // adding the end vertex in the adjacency list of start vertex
    // It also adds the start vertex to the in_vertices of end vertex
    addEdge(start, end) {
        start.adj_vertices.push(end);
        end.in_vertices.push(start);
    }

    // This method returns TRUE if out degree of each vertex is equal
    // to its in degree, returns FALSE otherwise
    outEqualsIn() {
        for (let i = 0; i < this.g.length; i++) {
            let out = this.g[i].adj_vertices.length;
            let inn = this.g[i].in_vertices.length;
            if (out != inn) {
                return false;
            }
        }

        return true;
    }

    // This method returns TRUE if the graph has a cycle containing
    // all the nodes, returns FALSE otherwise
    canChainWords_rec(node, starting_node) {
        node.visited = true;

        // Base case
        // return TRUE if all nodes have been visited and there
        // exists an edge from the last node being visited to
        // the starting node
        let adj = node.adj_vertices;
        if (this.allVisited()) {
            for (let i = 0; i < adj.length; i++) {
                if (adj[i] === starting_node) {
                    return true;
                }
            }
        }

        // Recursive case
        for (let i = 0; i < adj.length; i++) {
            if (adj[i].visited === false) {
                node = adj[i];
                if (this.canChainWords_rec(node, starting_node)) {
                    return true;
                }
            }
        }

        return false;
    }

    canChainWords(list_size) {
        // Empty list and single word cannot form a chain
        if (list_size < 2) {
            return false;
        }

        if (this.g.length > 0) {
            if (this.outEqualsIn()) {
                return this.canChainWords_rec(this.g[0], this.g[0]);
            }
        }

        return false;
    }

    printGraph() {
        for (let i = 0; i < this.g.length; i++) {
            console.log(this.g[i].value + " " + this.g[i].visited);
            let adj = this.g[i].adj_vertices;
            for (let j = 0; j < adj.length; j++) {
                console.log(adj[j].value + " ");
            }
        }
    }
}

let list = ["eve", "eat", "ripe", "tear"];
let vertices = [];
let g = new graphChain(vertices);
g.createGraph(list);
let result = g.canChainWords(list.length);
console.log(result);
