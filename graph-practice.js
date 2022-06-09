const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

  function printDepthFirst(start) {
    let stack = [start]
    let visited = [start]

    while(stack.length){
      let currentNode = stack.pop()
      console.log(currentNode)
      for(let neighbors of adjList[currentNode]){

        if(!visited.includes(neighbors)) {
        stack.push(neighbors)
        visited.push(neighbors)
      }
    }
   }
  }
  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3




 const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst(start) {
    debugger
    // create a queue with the start pliugged in
    // create a set for nodes already visited with start inside, use {}
    let queue = [start] // 3
    let visited = [start] // 3

    //WHILE the queue.length
    //dequeue the first node in queue and set it to current node
    while (queue.length) { //true
        let currentNode = queue.shift(); //3
        console.log(currentNode); //3,

        for (let neighbors of adjList[currentNode]) {

            if (!visited.includes(neighbors)) {
                queue.push(neighbors);
                // console.log(queue, 'queue')
                visited.push(neighbors)
                // console.log(visited,' visited')
            }


        }

    }
}


console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1
