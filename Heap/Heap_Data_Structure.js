class Heap{
    constructor(){
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
       this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index){
        if(index < 1)return 
        const parentIndex = Math.floor((index - 1)/2)
        if(this.heap[parentIndex] < this.heap[index]){
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            this.heapifyUp(parentIndex)
        }       
    }

    heapifyDown(index){
        let largest = index
        let left = index * 2 + 1
        let right  = index * 2 + 2
        
        if(left < this.heap.length - 1 && this.heap[left] > this.heap[largest]){
                largest = left
        }
        if(right < this.heap.length - 1 && this.heap[right] > this.heap[largest]){
            largest = right 
        }

        if(largest !== index){
            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]]
                this.heapifyDown(largest)
        }

    

    }

    extractMax(){
        if(this.heap.length <1)return 
        let maxValue = this.heap.shift()
        this.heapifyDown(0)
        return maxValue
    }

    

}
const heap = new Heap()
heap.insert(2)
heap.insert(8)
heap.insert(1)
heap.insert(3)
heap.insert(6)
heap.insert(7)
heap.insert(5)
heap.insert(4)
console.log(heap.heap)
heap.extractMax()
console.log(heap.heap)

