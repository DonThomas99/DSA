class Node
{
    constructor(value)
    {
        this.value = value
        this.right = null
        this.left = null
        this.count = 0
    }
}

class Tree
{
    constructor()
    {
        this.root = null
        this.count =0
    }
    isempty()
    {
        return this.root === null
    }

    insertion(value)
    { 
        const node = new Node(value)
        if(this.isempty())
        {
            this.root = node 
        }else{
            this.insertnode(this.root,node)
        } 
        this.count++ 
    }
    insertnode(root,node)
    { 
            if(root.left == null){
                root.left = node
            }else if(root.right == null)
            {
                root.right = node
            }else {
                if(this.count%2 === 0)
             {
                this.insertnode(root.right,node)
            }else{
                this.insertnode(root.left,node)
            }
        } 
    }
    countleafnodes() {
        return this.countleafnodesrec(this.root);
      }
    
      countleafnodesrec(node) {
        if (node === null) {
          return 0
        }
        if (node.left === null && node.right === null) {
          return 1
        }
        return (
          this.countleafnodesrec(node.left) + this.countleafnodesrec(node.right)
        )
      }

      findLargestNode() {
        if (this.isempty()) {
          console.log("Tree is empty.");
          return null;
        }
      
        let largest = null;
        this.findLargestNodeHelper(this.root, (node) => {
          if (largest === null || node.value > largest) {
            largest = node.value;
          }
        });
      
        return largest;
      }
      
      findLargestNodeHelper(node, callback) {
        if (node === null) {
          return;
        }
      
        callback(node);
        this.findLargestNodeHelper(node.left, callback);
        this.findLargestNodeHelper(node.right, callback);
      }
      
    }
const N = new Tree()
N.insertion(10)
N.insertion(865)
N.insertion(5)
N.insertion(30)
N.insertion(60)
N.insertion(70)
N.insertion(85)
N.insertion(80)
N.insertion(8)
N.insertion(9)
//N.countleafnodes()
console.log("Is tree empty ? :",N.isempty());
console.log("Number of leaf nodes:",N.countleafnodes());
console.log("largest node:",N.findLargestNode());
//console.log(N)