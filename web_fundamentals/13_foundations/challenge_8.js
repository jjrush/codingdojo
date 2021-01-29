// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(array, limit)
{
    var counter = 0;
    for( var i = 0 ; i < array.length ; i++ )
    {
        if ( array[i] > limit )
        {
            counter++;
        }
    }
    return counter;
}

var y = 3;
var array = [1, 3, 5, 7];
console.log(greaterThanY(array, y));
