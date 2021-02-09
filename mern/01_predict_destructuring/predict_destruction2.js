const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Output 
// An error is thrown
// otherName is not defined so you are trying to overwrite the key "name" with the value "otherName" when destructuring and since
// "otherName" was never declared anywhere it fails 