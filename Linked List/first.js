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

     makeCircular(){
        if(this.isempty()){
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = this.head
     }
    
     isCircular() {
        if (this.isempty()) {
            return false;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    sortMiddle(k){
        if(this.isempty() || k<=0){
            return 
        }
        let middleIndex = Math.floor(this.size /2)
        let start = Math.max(0,middleIndex - Math.floor(k / 2))
        let end  = Math.min(this.size - 1, start + k - 1)
        let elements = []
        let curr = this.head
        for(let i = 0; i<= end; i++){
            if(i >= start){
                elements.push(curr.value)
            }
            curr = curr.next
        }
        elements.sort((a, b)=>a -b)
        curr = this.head
        let elementIndex =0
        for(let i=0;i<= end; i++){
            if(i>=start){
                curr.value = elements[elementIndex++]
            }
            curr = curr.next
        }
    }

    removeDuplicates(){
        let curr = this.head
        while(curr){
            let testValue = curr.value
            let curr2 = curr
            while(curr2.next){
                if(testValue === curr2.next.value){
                    curr2.next = curr2.next.next
                } else{
                    curr2 = curr2.next
                }
            }
            curr = curr.next
        }
    }

    } 

const list = new Linkedlist()
//console.log('List is empty', list.isempty() )
//console.log('List Size', list.getsize())
//list.print()
list.append(3)
list.append(5)
list.append(2)
list.append(3)
list.append(7)
list.append(5)
list.append(9)
list.append(2)
list.append(1)
list.append(3)
list.print()
list.removeDuplicates()
//list.removevalue(10)
//console.log('Search for index of 50:')
//console.log(list.search(50))
//list.print()
// list.reverse()
// list.sortMiddle(4)
list.print()
// list.makeCircular()
// console.log(list.isCircular())