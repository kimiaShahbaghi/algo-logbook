# 🔗 Day 3: Reversing a Singly Linked List

**Date:** February 23, 2026  
**Topic:** Reversing Pointers & In-Place Linked List Operations  
**Goal:** Learn to reverse a linked list by changing pointers, not values.

---

## 💡 Core Focus

- Nodes do not move in memory — only `.next` pointers change.
- Reverse a singly linked list in-place.
- Maintain correct `head` and `tail` after reversal.
- Trace the algorithm step by step to build a mental model.

---

## 🛠️ Implemented Methods

| Method         | Description                       | Time Complexity |
| :------------- | :-------------------------------- | :-------------- |
| `reverse()`    | Reverses the linked list in-place | O(n)            |
| `push(val)`    | Add node to the end               | O(1)            |
| `pop()`        | Remove node from the end          | O(n)            |
| `unshift(val)` | Add node to the beginning         | O(1)            |
| `shift()`      | Remove node from the beginning    | O(1)            |
| `count(val)`   | Count occurrences of a value      | O(n)            |

---

## 🧠 Key Takeaways

1. Save `next` before reversing `current.next`.
2. Reverse order of pointers in each iteration:  
   next = current.next
   current.next = prev
   prev = current
   current = next 3. Update head and tail after reversal: old head → new tail, `prev` → new head.
3. Reverse is O(n) in a single pass, no extra nodes or arrays needed.
4. Mental model: “Steal from current, prepend to prev.”

---

## ✅ Today's Progress

- [x] Implemented `reverse()` method
- [x] Fully understood pointer manipulation
- [x] Tested reverse on empty, single-node, and multi-node lists
- [x] Practiced tracing node connections step by step
- [x] Reinforced head/tail updates and method interactions

---
