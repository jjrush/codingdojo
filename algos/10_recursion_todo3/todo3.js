// To Do 3


// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.
function rBinarySearch(array, target, min, max)
{
	var tArray = array.slice();
	if (min === undefined) min = 0;
	if (max === undefined) max = array.length - 1;

	var guess = Math.floor(((max - min) / 2) + min);
	if (max <= min && tArray[guess] !== target) 
    {
        return false;
    }
	else if (tArray[guess] === target) 
        return true;
	else if (tArray[guess] < target) 
        return rBinarySearch(tArray, target, guess + 1, max);
	else 
        return rBinarySearch(tArray, target, min, guess - 1);
}
arr = [1,3,5,6];
target = 4;
console.log(arr + ": " + target);
console.log(rBinarySearch(arr,target))
arr = [4,5,6,8,12]
target = 5;
console.log(arr + ": " + target);
console.log(rBinarySearch(arr,target))

// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).
function gcf(a, b) {
    if ( ! b) {
        return a;
    }

    return gcf(b, a % b);
};

console.log("GCF")
console.log(gcf(5,15))
console.log(gcf(123456,987654))