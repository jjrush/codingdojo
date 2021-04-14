// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function getMaxMinAvg(array)
{
    var min = array[0];
    var max = array[0];
    var avg = 0;
    var sum = 0;
    for( var i = 0 ; i < array.length ; i++ )
    {
        if( array[i] > max )
        {
            max = array[i];
        }
        if( array[i] < min )
        {
            min = array[i];
        }
        sum = sum + array[i];
    }
    avg = sum / array.length;
    return [ max, min, avg ];
}

console.log(getMaxMinAvg([1,5,10,-2]));