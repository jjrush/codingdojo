var List = require("collections/list");
var list = new List([1, 2, 3]);


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Fronts
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
console.log(list.toArray());
list.unshift(0);
console.log(list.toArray());

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
console.log(list.toArray());
list.shift(0,1);
console.log(list.toArray());

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
console.log(list.peek())
