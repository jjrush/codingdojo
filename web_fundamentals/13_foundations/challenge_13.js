// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function replaceNegativesWithString(array)
{
    for( var i = 0 ; i < array.length ; i++ )
    {
        if( array[i] < 0 )
        {
            array[i] = "Dojo";
        }
    }
    return array;
}

console.log(replaceNegativesWithString([-1,-3,2]));