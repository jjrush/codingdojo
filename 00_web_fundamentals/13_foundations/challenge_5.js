// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(array)
{
    var max = -1000;
    if ( array.length > 0 )
    {
        max = array[0];
    }
    else
    {
        return max;
    }
    for( var i = 0 ; i < array.length ; i++ )
    {
        if ( array[i] > max )
        {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([-3,3,5,7]));