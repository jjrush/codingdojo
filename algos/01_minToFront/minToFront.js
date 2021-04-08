// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
let arr = [4,2,1,3,5];
console.log(arr);
let min = arr[0];
let i = 0;
for (let index = 1; index < arr.length; index++) {
    if ( arr[index] < min ) {
        min = arr[index];
        i = index;
    }
}

arr.splice(i,1);
arr.unshift(min);
console.log(arr);

