// Heapify function to maintain the heap property
function heapify(arr, n, i) {
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
    heapify(arr, n, largest);
  }
}

// Heap Sort function
function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Extract elements from the heap one by one
  for (let i = n - 1; i >= 0; i--) {
    // Move the current root (maximum element) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const arr = [8, 5, 2, 9, 1, 6, 3, 7, 4];
console.log('Original array:', arr);
const sortedArr = heapSort(arr);
console.log('Sorted array:', sortedArr);
