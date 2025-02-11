import LinkedList from "./linkList.js";

export default class HashMap {
  #n = 0;
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
    this.bucket = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
 
    return hashCode;
  } 

  set(key, value) {
    if (this.capacity * this.loadFactor < this.#n) {
      this.capacity *= 2;
    }
    let index = this.hash(key);
    this.#checkIndex();
    if (this.bucket[index] === undefined) {
      this.bucket[index] = new LinkedList();
      this.bucket[index].append([key, value]);
      this.#n++;
    }
    else if (this.bucket[index].findKey(key) === null) {
      this.bucket[index].append([key, value]);
      this.#n++;
    }
    else {
      this.bucket[index].at(this.bucket[index].findKey(key)).value[1] = value;
    }
  }
  
  get(key) {
    let index = this.hash(key);
    this.#checkIndex();
    return this.bucket[index] !== undefined && this.bucket[index].findKey(key) !== null ? this.bucket[index].at(this.bucket[index].findKey(key)).value[1] : null;
  }
  
  has(key) {
    let index = this.hash(key);
    this.#checkIndex();
    return this.bucket[index] !== undefined && this.bucket[index].containsKey(key);
  }
  
  remove(key) {
    let index = this.hash(key);
    this.#checkIndex();
    if (this.bucket[index] !== undefined) {
      this.bucket[index].removeAt(this.bucket[index].findKey(key));
      if (this.bucket[index].size() === 0) {
        this.bucket[index] = undefined;
      }
      this.#n--;
      return true;
    }
    return false;
  }
  
  length() {
    return this.#n;
  }
  
  clear() {
    this.#n = 0;
    this.capacity = 16;
    this.bucket = new Array(this.capacity);
  }
  
  keys() {
    const key = [];
    this.bucket.forEach(b => {
      if (b !== undefined) {
        b.getValues().forEach(v => key.push(v[0]));
      }
    });
    return key;
  }
  
  values() {
    const value = [];
    this.bucket.forEach(b => {
      if (b !== undefined) {
        b.getValues().forEach(v => {
          if (!value.includes(v[1])) {
            value.push(v[1])
          }
        });
      }
    });
    return value;
  }
  
  entries() {
    const result = [];
    this.bucket.forEach(b => {
      if (b !== undefined) {
        b.getValues().forEach(v => result.push(v));
      }
    });
    return result;
  }
  
  #checkIndex(index) {
    if (index < 0 || index >= this.bucket.length) {
      throw new Error("Trying to access index out of bounds");
    }    
  }
 
}