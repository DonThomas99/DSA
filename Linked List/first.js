class Node{
    constructor(value)
    {
        this.value = value 
        this.next = null
    }
    
}
class Linkedlist 
{
    constructor()
    {
        this.head = null
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
        } 
        else 
        {
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
        } 
        else 
        {
          let prev = this.head
          while(prev.next)
          {
            prev = prev.next
          }  
          prev.next = node 
        }
        this.size++ 
     }

 insert(value,index)
 {
    if(index<0||index >this.size)
    {
        return null
    }
        if(index === 0)
        {
            this.prepend()  
        }
        else
        {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++)
            {
                prev =prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        } 

 }
removefrom(index)
{ let removednode 
    if(index<0||index >=this.size)
    {
        return null
    }
    if(index === 0)
    { 
        removednode = this.head
        this.head = this.head.next

    }
    else
    {
        let prev = this.head
        for(let i=0;i<index-1;i++)
        {
            prev =prev.next
        }
       removednode = prev.next
       prev.next = removednode.next
    }

    this.size--
   return removednode.value
}

removevalue(value)
{
    
    if(this.isempty())
    {
        return null
    }
    if(this.head.value === value)
    {
        this.head = this.head.next
        this.size--
        return value
    }
    else{
        let prev =this.head
        while(prev.next && prev.next.value !== value)
        {
            prev =prev.next
        }
        if(prev.next)
        {
        const removednode = prev.next
        prev.next = removednode.next
        this.size--
        return value
    }
    return null
}

}
search(value)
{
    if(this.isempty())
    {
        console.log('List is empty')
        return -1
    }
    let i =0
    let curr = this.head
    while(curr)
    {
        if(curr.value === value)
        {
            return i
        }
        curr = curr.next
        i++
    }
    console.log('value not found')
    return -1
}

reverse()
{
    let prev = null
    let curr = this.head
    while(curr)
    {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }    
    this.head = prev
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
//console.log('List is empty', list.isempty() )
//console.log('List Size', list.getsize())
//list.print()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.print()
//list.removevalue(10)
//console.log('Search for index of 50:')
//console.log(list.search(50))
//list.print()
list.reverse()
list.print()
