class Node{
    constructor(value)
    {
        this.value = value 
        this.next = null
        this.previous = null
    }
    
}
class Linkedlist 
{
    constructor()
    {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isempty()
    {
        return this.size === 0
    }
    getsize()
    {
       return this.size 
    }

    prepend(value)
    {
        const node = new Node(value)
        if(this.isempty())
        {
          this.head = node
          this.tail = node   
        } 
        else 
        {   this.head.previous = node
            node.next = this.head
            this.head = node
        }
        this.size++
     }


     append(value)
     {
        const node = new Node (value)
        if(this.isempty())
        {
          this.head = node 

          this.tail = node  
        } 
        else 
        {
            this.tail.next  = node
            node.previous =this.tail
            this.tail = node
            node.next = null

            

        }
        
        this.size++ 
     }
     
     print()
     {
        if(this.isempty())
        {
            console.log('List is empty')
        }
        else 
        {
             let curr = this.head
             let listval = ''
             while(curr)
             {
                listval += `${curr.value} `
                curr = curr.next
             }
             console.log(listval)
        }
     }
    
} 

const list = new Linkedlist()

list.prepend(10)
list.append(50)
list.print()

