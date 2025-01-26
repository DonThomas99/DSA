class Node {
  constructor(){
    this.children = {}
    this.iswordend = false
  }
}

class trie{
  constructor(){
    this.root = new Node
  }
  insert(word){
    let curr = this.root
    for(let i=0;i<word.length;i++){
      let charToInsert = word[i]
      if(!(charToInsert in curr.children)){
        curr.children[charToInsert] = new Node
      }
      curr= curr.children[charToInsert]
    }
    curr.iswordend = true 
  }

  contains(word){
    let curr = this.root 
    for(let i =0;i<word.length;i++){
      let charToFind = word[i]
      if(!(charToFind in curr.children)){
        return false
      }
      curr = curr.children[charToFind]
    }
    return curr.iswordend
  }
    startsWith(prefix){
      let curr = this.root
      let matchedWords = []
      for(let i=0;i<prefix.length;i++){
        let preword = prefix[i]
        if(!(preword in curr.children)){
          console.log('No word with the prefix');
          return false
        }
        curr = curr.children[preword]
      }
      function traverse(node,word){
        if(node.iswordend){
          matchedWords.push(word)
        }
        let childrenKeys = Object.keys(node.children)
        for(let i =0;i<childrenKeys.length;i++){
          let char = childrenKeys[i]
          traverse(node.children[char],word+char)
        }
      }
      traverse(curr,prefix)
      return matchedWords
    }

    endsWith(suffix){
      let nodes = []
      function suffixHelper(word,suffix){
        if(word.length < suffix.length ){
          return false
        }
        let suffixIndex = suffix.length
        let wordIndex = word.length
        while(suffixIndex>=0){
          if(word[wordIndex] != suffix[suffixIndex])
            return false
          wordIndex--
          suffixIndex--
        }
        return true
      }
      
      function traverse(node,word){
        if(node.iswordend && suffixHelper(word,suffix)){
          nodes.push(word)
        }
        let childrenKeys = Object.keys(node.children)
        for (let i = 0; i < childrenKeys.length; i++) {
          let char = childrenKeys[i];
               traverse(node.children[char],word+char)          
        }
      }
      traverse(this.root,"")
      return nodes
    }
    longestWord(){
      let longest = ""
      function traverse(node,word){
        if(node.iswordend && word.length > longest.length){
          longest = word
        }
        let childrenKeys = Object.keys(node.children)
        for (let i = 0; i < childrenKeys.length; i++) {
          let char = childrenKeys[i];
            traverse(node.children[char],word+char)          
        }
      }
      traverse(this.root,"")
      return longest
    }
    delete(word){
      function deleteHelper(node,word,depth){
        if(!node){
         
          return false
        }
        if(word.length == depth){
          if(!node.iswordend){
            return false
          }
          node.iswordend = false
        }
        let char = word[depth]
        if(!deleteHelper(node.children[char],word,depth+1)){
          return false
        }
        delete node.children[char]
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
        for (let i = 0; i < childrenKeys.length; i++) {
          let char = childrenKeys[i];
          traverse(node.children[char],word + char)
        }
      }
      traverse(this.root,'')
      return words
    }
}

const n = new trie()
n.insert("apple")
n.insert("orange")
n.insert("banana")
n.insert("grape")
n.insert("google")
// console.log(n.contains('apple'));
console.log(n.display())
n.delete("apple")
console.log(n.display())

// console.log(n.longestWord())
// console.log("Find the word(s) startsa with 'a':", n.endsWith("a"));

