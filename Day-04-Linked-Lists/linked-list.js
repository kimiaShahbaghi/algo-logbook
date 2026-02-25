class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  reverse() {
    if (this.length <= 1) return this;

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

  findMiddle() {
    if (this.length === 0) return null;

    let targetIndex = Math.floor((this.length - 1) / 2);
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < targetIndex) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }

  removeFromEnd(index) {
    if (index < 0 || index >= this.length) return this;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    if (index === 0) {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.length--;
      return this;
    }

    if (index === this.length - 1) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let targetIndex = this.length - index - 1;
    let prev = this.head;
    let currentIndex = 0;

    while (currentIndex < targetIndex - 1) {
      prev = prev.next;
      currentIndex++;
    }

    prev.next = prev.next.next;
    this.length--;
    return this;
  }
}

const list = new LinkedList();
list.push(1).push(2).push(3).push(4);
