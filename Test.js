class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size =0
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.head == null){
            this.head  = node 
            this.tail = node 
        }else{
        node.next = this.head 
        this.head = node
        }
        this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    
    display(){
        let curr = this.head
        let arr = []
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        console.log(arr)
    }
}
function deleteOddNumbers(list){

    while(list.head && list.head.value %2 !== 0){
        list.head = list.head.next
        list.size--
    }
    let curr = list.head
    while(curr.next){
        if(curr.next.value % 2 !==0){
            curr.next = curr.next.next
            list.size--
        }else{
            curr = curr.next
        }
    }
    console.log(list.head.value)
    if(list.tail == null){
        list.tail = curr
    }
}

let list = new linkedList()
list.prepend(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.display()
deleteOddNumbers(list)
list.display()