class Node {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }
}

class tree{
  constructor(){
    this.root = null
  }

isEmpty(){
  return this.root===null
}

  insert(value){
    const node = new Node(value)
    if(!this.root){
      this.root = node
    }else if(value < this.root.value){
          this.insertNode(this.root,value)
        
    }else if(value > this.root.value){
      this.insertNode(this.root,value)
    }
  }
  insertNode(root,value){
    const node = new Node(value)
     if(value < root.value){
        if(!root.left){
          root.left = node
        }else{
          this.insertNode(root.left,value)
        }
    }else{
      if(!root.right){
        root.right = node
      }else{
        this.insertNode(root.right, value)
      }
    }
  }
  
preOrder(root){
if(!root){
  return 
}
console.log(root.value);
this.preOrder(root.left)
this.preOrder(root.right)

}

inOrder(root){
  if(!root)return 
  this.inOrder(root.left)
  console.log(root.value);
  this.inOrder(root.right)

}

postOrder(root){
  if(!root)return
  this.postOrder(root.left)
  this.postOrder(root.right)
  console.log(root.value);
}
countNodes(root){
if(!root)return 0
return 1+ this.countNodes(root.left) + this.countNodes(root.right)
}

min(root){
  if(!root.left)return root.value
 return this.min(root.left)
}

max(root){
  if(!root.right)return root.value
  return this.max(root.right)
}

sumOfNodes(root){
  if(!root)return 0
  return root.value + this.sumOfNodes(root.left) + this.sumOfNodes(root.right)
}

countLeafNodes(root){
  if(!root)return 0
  if(root.left == null && root.right == null){
    return 1
  }
  return  this.countLeafNodes(root.right) + this.countLeafNodes(root.left)
}

treeHeight(root){
  if(!root)return -1
  let LeftHeight = this.treeHeight(root.left)
  let rightHeight = this.treeHeight(root.right)
  return 1 + Math.max(LeftHeight,rightHeight)

}

  nthSmallest(n){
    let count =0
    let result = null
    function inorder(node){
      if(!node || result!= null)return 
      inorder(node.left)
      count++
      if(count == n){
        result = node.value
        return
      }
      inorder(node.right)
    }
    inorder(this.root)
    return result
  }

  nthLargest(n){
    let count =0;
    let result = null
    function reverseInorder(node){
      if(!node || result !== null)return
      reverseInorder(node.right)
      count++
      if(count === n){
        result = node.value
        return
      }
      reverseInorder(node.left)
    }
    reverseInorder(this.root)
    return result
  }

}


const N = new tree()
const arr = [42, 7, 15, 89, 3, 56, 23, 10];
for (let i = 0; i < arr.length; i++) {
    N.insert(arr[i])
    
}

console.log(N.nthLargest(1))