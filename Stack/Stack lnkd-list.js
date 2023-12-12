class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
        if (!this.first) return null
        let removed = this.first
        if (this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return removed.val
    }
    min() {
        let current = this.first
        let minEl = current.val

        for (let i = 0; i < this.size; i++) {
            if (current.val < minEl) {
                minEl = current.val
            }
            current = current.next
        }
        return minEl
    }
    top(){
        return this.last.val
    }
    print() {
        let current = this.first
        while (current) {
            console.log(current.val);
            current = current.next
        }
    }
}

let stack = new Stack()
stack.push(6)
stack.push(4)
stack.push(8)
// console.log(stack.top());
// stack.print()
console.log(stack);