class MaxStack {
    constructor() {
      this.stack = [];
      this.maxElement = null;
    }
  
    push(value) {
      if (this.stack.length === 0 || value > this.maxElement) {
        this.maxElement = value;
      }
      this.stack.push({ value, max: this.maxElement });
      
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
      const popped = this.stack.pop();
      if (this.stack.length === 0) {
        this.maxElement = null;
      } else {
        this.maxElement = this.stack[this.stack.length - 1].max;
      }
      return popped.value;
    }
  
    getMax() {
      if (this.stack.length === 0) {
        return null;
        
      }
      return this.maxElement;
    }
    print(){
      for(let i=0;i<this.stack.length;i++)
      console.log(this.stack[i])
    }
    
  }
const stack = new MaxStack
stack.push(1)
stack.push(2)  
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(0)

stack.print()
// console.log("Largest element is:",stack.getMax())
