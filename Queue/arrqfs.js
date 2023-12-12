class Queue{
    constructor(){
        this.pushStack=[]
        this.popStack=[]
    }
    enqueue(val){
        this.pushStack.push(val)
    }
    dequeue(){
        if(this.isEmpty()) return null
        while(this.pushStack.length){
            this.popStack.push(this.pushStack.pop())
        }
        let removed=this.popStack.pop()
        while(this.popStack.length){
            this.pushStack.push(this.popStack.pop())
        }
        return removed
    }
    top(){
        if(this.isEmpty()) return null
        return this.pushStack[0]
    }
    isEmpty(){
        return (this.pushStack.length===0)
    }
    print()
    {
        console.log(this.pushStack)
    }
}

let q=new Queue()
q.enqueue('aa')
q.enqueue('bb')
q.enqueue('cc')
q.enqueue('dd')
q.dequeue('dd')
q.print()
//console.log(q);