class Node
{   constructor(value)
    {
        this.value = value
        this.next = null 
    }
}
class Stack
{
    constructor()
    {
        this.head = null
        this.tail = null
    }
    prepend(value)
    {
        const node = new Node(value)
        if(!this.head)
        {
            this.tail = node
            this.head = node
        }
        else{
             node.next = this.head
            this.head = node 
            this.size++
        }
        
    }

    pop()
    {
        if(!this.head)
        {
           console.log("Stack is empty")
           return null    
        }
        else{
            const rnode = this.head
            this.head = rnode.next
        }
        this.size--
    }

    print()
    {
        if(!this.head)
        {
            console.log("Stack is empty");
            return null
        }
        else{
            let curr = this.head 
            let listval = ''
            while (curr) {
                listval += `${curr.value} `
                curr = curr.next
            }
            console.log(listval)
        }
    }
}

const stk = new Stack()
stk.prepend(10)
stk.prepend(20)
stk.prepend(30) 
stk.print()
stk.pop()
stk.print()
