class graph
{
    constructor()
    {
        this.adjacencyList = {}
    }
    addvertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex] = new Set()
        }
    }   

    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1]){
        this.addvertex(vertex1)
    }
        if(!this.adjacencyList[vertex2]){
        this.addvertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)

    }
    display()
    {
        for( let vertex in this.adjacencyList)
        {
            console.log(vertex +"->"+[...this.adjacencyList[vertex]])
        }
    }
 
    HasEdge(vertex1,vertex2)
    {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
            )
    }
    
    Edgeremoval(vertex1,vertex2)
    {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    Vertexremoval(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            console.log("Vertex not found")
            return
        }
        for(let adjacentvertex of this.adjacencyList[vertex]){
            this.Edgeremoval(vertex,adjacentvertex)
        }
        delete this.adjacencyList[vertex]
    }


    bfs(startVertex){
        const visited=[]
        const queue=[]
        const result=[]
        visited[startVertex]=true
        queue.push(startVertex)
        while(queue.length>0){
            const vertex=queue.shift()
            result.push(vertex)
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                visited[neighbour]=true
                queue.push(neighbour)
            }
        }
        }return result
    }

    dfs(startVertex){
        const visited={}
        const stack=[]
        const result=[]
        visited[startVertex]=true
        stack.push(startVertex)
        while(stack.length>0){
            const vertex=stack.pop()
            result.push(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    stack.push(neighbour)
                }
            }
        }return result
    }

    isCyclicUtil(vertex,visited,parent){
        visited[vertex] = true
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                if(this.isCyclicUtil(neighbour, visited, vertex)){
                    return true
                }
            }else if(neighbour !== parent){
                return true
            }
        }
        return false
    }
    
    isCyclic(){
        const visited = {}
        for(let vertex in this.adjacencyList){
            if(!visited[vertex]){
                if(this.isCyclicUtil(vertex,visited,null)){
                    return true
                }
            }
        }
        return false
    }

}
const g = new graph()
g.addvertex(5)
g.addvertex(10)
g.addvertex(20)
g.addvertex(30)
g.addvertex(40)
g.addvertex(68)
g.addvertex(90)
g.addEdge(5,10)
g.addEdge(10,20)
g.addEdge(20,30)
g.addEdge(20,68)
g.addEdge(30,40)
g.addEdge(68,90) 
// g.addEdge(90,5)
console.log(g.isCyclic())

console.log(g.display())