class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let charToinsert = word[i]
            if(!(charToinsert in curr.children)){
                curr.children[charToinsert] = new Node()
            }
            curr = curr.children[charToinsert]
        }
        curr.isWordEnd = true
    }

    contains(word){
        let curr = this.root
        for(let i =0;i<word.length;i++){
            let charTofind = word[i]
            if(!(charTofind in curr.children)){

                return false
            }
            curr = curr.children[charTofind]
        }
        return curr.isWordEnd
    }
}

const trie = new Trie
trie.insert('DON')
console.log(trie.contains('DON'))
// console.log(trie)