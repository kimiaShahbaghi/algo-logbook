🔗 Day 4: Advanced Linked List Operations
Date: February 24, 2026
Topic: Removing Nodes, Middle Node Access & Reverse Practice
Goal: Practice finding, removing, counting nodes, and re-implementing reverse in a singly linked list.
💡 Core Focus

- Access nodes by index or position from the end.
- Safely remove nodes from beginning, middle, end, or by position from the tail.
- Rewriting reverse() again to reinforce pointer manipulation.
- Build mental models for list traversal and node deletion.

🛠️ Implemented Methods
MethodDescriptionTime Complexity
removeFromEnd(index)Removes node counting from the end (0 = last node)O(n)
findMiddle()Returns the middle node of the listO(n)
reverse()Reverses the linked list in-placeO(n)
push(val)Add node to the endO(1)
pop()Remove node from the endO(n)
unshift(val)Add node to the beginningO(1)
shift()Remove node from the beginningO(1)
count(val)Count occurrences of a valueO(n)

🧠 Key Takeaways

1. Remove From End: Compute the target index from the start (length - index - 1) to remove safely.
2. Middle Node: Use Math.floor((length-1)/2) to return the lower middle for even lengths.
3. Pointer Safety: Always update prev.next before removing nodes to avoid losing the rest of the list.
4. Edge Cases: Handle empty list, single-node list, and removal of head/tail separately.
5. Reverse Practice: Rewriting reverse() reinforced understanding of pointer manipulation.
6. Mental Model: Traversal first, adjust connections second.

✅ Today's Progress

- [x] Re-implemented reverse() method for practice
- [x] Implemented removeFromEnd(index) to delete nodes by position from the end
- [x] Implemented findMiddle() to return middle node
- [x] Practiced traversing and updating pointers carefully
- [x] Reinforced head/tail updates and edge case handling
- [x] Integrated new methods with previously implemented linked list operations
