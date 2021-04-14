// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(array)
{
    var temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array;
}

console.log(swapValues([1,5,10,-2]))