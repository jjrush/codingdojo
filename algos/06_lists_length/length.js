// Length
// Create a new SLL method length() that returns number of nodes in that list.

var List = require("collections/list");
var list = new List([1, 2, 3]);

function getLength(l)
{
    return l.length;
}

console.log(getLength(list));