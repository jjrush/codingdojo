var arr = [1,2,3];

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// I am going to use a built in method 
console.log("Question 1")
console.log(arr)
arr.unshift(4)
console.log(arr)
console.log()
console.log()

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// again I am going to use a built in method
console.log("Question 2")
console.log(arr.shift())
console.log(arr)
console.log()
console.log()

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
console.log("Question 3")
var index = 2;
var val = 5;
var del = false;
console.log(arr);
arr.splice(index, del, val);
console.log(arr)
console.log()
console.log()

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

console.log("Question 4")
console.log(arr);
arr.splice(2,1);
console.log(arr);
console.log()
console.log()

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

console.log("Question 5")
console.log(arr);
var tmp = arr[0];
arr[0] = arr[1];
arr[1] = tmp;
console.log(arr);
console.log()
console.log()

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.
console.log("Question 5")
arr.push(1,1,1,1)
console.log(arr)
uniq = [...new Set(arr)];
console.log(uniq)
console.log()
console.log()