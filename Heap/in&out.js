class BinaryHeap {
    constructor() {
      this.values = []
    }
  
    insert(element) {
      this.values.push(element);
      this.heapify(this.values);
      return this;
    }
  
    heapify(arr) {
      const n = arr.length;
  
      // Build max heap
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.maxHeapify(arr, n, i);
      }
    }
  
    maxHeapify(arr, n, i) {
      let largest = i; // Initialize largest as root
      const left = 2 * i + 1; // Left child
      const right = 2 * i + 2; // Right child
  
      // If left child is larger than root
      if (left < n && arr[left] > arr[largest])
        largest = left;
  
      // If right child is larger than largest so far
      if (right < n && arr[right] > arr[largest])
        largest = right;
  
      // If largest is not root
      if (largest !== i) {
        // Swap the largest element with the root
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
        // Recursively heapify the affected sub-tree
        this.maxHeapify(arr, n, largest);
      }
    }
    extractMax(){
        this.heapify(this.values)
        let max=this.values.shift()
        this.heapify(this.values)
        return max
    }
    heapsort(arr) {
      const n = arr.length
      for(let i = Math.floor(n/2)-1;i>=0;i--)
      this.maxHeapify(arr)
      for(let i = n-1;i>=0;i--){
      [arr[0],arr[i]] = [arr[i],arr[0]]
          this.maxHeapify(arr,i,0)
      }
      return arr
    }*
     heapsort(arr) {
    const n = arr.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.maxHeapify(arr, n, i);
    }

    // Extract max elements repeatedly to get the sorted array
    for (let i = n - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.maxHeapify(arr, i, 0);
    }

    return arr;
  }
  
  }
  
  let bin = new BinaryHeap()
  bin.insert(50)
  bin.insert(63)
  bin.insert(77)
  bin.insert(42)
  bin.insert(98)
  console.log("Sorted array:",bin.heapsort(bin.values))
  
