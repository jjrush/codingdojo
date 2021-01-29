// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function getArrayOneTo255()
{
    array = []
    for( var i = 1 ; i <= 255 ; i++ )
    {
        array.push(i)
    }
    return array
}
console.log(getArrayOneTo255())
