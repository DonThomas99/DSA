class Queue
{
    constructor()
    {
        this.pushstack = new Stack()
        this.popstack = new Stack()
        
    }
    enqueue(value)
    {
        this.pushstack.push(value)

    }
    dequeue()
    {
        while(this.pushstack.length > 0)
        {
            this.popstack.push(this.pushstack.pop())
        } 
         this.popstack.pop()
         while(this.popstack.length> 0)
         {
            this.pushstack.push(this.popstack.pop())
         } 

    }
    
  getPushStack() {
    let elements = [];
    let current = this.pushstack.first;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
    print() {
        let el =[]
        while(this.pushstack.length > 0)
        {
            let ele = this.pushstack
            el.push(ele)
        }
        console.log(el)
      }
}

class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }

}
class Stack
{
    constructor()
    {
        this.first = null
        this.last = null
        this.length =0
    }
    push(value)
    { let  node = new Node(value)
        if(this.length === 0)
        {
            this.first = node 
            this.last = node
        }
        else {
            node.next = this.first
            this.first = node 
        }
        this.length++
        return this.length
    }
    pop()
    {
       let rnode 
       if(this.length === 0)return null 
       if(this.length === 1){
        rnode = this.first 
        this.first = null
        this.last = null  
        return rnode
       }
       rnode = this.first
    this.first = this.first.next
        this.length--
        return rnode
    }   
    
}

let q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  q.enqueue(40);
  q.dequeue()
  console.log(q.getPushStack());


//   q.print(); // Output: [10, 20, 30, 40]
  