class Node
{   constructor(value)
    {
    this.next = null
    this.value = value
    //this.size =0
    }
}
class Linkedlist
{
    constructor()
    {
        this.head = null
        this.tail = null
        this.size =0

    }
    getsize()
    {
        return this.size
    }
    isempty()
    {
        return this.size === 0
    }
prepend(value)
{
    const node = new Node(value)
    if(this.isempty())
    {
     this.head = node
     this.tail = node
    }
    else{

        node.next = this.head
        this.head = node 

    }
    console.log(this.head)
    this.size++
}
print()
{
    if(this.isempty())
    {
        console.log("list is empty")
    }
    else 
    {
        let curr = this.head
        let listval = ''
        while(curr)
        {
            listval = `${curr.value} `
            curr =curr.next
        }
        console.log(listval)
    }
}
removevalue(value)
{
    if(this.isempty())
    {
        console.log("empty list")
    }
    else{
        let curr = this.head 
        let removenode
        while(curr)
        {
            if(curr.value === value )
            {
                removenode = curr
                curr.next = 
                return removenode

            }
            curr = curr.next
        }
        this.size--
    }
    console.log("value not found")

}

}
const list = new Linkedlist
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()
//list.removevalue(20)
//list.print()
arr = [1,2,3,4,5]
numbers= arr.map(function numbers()
{
    return 
})
const person ={
    name : 'don',
    age : '24',
    job : 'dev'

};

const newp ={age:}
