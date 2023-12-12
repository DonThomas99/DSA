class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
const queue = new Queue();

queue.enqueue("Alice");
queue.enqueue("Bob");
queue.enqueue("Charlie");
console.log("Before dequeuing")
queue.print(); 
console.log("After dequeuing")
queue.dequeue()
queue.print()
console.log(queue.front());

