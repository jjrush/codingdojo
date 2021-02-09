// Functions are always hoisted first
// vars are hoisted immediately after (below) the functions
// https://262.ecma-international.org/5.1/#sec-10.5

// #1 - GIVEN
console.log(hello);
var hello = "world";
// var hello;
// console.log(hello);
// hello = "world";

// output:
//    undefined

// #2 - GIVEN
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }
// var needle;
// needle = "haystack";
// test();

// output:
//    magnet

// #3 - GIVEN
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
print();
console.log(brendan);
// function print() {
//   brendan = "only okay";
//   console.log(brendan);
// }
// var brendan;
// brendan = "super cool";
// print();
// console.log(brendan);

// output:
//    only okay
//    only okay

// #4 - GIVEN
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// function eat() {
//   var food;
//   food = "half-chicken";
//   console.log(food);
//   food = "gone";
// }
// var food;
// food = "chicken";
// console.log(food);
// eat();

// output:
//    chicken
//    half-chicken

// #5 - GIVEN
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// var mean;                 // only var is hoisted
// mean();
// console.log(food);
// mean = function () {      // equals acts as an anchor
//   var food;
//   food = "chicken";
//   console.log(food);
//   food = "fish";
//   console.log(food);
// };
// console.log(food);

// output:
//    TypeError: mean is not a function

// #6 - GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   genre = "r&b";
//   console.log(genre);
// }
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);

// output:
//    undefined
//    rock
//    r&b
//    disco

// #7 - GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  console.log(dojo);
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// function learn() {
//   var dojo
//   console.log(dojo);
//   dojo = "seattle";
//   console.log(dojo);
//   dojo = "burbank";
//   console.log(dojo);
// }
// dojo = "san jose";    // Javascript allows this even though it is NOT defined as a var in the global scope
// console.log(dojo);
// learn();
// console.log(dojo);

// output:
//    san jose
//    undefined          // local scoped variable is used
//    seattle
//    burbank
//    san jose

// #8 - GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//     dojo.hiring = true;
//   } else if (dojo.students <= 0) {
//     dojo = "closed for now";
//   }
//   return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// output:
//    TypeError: Assignment to constant variable