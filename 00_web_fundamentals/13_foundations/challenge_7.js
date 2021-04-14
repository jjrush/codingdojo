// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function getOddNumbers(limit)
{
    var array = [];
    for( var i = 1 ; i <= limit ; i+=2 )
    {
        array.push(i);
    }
    return array;
}

console.log(getOddNumbers(50));