class Queue {
    constructor() {
      this.pushStack = new Stack();
      this.popStack = new Stack();
    //  this.size = 0;
    }
  
    enqueue(val) {
      this.pushStack.push(val);
     // this.size = this.pushStack.length + this.popStack.length;
    }
  
    dequeue() {
      if (this.popStack.length > 0) {
        return this.popStack.pop().val;
      }
  
      while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop().val);
      }
  
    
      return this.popStack.pop().val;
    }
  
    print() {
      let elements = [];
  
      // Copy elements from the popStack to the pushStack
      while (this.popStack.length > 0) {
        this.pushStack.push(this.popStack.pop().val);
      }
  
      // Copy elements from the pushStack to the popStack while collecting them in the 'elements' array
      while (this.pushStack.length > 0) {
        let element = this.pushStack.pop().val;
        elements.push(element);
        this.popStack.push(element);
      }
  
      // Print the elements
      console.log(elements);
    }
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    push(val) {
      let newNode = new Node(val);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      this.length++;
      return this.length;
    }
  
    pop() {
      if (this.length === 0) return null;
  
      let temp = this.first;
  
      if (this.length === 1) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return temp;
    }
  }
  
  let q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  q.enqueue(40);
  q.print(); // Output: [10, 20, 30, 40]
  