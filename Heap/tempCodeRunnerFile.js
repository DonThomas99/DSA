class BinaryHeap {
    constructor() {
      this.values = [];
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
      if (left < n && arr[left] > arr[largest]) largest = left;
  
      // If right child is larger than largest so far
      if (right < n && arr[right] > arr[largest]) largest = right;
  
      // If largest is not root
      if (largest !== i) {
        // Swap the largest element with the root
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
        // Recursively heapify the affected sub-tree
        this.maxHeapify(arr, n, largest);
      }
    }
  
    extractMax() {
      this.heapify(this.values);
      let max = this.values.shift();
      this.heapify(this.values);
      return max;
    }
  
    heapsort(arr) {
      const n = arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.maxHeapify(arr, n, i);
      }
      for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        this.maxHeapify(arr, i, 0);
      }
      return arr;
    }
  }
  
  function sortStringsLexicographically(strings) {
    const bin = new BinaryHeap();
    for (const str of strings) {
      bin.insert(str);
    }
    return bin.heapsort(bin.values);
  }
  
  const strings = ["banana", "apple", "orange", "grape", "pineapple"];
  console.log("Sorted strings:", sortStringsLexicographically(strings));
  