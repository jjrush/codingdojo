// Contains
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

var List = require("collections/list");
var list = new List([1, 2, 3]);

function contains(l, item) {
    if ( l.find(item) != 0 )
        return true;
    return false;
}


console.log(contains(list,1));