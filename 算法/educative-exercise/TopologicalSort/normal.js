
// time: V + E vertices edges
// space: V + E
function topologicalSort(vertices, edges) {
    const sortedOrder = []

    if (vertices <= 0) {
        return sortedOrder
    }

    // a. init graph
    
    // count of incoming edges
    const inDegree = new Array(vertices).fill(0)
    // adjacency list
    const graph = new Array(vertices).fill(0).map(() => new Array())

    // b. build the graph
    edges.forEach((edge) => {
        let parent = edge[0]
        let child = edge[1]

        graph[parent].push(child)
        inDegree[child]++
    })
    
    // c. find all sources
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i)
        }
    }

    // d. foreach source
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)

        graph[vertex].forEach((child) => {
            inDegree[child] -= 1
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // judge if graph has a circle
    if (sortedOrder.length !== vertices) {
        return []
    }

    return sortedOrder
}

console.log(
    `Topological sort: ${topologicalSort(4, [
        [3, 2],
        [3, 0],
        [2, 0],
        [2, 1],
    ])}`
);

console.log(
    `Topological sort: ${topologicalSort(5, [
        [4, 2],
        [4, 3],
        [2, 0],
        [2, 1],
        [3, 1],
    ])}`
);
console.log(
    `Topological sort: ${topologicalSort(7, [
        [6, 4],
        [6, 2],
        [5, 3],
        [5, 4],
        [3, 0],
        [3, 1],
        [3, 2],
        [4, 1],
    ])}`
);