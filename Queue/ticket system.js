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
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Create a ticket queue
  const ticketQueue = new Queue();
  
  // Enqueue customers into the ticket queue
  ticketQueue.enqueue("Customer 1");
  ticketQueue.enqueue("Customer 2");
  ticketQueue.enqueue("Customer 3");
  
  // Display the current number of customers in the ticket queue
  console.log("Number of customers in the ticket queue:", ticketQueue.getSize());
  
  // Dequeue the next customer from the ticket queue
  const nextCustomer = ticketQueue.dequeue();
  console.log("Next customer:", nextCustomer);
  
  // Display the current number of customers in the ticket queue after dequeue
  console.log("Number of customers in the ticket queue:", ticketQueue.getSize());
  