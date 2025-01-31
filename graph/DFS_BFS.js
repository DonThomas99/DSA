class graph{
    
    constructor(){
        this.adjacencyList = {}
    }
    
    addVertex(vertex){
        if(this.adjacencyList[vertex]){
            console.log('element exist');
            return
        }
        this.adjacencyList[vertex] = new Set()
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
            this.adjacencyList[vertex1].add(vertex2)
            this.adjacencyList[vertex2].add(vertex1)
    }
    
    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].add(vertex1)
    }
    
    edgeRemoval(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    
    vertexRemoval(vertex){
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.edgeRemoval(adjacentVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    
    bfs(startVertex){
        const visited = []
        const queue = []
        const result = []
        visited[startVertex] = true
        queue.push(startVertex)
        while(queue.length > 0){
            let vertex = queue.shift()
            result.push(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            }
        }
        return result 
    }

    dfs(startVertex){
        const visited = []
        const result = []
        const stack = []
        visited[startVertex] = true
        queue.push(startVertex)
        while(stack.length>0){
            let vertex = stack.pop()
            result.push(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            }
        }
        return result 
    }

    isCyclic(){
        const visited = []
        for(let vertex in this.adjacencyList){
            if(!visited[vertex.toString()]){
                if(this.isCyclicUtil(vertex,visited,null))
                    return true
            }
        }
        return false
    }
    
    isCyclicUtil(vertex,visited,parent){
        visited[vertex] = true
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                if(this.isCyclicUtil(neighbour,visited,vertex)){
                    return true
                }
            }else if(neighbour.toString() !== (parent ? parent.toString():null)){
                return true
            }
        }
        return false
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

}

const g = new graph

g.addEdge(5,10)
g.addEdge(10,20)
g.addEdge(20,30)
g.addEdge(20,68)
g.addEdge(30,40)
g.addEdge(68,90)
g.addEdge(68,90)
// g.addEdge(5,90)

g.display()
// console.log(g.isCyclic());
g.edgeRemoval(5)
console.log("new list");
g.display()
