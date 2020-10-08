/**
 * Given the root node of a directed graph, clone this graph by creating its deep copy so that the cloned graph has the same vertices and edges as the original graph.
 */
class CloneNode {
    constructor(d) {
        this.data = d;
        this.neighbors = [];
    }
}

function cloneRec(root, visitedNodes) {
    if (!root) {
        return null;
    }

    let newNode = new CloneNode(root.data);
    visitedNodes[root.data] = newNode;

    for (let node in root.neighbors) {
        let visitedNode = visitedNodes[root.neighbors[node].data];

        if (!visitedNode) {
            newNode.neighbors.push(cloneRec(root.neighbors[p], visitedNodes));
        } else {
            newNode.neighbors.push(visitedNode);
        }
    }

    return newNode;
}

let clone = function (root) {
    let visitedNodes = {};
    return cloneRec(root, visitedNodes);
};

let vertices = createTestGraphDirected(7, 18);
printGraphClone(vertices[0]);
let cp = clone(vertices[0]);
console.log("");
console.log("After copy.");
printGraphClone(cp);
