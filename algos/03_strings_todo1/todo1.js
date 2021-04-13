// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
let s = " Pl ayTha tF u nkyM usi c ";
function removeWhitespace(s)
{
    return s.replace(/ /g,'');
}

console.log(s)
console.log(removeWhitespace(s))
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(s)
{
    var t = s.match(/\d+/g)
    return t.join("")
}
s = "0s1a3y5w7h9a2t4";
console.log(s)
s = getDigits(s);
console.log(s);
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function getAcronmym(s)
{
    let concat = "";
    for (let index = 1; index < s.length; index++) {
        if( s[index-1] == " " )
        {
            concat = concat + s[index];
        }
        
    }
    return concat;
}
s = " there's no free lunch - gotta pay yer way. ";
console.log(s);
s = getAcronmym(s)
console.log(s);
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpaces(s)
{
    let c = 0;
    for (let index = 0; index < s.length; index++) {
        if( s[index] != " " )
            c = c + 1;
        
    }
    return c;
}
s = "Honey pie, you are driving me crazy";
console.log(s.length);
console.log(countNonSpaces(s));
console.log(s);
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShortStrings(arr,min)
{
    for (let index = 0; index < arr.length; index++) {
        if( arr[index].length < min )
        {
            arr.splice(index,1);
            index = index - 1;
        }
    }
    return arr
}
arr=["hello","veryveryverylong","try","no","alsosuperlong"];
console.log(arr);
arr = removeShortStrings(arr,4);
console.log(arr);