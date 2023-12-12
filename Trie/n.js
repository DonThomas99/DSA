class Node {
    constructor() {
      this.children = {};
      this.iswordend = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let curr = this.root;
      for (let i = 0; i < word.length; i++) {
        let chartoinsert = word[i];
        if (!(chartoinsert in curr.children)) {
          curr.children[chartoinsert] = new Node();
        }
        curr = curr.children[chartoinsert];
      }
      curr.iswordend = true;
    }
  
    contains(word) {
      let curr = this.root;
      for (let i = 0; i < word.length; i++) {
        let chartofind = word[i];
        if (!(chartofind in curr.children)) {
          return false;
        }
        curr = curr.children[chartofind];
      }
      return curr.iswordend;
    }
  
    startswithprefix(prefix) {
      let curr = this.root;
      let matchedWords = [];
  
      for (let i = 0; i < prefix.length; i++) {
        let chartofind = prefix[i];
        if (!(chartofind in curr.children)) {
          return matchedWords;
        }
        curr = curr.children[chartofind];
      }
  
      function traverse(node, word) {
        if (node.iswordend) {
          matchedWords.push(word);
        }
  
        const childrenKeys = Object.keys(node.children);
        for (let i = 0; i < childrenKeys.length; i++) {
          const char = childrenKeys[i];
          traverse(node.children[char], word + char);
        }
      }
  
      traverse(curr, prefix);
  
      return matchedWords;
    }
  

  }
  
  const n = new Trie();
  n.insert("apple");
  n.insert("orange");
  n.insert("banana");
  n.insert("grape");
  n.insert("google");
  
  console.log("Words with the prefix 'g':", n.startswithprefix("g"));
  