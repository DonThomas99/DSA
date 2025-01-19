class Node
{
    constructor()
    {
        this.children = {}
        this.iswordend = false
    }
}
class trie
{
    constructor()
    {
        this.root = new Node
    }

    insert(word)
    {
        let curr =this.root
        for(let i =0;i<word.length;i++)
        {
            let chartoinsert = word[i]
            if(!(chartoinsert in curr.children))
            {
                curr.children[chartoinsert] = new Node()
            }
             curr = curr.children[chartoinsert]
        } 
        curr.iswordend = true
    }
    contains(word)
    {
        let curr = this.root
        for(let i =0;i<word.length;i++)
        {
            let chartofind = word[i]
            if(!(chartofind in curr.children))
            {
                return false
            }
             curr = curr.children[chartofind]
        } 
        return curr.iswordend
    }
    startswithprefix(prefix)
    {
        let curr = this.root
        for(let i =0;i<prefix.length;i++)
        {
            let chartofind = prefix[i]
            if(!(chartofind in curr.children))
            {
                 return false
            }
             curr = curr.children[chartofind]
        } 
        return true
    }

    endswithsuffix(suffix) {
        const nodes = []
      
        function endsWithSuffix(word, suffix) {
          if (suffix.length > word.length) {
            return false
          }
      
          let wordIndex = word.length - 1
          let suffixIndex = suffix.length - 1
      
          while (suffixIndex >= 0) {
            if (word[wordIndex] !== suffix[suffixIndex]) {
              return false
            }
            wordIndex--
            suffixIndex--
          }
      
          return true
        }
      
        function traverse(node, word) {
            if (node.iswordend && endsWithSuffix(word, suffix)) {
              nodes.push(word)
            }
          
            const childrenKeys = Object.keys(node.children)
            for (let i = 0; i < childrenKeys.length; i++) {
              const char = childrenKeys[i]
        traverse(node.children[char], word + char)
            }
          }
          
      
        traverse(this.root, "")
      
        return nodes
      }
      

      findLongestWord()
       {
        let longestWord = ""
    
        function traverse(node, word) {
          if (node.iswordend && word.length > longestWord.length) {
            longestWord = word;
          }
    
          const childrenKeys = Object.keys(node.children)
          for (let i = 0; i < childrenKeys.length; i++) {
            const char = childrenKeys[i]
            traverse(node.children[char], word + char)
          }
        }
    
        traverse(this.root, "")
    
        return longestWord
      }

      startsWith(prefix){
        const nodes =[]
        function traverse(node,word){
          if(node.iswordend && word.startsWith(prefix)){
            nodes.push(word)
          }
          const childrenKeys = Object.keys(node.children)
          for(let i =0;i<childrenKeys.length;i++){
            let char = childrenKeys[i]
            traverse(node.children[char],word + char)
          }
        }
        traverse(this.root,'')
        return nodes
      }

      delete(word){
        function deleteHelper(node,word,depth){
          if(!node){
            return false
          }
          if(depth == word.length){
            if(!node.iswordend){
              return false
            }
            node.iswordend = false
            return Object.keys(node.children).length ===0
          }
          let char = word[depth]
          if(!deleteHelper(node.children[char],word,depth+1)){
            return false
          }
          delete node.children[char]
          return Object.keys(node.children).length === 0 && !node.iswordend
        }
        deleteHelper(this.root,word,0)
      }

      display(){
        let words = []
        function traverse(node,word){
          if(node.iswordend){
            words.push(word)
          }
          let childrenKeys = Object.keys(node.children)
          for(let i=0;i<childrenKeys.length;i++){
            let char = childrenKeys[i]
            traverse(node.children[char],word+char)
          }
        }
        traverse(this.root,'')
        console.log(words);
      }

}
const n = new trie()
n.insert("apple")
n.insert("orange")
n.insert("banana")
n.insert("grape")
n.insert("google")
n.display()
n.delete("apple")
n.display()
console.log("Find the word(s) ending with 'a':", n.startsWith("a"));

