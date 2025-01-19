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
    return this.items.pop()
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
  sortIt(){
    const tempStk = new Stack()
    while(!this.isempty()){
      tempStk.push(this.pop())
    }
    while(!tempStk.isempty()){
      let tempVal = tempStk.pop()
      while(!this.isempty() && this.peek() > tempVal){
        tempStk.push(this.pop())

      }
      this.push(tempVal)
    }
  }
}

const stack = new Stack

stack.items = [43, 12, 5, 21, 67, 89, 90, 34, 7]
stack.sortIt()
stack.print()