// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegativesInArray(array)
{
    for( var i = 0 ; i < array.length ; i++ )
    {
        if ( array[i] < 0 )
        {
            array[i] = 0;
        }
    }
    return array;
}

console.log(replaceNegativesInArray([1,5,10,-2]))