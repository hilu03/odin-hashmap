class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
      tail.nextNode = node;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let oldHead = this.head;
    this.head = node;
    node.nextNode = oldHead;
  }

  size() {
    let n = 0;
    let node = this.head;
    while (node !== null) {
      node = node.nextNode;
      n++;
    }
    return n;
  }

  tail() {
    let node = this.head;
    while (node !== null && node.nextNode !== null) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    if (index < 0) {
      console.log('Invalid index.');
      return;
    }
    let node = this.head;
    let n = 0;
    while (node !== null) {
      if (index === n) {
        return node;
      }
      n++;
      node = node.nextNode;
    }
    return null;
  }

  pop() {
    let node = this.head;
    while (node !== null) {
      if (node.nextNode === null) {
        this.head = null;
      }
      else if (node.nextNode.nextNode === null) {
        node.nextNode = null;
      }
      node = node.nextNode;
    }
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  containsKey(key) {
    let node = this.head;
    while (node !== null) {
      if (node.value[0] === key) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let n = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return n;
      }
      node = node.nextNode;
      n++;
    }
    return null;
  }

  findKey(key) {
    let n = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value[0] === key) {
        return n;
      }
      node = node.nextNode;
      n++;
    }
    return null;
  }

  toString() {
    let node = this.head;
    let str = '';
    while (node !== null) {
      str += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    str += 'null';
    return str;
  }

  insertAt(value, index) {
    if (index < 0) {
      console.log('Invalid index.');
      return;
    }
    let node = new Node(value);
    let cur = this.head;
    if (cur === null) {
      this.head = node;
      return;
    }
    let prev = null;
    let n = 0;
    while (cur !== null) {
      if (n === index) {
        prev.nextNode = node;
        node.nextNode = cur;
        break;
      }
      n++;
      prev = cur;
      cur = cur.nextNode;
    }
  }

  removeAt(index) {
    if (index < 0) {
      console.log('Invalid index.');
      return;
    }
    if (this.head === null) {
      return;
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let cur = this.head;
    let prev = null;
    let n = 0;
    while (cur !== null) {
      if (n === index) {
        prev.nextNode = cur.nextNode;
        break;
      }
      n++;
      prev = cur;
      cur = cur.nextNode;
    }
  }

  getValues() {
    let node = this.head;
    const values = [];
    while (node !== null) {
      values.push(node.value);
      node = node.nextNode;
    }
    return values;
  }
}