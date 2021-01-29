// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getSumOfOddNumbers(limit)
{
    var sum = 0;
    for( var i = 1 ; i <= limit ; i++ )
    {
        if ( i % 2 != 0 )
        {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(getSumOfOddNumbers(5000));