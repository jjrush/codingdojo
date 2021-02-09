const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Logic
// first is the 2nd element so 2
// second is the 4th element so 5
// third is the last element so 2

// Output
// False
// True
