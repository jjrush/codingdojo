// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function getAvg(array)
{
    var sum = 0;
    var length = array.length;
    for( var i = 0 ; i < length ; i++ )
    {
        sum = sum + array[i];
    }
    return sum / length;
}

var array = [1,3,5,7,20];

console.log(getAvg(array));