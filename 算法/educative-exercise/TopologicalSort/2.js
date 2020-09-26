/**
 * 我们给出了具有k元树特征的无向图。在这样的图中，我们可以选择任何节点作为根来创建k元树。具有最小高度的根（或树）将称为最小高度树（MHT）。一个图形可以有多个MHT。在这个问题上，我们需要找到所有赋予我们MHT的根源。编写一种方法来查找给定图的所有MHT并返回其根列表。

范例1：

Input: vertices: 5, Edges: [[0, 1], [1, 2], [1, 3], [2, 4]]
Output:[1, 2]
Explanation: Choosing '1' or '2' as roots give us MHTs. In the below diagram, we can see that the 
height of the trees with roots '1' or '2' is three which is minimum.

范例2：

Input: vertices: 4, Edges: [[0, 1], [0, 2], [2, 3]]
Output:[0, 2]
Explanation: Choosing '0' or '2' as roots give us MHTs. In the below diagram, we can see that the 
height of the trees with roots '0' or '2' is three which is minimum.

范例3：

Input: vertices: 4, Edges: [[0, 1], [1, 2], [1, 3]]
Output:[1]
 */

const find_trees = function (nodes, edges) {
    // TODO: Write your code here
    return [];
};

console.log(
    `Roots of MHTs: ${find_trees(5, [
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 4],
    ])}`
);
console.log(
    `Roots of MHTs: ${find_trees(4, [
        [0, 1],
        [0, 2],
        [2, 3],
    ])}`
);
console.log(
    `Roots of MHTs: ${find_trees(4, [
        [1, 2],
        [1, 3],
    ])}`
);
const find_trees = function (nodes, edges) {
    // TODO: Write your code here
    return [];
};

console.log(
    `Roots of MHTs: ${find_trees(5, [
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 4],
    ])}`
);
console.log(
    `Roots of MHTs: ${find_trees(4, [
        [0, 1],
        [0, 2],
        [2, 3],
    ])}`
);
console.log(
    `Roots of MHTs: ${find_trees(4, [
        [1, 2],
        [1, 3],
    ])}`
);
