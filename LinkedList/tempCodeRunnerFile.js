class Node
{ 
    constructor(value)
    {
    this.value  = value
    this.next = null 
    }   

}
class Linkedlist
{
    constructor()
    {
    this.head = null
    this.tail = null
    this.size
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
        {
            node.next = this.head
            this.head = node
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
    
    
    removemid()
    {
        let first=this.head
        let second=this.head
        let remove=first
        while(second!=null && second.next!=null){
            remove=first
            first=first.next
            second=second.next.next
        }
        remove.next=remove.next.next
        this.size--
        return 


    }
}
 let list = new Linkedlist
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.removemid()
list.print()
