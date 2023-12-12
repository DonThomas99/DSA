class Queue
{
constructor ()
{
    this.pushstack =[]
    this.popstack = []
}
isempty()
{
    return this.pushstack.length === 0
}
enqueue(value)
{
    this.pushstack.push(value)
}
dequeue()
{
    if(this.isempty()) {
        console.log("Empty queue")
    return null
    }
    else {
        while(this.pushstack.length)
        {
            this.popstack.push(this.pushstack.pop())
        }
        let rem = this.popstack.pop()
        while(this.popstack.length)
        {
            this.pushstack.push(this.popstack.pop())
        }   
    }
    return rem 
}
top()
{
    if(this.isempty())
    return null
    return this.pushstack[0]
}

}
 let q = new Queue

 