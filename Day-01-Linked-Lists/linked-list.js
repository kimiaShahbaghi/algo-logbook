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
      currentArray.push(current);
      current = current.next;
    }
    return currentArray;
  }

  pop() {
    if (this.length === 0) return "list is empty";
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
    if (!this.length) return "empty list";
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
    if (index < 0 || index > this.length) return null;

    const newNode = new Node(value);

    // Case 1: Insert at the beginning
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode; // If list was empty
      this.length++;
      return this;
    }

    // Case 2: Insert at the end
    if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

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
}

const list = new LinkList();
