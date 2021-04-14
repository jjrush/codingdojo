// To Do 1


// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function recursiveSigma(n)
{
    if( n < 0 )
        return;
    if ( n > 2000 )
    {
        console.log("Too big")
        return;
    }
    if ( n === 1 )
        return 1;
    return recursiveSigma(n-1) + n;
}

console.log(recursiveSigma(5))


// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function recursiveFact(n)
{
    n = Math.floor(n);
    if( n < 0 )
        return 0;
    if ( n === 0 )
        return 1;
    if ( n > 200 )
    {
        console.log("Too big")
        return;
    }
    if ( n === 1 )
        return 1;
    return recursiveFact(n-1) * n;
}

console.log(recursiveFact(3))
console.log(recursiveFact(6.5))