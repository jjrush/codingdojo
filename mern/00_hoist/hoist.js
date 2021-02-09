// Given
console.log(hello);  
var hello = 'world';   

// Rewritten
var hello = 'world'; 
console.log(hello);  

// Guess
// world

////////////////////////////////////////////////

// Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Rewritten
function test(){
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();

// Guess
// magnet

////////////////////////////////////////////////

// Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Rewritten
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
var brendan = 'super cool';
console.log(brendan);

// Guess
// super cool

////////////////////////////////////////////////

// Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Rewritten
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
var food = 'chicken';
console.log(food);
eat();

// Guess
chicken
half-chicken

//////////////////////////////////////////////

// Given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Rewritten
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

// Guess
// The code is not valid and simply outputs an error that "mean is not a function" 

//////////////////////////////////////////////

// Given
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

// Rewritten
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
var genre = "disco";
console.log(genre);
rewind();
console.log(genre);

// Guess
// undefined
// rock
// r&b
// disco

////////////////////////////////////////////////

// Given
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

// Rewritten
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// Guess
// san jose
// undefined 
// seattle
// burbank
// san jose

////////////////////////////////////////////////

// Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Rewritten
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// Guess
// The code fails when attempting to set the entire const object "dojo" equal to the string "closed for now"
// If you change it to let instead of const you get the following
// { name: 'Chicago', students: 65, hiring: true }
// closed for now