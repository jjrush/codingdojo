// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getSumOfEvenNumbers(limit)
{
    var sum = 0;
    for( var i = 1 ; i <= limit ; i++ )
    {
        if ( i % 2 == 0 )
        {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(getSumOfEvenNumbers(1000))