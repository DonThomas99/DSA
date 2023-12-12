class Stack {
    constructor() {
      this.items = '';
    }
  
    push(item) {
      this.items += item;
    }
  
    pop() {
      const poppedItem = this.items[this.items.length - 1];
      this.items = this.items.slice(0, -1);
      return poppedItem;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
    let reversedStr = '';
  
    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    // Pop characters from the stack to construct the reversed string
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  const inputString = 'Hello, World!';
  const reversedString = reverseString(inputString);
  console.log(reversedString);  // Output: '!dlroW ,olleH'
  