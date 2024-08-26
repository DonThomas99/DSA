class Node
{
    constructor(value)
    {
        this.value = value
        this.right = null
        this.left = null
    }
}

class Tree
{
    constructor()
    {
        this.root = null
    }
    isempty()
    {
        return this.root === null
    }

    insertion(value)
    { const node = new Node(value)
       if(this.isempty())
        {
            this.root = node 
        }else{
            this.insertnode(this.root,node)
        }  
    }
    insertnode(root,node)
    {
        if(node.value < root.value)
        {
            if(root.left == null){
                root.left = node
            }else{ 
                 this.insertnode(root.left,node) 
            }
        }
        else{
            if(root.right == null)
            {
                root.right = node
            }else {
                this.insertnode(root.right,node)
            }
        }
    }

    contains(root,value)
    {
        if(!root)
        {
            return false
        }else{
            if(root.value === value )
            return true
            else if(root.value < value){
            return this.contains(root.left,value)
            }
            else if(root.value > value){
           return this.contains(root.right,value)
            }
        }
    }
    preorder(root)
    { 
        if(root === null)
        {
            return 
        }
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right) 
    }
    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    postorder(root)
    {
        if(root )
        {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
    levelorder()
    {
        const queue =[]
        queue.push(this.root)
        while(queue.length)
        {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }

        }
    }
    min(root)
    {
        if(!root.left)
        {
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root)
    {
        if(!root.right)
        {
            return root.value
        }else{
            return this.max(root.right)
        }
    }       
    delete(value){
        this.root = this.deletenode(this.root,value)
    }
     deletenode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deletenode(root.left,value)
        }else if(value > root.value){
            root.right = this.deletenode(root.right,value)  
        }else{
            if(!root.right && !root.left){
                //console.log("not found")
                return null
            }
           else  if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            } 
            root.value = this.min(root.right)
            root.right = this.deletenode(root.right,root.value)     
        }
        return root       
     }
    



     findClosestValue(target) {
        if (this.isempty()) {
          return null;
        }
    
        let closest = this.root.value;
        let diff = Math.abs(target - closest);
    
        closest = this.findClosestValueHelper(this.root, target, closest, diff);
    
        return closest;
      }
    
      findClosestValueHelper(node, target, closest, diff) {
        if (node === null) {
          return closest;
        }
    
        if (Math.abs(target - node.value) < diff) {
          closest = node.value;
          diff = Math.abs(target - node.value);
        }
    
        if (target < node.value) {
          closest = this.findClosestValueHelper(node.left, target, closest, diff);
        } else if (target > node.value) {
          closest = this.findClosestValueHelper(node.right, target, closest, diff);
        }
    
        return closest;
      }

     
  isBST() {
    return this.isBSTUtil(this.root, -Infinity, Infinity);
  }

      isBSTUtil(node, min, max) {
        if (node === null) {
          return true;
        }
    
        if (node.value <= min || node.value >= max) {
          return false;
        }
    
        return (
          this.isBSTUtil(node.left, min, node.value) &&
          this.isBSTUtil(node.right, node.value, max)
        );
      }
        sum(root){
            if(root == null){
                return 0
            }
            return root.value + this.sum(root.left) + this.sum(root.right) 
        }

        countNodes(root){
            if(root == null ){
                return 0
            }
            return 1 + this.countNodes(root.left) + this.countNodes(root.right)
        }

    leafNodeCount(root){
        if(root == null){
            return 0
        }
        if(root.right == null && root.left == null){
            return 1
        }
        return this.leafNodeCount(root.left) + this.leafNodeCount(root.right)
    }
    treeHeight(root){
        if(root == null){
            return -1
        }
        const leftHeight = this.treeHeight(root.left)
        const rightHeight = this.treeHeight(root.right)
        return Math.max(leftHeight,rightHeight) + 1
    }



}
const N = new Tree
N.insertion(1)
N.insertion(2)
N.insertion(3)
N.insertion(4)
N.insertion(5)
N.insertion(6)
N.insertion(7)
N.insertion(8)
N.insertion(9)
console.log(N.treeHeight(N.root))
// N.postorder(N.root)

// console.log("Is this a Binary search Tree:",N.isBST())
// console.log(

//     // N.countNodes(N.root)
//     // N.leafNodeCount(N.root)
// )



