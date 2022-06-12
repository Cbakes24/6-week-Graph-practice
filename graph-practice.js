const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  let queue = [];
  let path = [start];// initialize a path to track
  let visited = new Set();

  visited.add(start)
  queue.push(path);

  while (queue.length) {
    let lastNode = end;
    let currentNode = queue.shift();
    let evalNode = currentNode[currentNode.length - 1] //last node in the array
    console.log(currentNode, 'CURR')
    console.log(evalNode, 'EVAL')
    if (evalNode === lastNode) return currentNode //end of the path

    adjList[evalNode].forEach((neighbors) => {
      if (!visited.has(neighbors)) {
        visited.add(neighbors);
        queue.push([...currentNode, neighbors])

      }
    });
  }
  return false
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
