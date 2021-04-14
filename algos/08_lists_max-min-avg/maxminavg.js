// Max/Min/Average
var List = require("collections/list");
var list = new List([1, 2, 3, 4, 5, 6]);

// SList: Max
// Create method max() to return list’s largest val.
function getMax(l) {
    return l.max();
}
console.log(list.toArray())
console.log(getMax(list))


// SList: Min
// Create min(node) to return list’s smallest val.
function getMin(l) {
    return l.min();
}
console.log(list.toArray())
console.log(getMin(list))


// SList: Average
// Create average() to return average val.
function getAvg(l) {
    return l.sum() / l.length;
}
console.log(list.toArray())
console.log(getAvg(list))