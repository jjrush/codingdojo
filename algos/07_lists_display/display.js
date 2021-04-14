// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!
var List = require("collections/list");
var list = new List([1, 2, 3]);

function display(l)
{
    let s = "";
    while( l.length != 0 )
    {
        s = s + " " + l.shift();
    }
    return s;
}

console.log(display(list))