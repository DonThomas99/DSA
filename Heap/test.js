class BinaryHeap
{
    constructor()
    {
        this.values = [8,5,9,3,4,1,2,6,7]
    }
    insert(element)
    {
        this.values.push(element)
        this.heapify(this.values)
        return this
    }
    heapify(arr)
    {
        const n = arr.length 

        for(let i = Math.floor(n/2)- 1; i >= 0;i--) {
          this.minheapify(arr,n,i)}
    }
    minheapify(arr, n, i)
    {
        let  smallest = i 
        const left = 2*i + 1
        const right = 2*i + 2
        if(left < n && arr[left] <arr[smallest])
        smallest = left 
        
        if(right < n && arr[right] < arr[smallest])
        smallest = right 

        if(smallest !=i){
        [arr[i],arr[smallest]]  = [arr[smallest],arr[i]]
       
        this.minheapify(arr,n,smallest)
        }
    }
    extractmin()
    {
        this.heapify(this.values)
        let min = this.values.shift()
        this.heapify(this.values)
        return min
    }

     minheapsort(arr) 
     {
        const n = arr.length
        for(let i = Math.floor(n/2)-1;i>=0;i--)
        this.minheapify(arr,n,i)
        for(let i = n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
            this.minheapify(arr,i,0)
        }
        return arr
     }
}
let bin = new BinaryHeap()
 
console.log("sorted array :",bin.minheapsort(bin.values))
