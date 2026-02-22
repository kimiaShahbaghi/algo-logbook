# 🔗 Day 2: Traversal & Counting

**Date:** February 22, 2026  
**Topic:** Traversal and Reinforcing Linked List Concepts  
**Goal:** Strengthen understanding of node connections, traversal, and edge cases.

---

## 💡 Core Focus

- Traversal: moving node by node from `head` to `tail`.
- Counting occurrences of a value (`count(value)` method).
- Reusing methods instead of duplicating logic.
- Reinforcing empty and single-node edge cases.

---

## 🛠️ Implemented/Practiced Operations

| Method       | Description                            | Time Complexity |
| :----------- | :------------------------------------- | :-------------- |
| `count(val)` | Counts occurrences of a value          | $O(n)$          |
| Traversal    | Visiting nodes sequentially            | $O(n)$          |
| Reuse logic  | Calling existing methods when possible | varies          |

---

## 🧠 Key Takeaways

1. **Traversal is essential:** Most operations in linked lists involve moving node by node.
2. **Edge cases matter:** Always handle empty lists and single-node lists to avoid dangling `head` or `tail`.
3. **Reusing methods:** Calling `unshift` or `push` inside `insert` prevents duplicated logic and reduces bugs.
4. **Big-O insight:** Both `get(idx)` and `count(val)` are O(n), but `get` can stop early while `count` must traverse all nodes.

---

## ✅ Today's Progress

- [x] Practiced traversal using loops
- [x] Implemented `count(value)` method
- [x] Reviewed single-node and empty list edge cases
- [x] Noted the difference between index-based access and value-based traversal
