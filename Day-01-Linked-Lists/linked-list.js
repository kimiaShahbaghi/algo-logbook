class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    if (value === undefined) return this;
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    if (this.length === 0) {
      console.log("empty list");
      return;
    }

    let current = this.head;
    let currentArray = [];
    while (current !== null) {
      currentArray.push(current.value);
      current = current.next;
    }
    return currentArray;
  }

  pop() {
    if (this.length === 0) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.length--;
      return this;
    }
  }
  shift() {
    if (!this.length) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    } else {
      this.head = this.head.next;
      this.length--;
      return this;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    else {
      let current = this.head;
      let currentIndex = 0;
      while (current !== null) {
        if (currentIndex === index) {
          return current;
        }
        current = current.next;
        currentIndex++;
      }
      return null;
    }
  }
  set(index, value) {
    if (index < 0 || index >= this.length) return null;
    else {
      let current = this.head;
      let currentIndex = 0;
      while (current !== null) {
        if (currentIndex === index) {
          current.value = value;
          return this;
        }
        current = current.next;
        currentIndex++;
      }
      return null;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return "out of list range";

    const newNode = new Node(value);

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    // Case 3: Insert in the middle
    let prev = this.head;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      prev = prev.next;
      currentIndex++;
    }

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return this;
  }

  count(value) {
    if (this.length === 0 || value === undefined) return 0;
    let currentNode = this.head;
    let repeated = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        repeated++;
      }
      currentNode = currentNode.next;
    }
    return repeated;
  }
  reverse() {
    if (this.length === 0 || this.length === 1) return this;

    let prev = null;
    let current = this.head;

    this.tail = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return this;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    else {
      let prev = null;
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        currentIndex++;
        prev = currentNode;
        currentNode = currentNode.next;
      }
      prev.next = currentNode.next;
      this.length--;
      return this;
    }
  }
}

const list = new LinkList();
