class Node
{
    constructor(value)
    {
        this.value = value 
        this.next = null
    }
}
class Queue
{ constructor()
    {
        this.head = null
        this.tail = null
        this.size =0
    }

    size()
    {
        return this.size
    }
    isempty()
    {
        return this.size === 0
    }
    enqueue(value)
    {
        const node = new Node(value)
        if(!this.head)
        {
            this.head = node
            this.tail = node
        } 
        else{
            this.tail.next = node
            this.tail = node
            this.size++
        }

    }
     dequeue()
     {
        if(!this.head)
        {
            console.log("invalid entry:");
            return null
        }
        else{
            let rnode = this.head 
            this.head = rnode.next
            this.size--
        }

     }

     display()
     {
        if(!this.head)
        {
            console.log("Queue is empty");
        }
        else {
            let listval =''
            let curr = this.head
            while (curr)
            {
                listval += `${curr.value} `
                curr =curr.next 
            }
            console.log(listval)
        }
     }
}

let Q = new Queue
Q.enqueue('Don')
Q.enqueue('Deon')
Q.enqueue('John')
Q.enqueue('Boney')
Q.display()
Q.dequeue()
Q.display()
