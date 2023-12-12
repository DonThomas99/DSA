class HashTable {
    constructor(size) {
      // this.table = new Array(size);
      // this.size = size;
      this.hashTable = new Array(null)*size

      
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    hash2(key) {
      // Secondary hash function
      const prime = 31;
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += prime * key.charCodeAt(i);
      }
      return hash % (this.size - 1) + 1;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const step = this.hash2(key);
      let current = index;
      let count = 0;
  
      while (count < this.size) {
        if (!this.table[current]) {
          this.table[current] = [key, value];
          return;
        }
        current = (current + step) % this.size;
        count++;
      }
      throw new Error('Hash table is full. Cannot insert key-value pair.');
    }
  
    get(key) {
      const index = this.hash(key);
      const step = this.hash2(key);
      let current = index;
      let count = 0;
  
      while (count < this.size) {
        if (this.table[current] && this.table[current][0] === key) {
          return this.table[current][1];
        }
        current = (current + step) % this.size;
        count++;
      }
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      const step = this.hash2(key);
      let current = index;
      let count = 0;
  
      while (count < this.size) {
        if (this.table[current] && this.table[current][0] === key) {
          this.table[current] = undefined;
          return;
        }
        current = (current + step) % this.size;
        count++;
      }
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  const table1 = new HashTable(10);
  
  // table.set('name', 'John');
  // table.set('age', 25);
  // table.set('city', 'New York');
  
  // table.set('name', 'Don');
  // table.set('age', 24);
  // table.set('city', 'Kottayam');
  //table.display();
  console.log(table1)
  //console.log(table.get('age'));
  
 // table.remove('age');
  //table.display();
  