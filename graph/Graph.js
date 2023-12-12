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
}
const g = new graph()
g.addvertex("A")
g.addvertex("B")
g.addvertex("C")
g.addEdge("A","B")
g.addEdge("B","C")
g.addEdge("C","A")
//g.display()
//console.log("After removing edge from A to B")
//g.Edgeremoval("A","B")
g.display()