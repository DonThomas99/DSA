class Stack
{
    constructor()
    {
        this.items = ''
    }
  push(element)
  {
    this.items += element
  } 
  pop()
  {
    const poppedItem = this.items[this.items.length - 1];
      this.items = this.items.slice(0, -1);
      return poppedItem;
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

  printReversed() {
    let reversedString = '';
    for (let i = this.items.length - 1; i >= 0; i--) {
      reversedString += this.items[i];
    }
    console.log(reversedString);
  }
  
}

const stack = new Stack
stack.push('E')
stack.push('V')
stack.push('I')
stack.push('L')
stack.print()
stack.printReversed()  
