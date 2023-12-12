class Stack
{
    constructor()
    {
        this.items = []
    }
  push(element)
  {
    this.items.push(element)
  } 
  pop()
  {
    this.items.pop()
  } 
  peek()
  {
    return this.items[this.items.length - 1]
  }
  isempty()
  {
    return this.items.length === 0
  }
  size()
  {
    return this.items.length
  }
  print()
  {
    console.log(this.items.toString())
  }
}

const stack = new Stack
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()  
stack.print()