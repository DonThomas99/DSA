class Node
{
    constructor(value)

    {
        this.next = null
        this.value =value
        this.previous = null
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

    isempty()
    {
        return this.size ===0
    }
    getsize()
    {
        return this.size
    }

    prepend(value)
    {
        const node = new Node
        node.value = value

        if(this.isempty())
        {
            this.head = node
            this.tail = node
        }
        else{
            this.head.previous = node
            node.next = this.head
            this.head = node
            this.head.previous = null 
        }
       this.size++ 
    }

    append(value)
    {
        const node = new Node(value)
        if(this.isempty())
        {
            prepend()
        }
        else
        {   
            this.tail.next = node
            node.previous = this.tail  
            this.tail = node
            node.next = null
           
        }
    this.size++
    }
    insert(value,index)
    {   
        const node = new Node(value)
        let curr = this.head
        if(index < 0 || index > this.size)
        {
            console.log("invalid entry")
        }
        if(index === 0)
        {
            prepend()
        }
        else
        {
            for(let i =0;i<index-1;i++)
            {
                curr = curr.next
            }
            node.previous = curr
            node.next = curr.next
            curr.next  = node
            curr.next.previous =node
            
        }

    }

    remove(index)
    { let removenode
        if(index < 0 || index > this.size )
        {
            console.log("Invalid Entry")
            return null
        }
        if( index === 0)
        {
            removenode = this.head
            this.head = null
            this.tail =null
        }
        else if(index === this.size-1)
        {
            removeend()
        }
        else
        {
          let curr =this.head
          for(let i =0;i<index-1;i++)
          {
            curr =curr.next 
          }   
          removenode = curr.next
          curr.next = removenode.next
          removenode.next.previous = curr 
        }

    }
    removefromvalue(value)
    {
        let removenode
        if(this.isempty())
        {
            console.log("Empty List")
        }
        if(this.head.value === value)
        {   removenode = this.head
            this.head = this.head.next
            this.head.previous = null
            this.size--
        }
        else 
        {
            let curr = this.head
            let index =0
          while(curr.next && curr.next.value !== value )
          {
            curr = curr.next
            index++
          }
          if(index === this.size-1)
          {
            removeend()
          }
          if(curr.next)
          {
            const removenode=curr.next
            curr.next = removenode.next
            removenode.next.previous = curr
          }

        }
    }
    removefront()
    {
        if(this.isempty())
        {
            console.log("Empty List")
        }
        else
        {   let removenode = this.head
            this.head = removenode.next
            this.head.previous = null
            this.size--
        }

    }
    removeend()
    {
         this.tail =this.tail.previous 
         this.tail.next = null
         this.size--

    }
    search(value)
    {
        if(this.isempty())
        {
            console.log("Invalid Entry")
        }
        let count=0
        let curr = this.head
        while(curr)
        {
            if(curr.value === value)
            {
                let index = count
                console.log(index) 
            }
            curr =curr.next
            count++
        }

        console.log("Invalid Entry")
        
    }

    reverse()
    {
        let temp = null 
        this.tail = this.head
        let curr = this.head
        while(curr)
        {    
             temp = curr.previous
             curr.previous = curr.next
             curr.next = temp
             curr = curr.previous
        }
        this.head = temp.previous   
    }



    print()
    {
        if(this.isempty())
        {
            console.log("List is empty")
        }
        else
        {
            let curr =this.head
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
let list = new Linkedlist
list.prepend(10)
list.append(20)
list.append(40)
list.append(30)
list.print()
list.reverse()
//console.log(b)
list.print()
console.log(list)