// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
arr = [0,1,2,3,4,5];
console.log(arr);
arr.reverse();
console.log(arr);
console.log("");
console.log("");
console.log("");
console.log("");

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotateArr(arr,shiftBy,reverse) {
    if( reverse )
    {
        for (let index = 0; index < shiftBy; index++) {
            const element = arr.pop();
            arr.unshift(element);
        }
    } else {
        for (let index = 0; index < shiftBy; index++) {
            const element = arr.shift();
            arr.push(element);
        }
    }

}
console.log(arr);
rotateArr(arr,1,false);
console.log(arr);
rotateArr(arr,1,true);
console.log(arr);
console.log("");
console.log("");
console.log("");
console.log("");

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function removeValues(arr, min, max)
{
    for (let index = 0; index < arr.length; index++) {
        if( arr[index] > max || arr[index] < min )
            arr.splice(index,1);
    }
    return arr;
}

console.log(arr)
arr = removeValues(arr,1,4);
console.log(arr)
console.log("");
console.log("");
console.log("");
console.log("");

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr,arr2)
{
    for (let index = 0; index < arr2.length; index++) {
        arr.push(arr2[index])
    }
    return arr;
}


console.log(arr)
let arr2 = ['a','b']
console.log(arr2)
arr = arrConcat(arr,arr2);
console.log(arr)
console.log("");
console.log("");
console.log("");
console.log("");
