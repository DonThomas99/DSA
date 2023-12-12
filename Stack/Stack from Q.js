class Stack {
    constructor() {
      this.queue1 = new Queue();
      this.queue2 = new Queue();
      this.size = 0;
    }
  
    push(val) {
      this.queue1.enqueue(val);
      this.size++;
    }
  
    pop() {
      if (this.size === 0) return null;
  
      while (this.queue1.size > 1) {
        this.queue2.enqueue(this.queue1.dequeue());
      }
  
      const popped = this.queue1.dequeue();
      this.size--;
  
      // Swap the queues to maintain the order of elements
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      return popped;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    enqueue(val) {
      const newNode = new Node(val);
  
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    dequeue() {
      if (this.size === 0) return null;
  
      const dequeued = this.head;
      this.head = this.head.next;
  
      if (this.size === 1) {
        this.tail = null;
      }
  
      this.size--;
      return dequeued.value;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  // Create an instance of the Stack class
const stack = new Stack();

// Push values onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop values from the stack
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.pop()); // Output: null (stack is empty)

// Push more values onto the stack
stack.push(4);
stack.push(5);

// Pop values again
console.log(stack.pop()); // Output: 5
console.log(stack.pop()); // Output: 4
console.log(stack.pop()); // Output: null (stack is empty)
