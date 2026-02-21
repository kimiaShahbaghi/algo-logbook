# 🔗 Day 1: Singly Linked Lists

**Date:** February 21, 2026  
**Topic:** Linear Data Structures  
**Goal:** Implement a Singly Linked List from scratch in JavaScript.

---

## 💡 Core Concepts

A **Singly Linked List** is a collection of nodes where each node contains data and a "next" pointer to the subsequent node. Unlike arrays, nodes are not stored contiguously in memory.

### 🏗️ The Building Blocks

- **Node**: A simple object with `value` and `next`.
- **Head**: The entry point (first node).
- **Tail**: The exit point (last node).
- **Length**: Tracking size manually (saves $O(n)$ traversal time).

---

## 🛠️ Implemented Operations

| Method             | Description                | Time Complexity |
| :----------------- | :------------------------- | :-------------- |
| `push(val)`        | Add to the end             | $O(1)$          |
| `pop()`            | Remove from the end        | $O(n)$          |
| `unshift(val)`     | Add to the beginning       | $O(1)$          |
| `shift()`          | Remove from the beginning  | $O(1)$          |
| `get(idx)`         | Retrieve node at index     | $O(n)$          |
| `set(idx, val)`    | Update node at index       | $O(n)$          |
| `insert(idx, val)` | Add node at specific index | $O(n)$          |

---

## 🧠 Key Takeaways & Edge Cases

1.  **Empty List Check:** Always handle the case where `this.length === 0` to avoid trying to access properties of `null`.
2.  **The "Ghost" Tail:** When performing a `pop()` or `shift()`, if the list becomes empty (length goes from 1 to 0), both `head` and `tail` **must** be set back to `null`.
3.  **Middle Insertion:** To insert at index $i$, you must stop your traversal at $i - 1$. If you go to $i$, you've gone too far to link the previous node to the new one.
4.  **Efficiency:** Linked lists are superior to arrays for `unshift` and `shift` operations ($O(1)$ vs $O(n)$) because no re-indexing is required.

---

## ✅ Today's Progress

- [x] Create Node and LinkList classes.
- [x] Implement insertion (push, unshift, insert).
- [x] Implement deletion (pop, shift).
- [x] Implement access/update (get, set).

