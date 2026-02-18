var username = "Palden Dorje Titung";
var age = 19;
var hobbies = ["Reading", "Coding", "Gaming"];
console.log("Username", username);
console.log("Age", age);
console.log("Hobbies", hobbies);
/*
day 2
*/
//Tuples
//A tuple is an array with fixed types in a fixed order:
var person = ["Palden", 19, true];
// here you cannot do [19,Palden ,true]
console.log(person);
//Enums
//Enums are a way to give names to numeric values:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log(favoriteColor);
//Functions 
// you can define paramater and return types
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log("Hello", name);
}
var result = add(9, 10);
greet("Palden Dorje Titung");
console.log("result", result);
var student1 = {
    name: "Palden Dorje Titung",
    age: 19,
    isActive: true
};
console.log(student1);
var userID = "123abd";
var adminID = 1229990;
// console.log(userID)
// console.log(adminID)
/*
 Union & Literal Types
*/
//Union lets a variable hold multiple types:
var score;
score = 90;
score = "A+";
// console.log(` score ${score}`)
// Literal types restrict exact values:
var direction;
direction = "Up";
//direction ="forword"; // here is error 
// console.log(direction)
/*
Type Assertion
*/
// It doesn’t change the value at runtime, it just helps the compiler understand the type.
var someValue = "Hello TS";
// We know this is a string, so we assert it
var strLength = someValue.length;
console.log(strLength); // 8
