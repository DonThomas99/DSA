class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    hash2(key) {
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
  
      if (!this.table[index]) {
        this.table[index] = [[key, value]];
      } else {
        let current = (index + step) % this.size;
        while (this.table[current] && this.table[current][0][0] !== key) {
          current = (current + step) % this.size;
        }
        if (!this.table[current]) {
          this.table[current] = [[key, value]];
        } else {
          this.table[current][0][1] = value;
        }
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const step = this.hash2(key);
  
      let current = index;
      while (this.table[current]) {
        if (this.table[current][0][0] === key) {
          return this.table[current][0][1];
        }
        current = (current + step) % this.size;
        if (current === index) {
          break;
        }
      }
  
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      const step = this.hash2(key);
  
      let current = index;
      while (this.table[current]) {
        if (this.table[current][0][0] === key) {
          this.table[current] = undefined;
          return;
        }
        current = (current + step) % this.size;
        if (current === index) {
          break;
        }
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
  
  const table = new HashTable(10);
  
  table.set('name', 'John');
  table.set('age', 25);
  table.set('city', 'New York');
  
  table.set('name', 'Don');
  table.set('age', 24);
  table.set('city', 'Kottayam');
  
  table.display();
  