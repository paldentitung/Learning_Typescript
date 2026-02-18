

let username : string = "Palden Dorje Titung";
let age : number = 19;
let hobbies : string[]= ["Reading","Coding","Gaming"];

console.log("Username",username)
console.log("Age",age)
console.log("Hobbies",hobbies)


/*
day 2
*/

//Tuples
//A tuple is an array with fixed types in a fixed order:

let person :[string ,number,boolean]= ["Palden",19,true];

// here you cannot do [19,Palden ,true]
console.log(person)

//Enums
//Enums are a way to give names to numeric values:

enum Color{
    Red,
    Yellow,
    Blue
}
let favoriteColor : Color = Color.Blue;
console.log(favoriteColor);


//Functions 
// you can define paramater and return types

function add(a : number,b: number):number{
    return a+b
}

function greet(name:string):void{
    console.log("Hello",name)
}

let result = add(9,10)

greet("Palden Dorje Titung")

console.log("result",result)


// Interfaces
// Interfaces define the structure of an object
interface Student {
    name:string,
    age:number,
    isActive:boolean
}

let student1 : Student = {
    name:"Palden Dorje Titung",
    age:19,
    isActive:true
}

console.log(student1);


// Type Aliases
// Similar to interfaces but more flexible:

type ID = string | number;
let userID : ID = "123abd";
let adminID : ID = 1229990;

// console.log(userID)
// console.log(adminID)

/*
 Union & Literal Types
*/
//Union lets a variable hold multiple types:

let score : number | string
score = 90
score ="A+"

// console.log(` score ${score}`)

// Literal types restrict exact values:

let direction : "Up" | "down" | "left" | "right";

direction = "Up";
//direction ="forword"; // here is error 

// console.log(direction)

/*
Type Assertion
*/
// It doesn’t change the value at runtime, it just helps the compiler understand the type.

let someValue: any = "Hello TS";

// We know this is a string, so we assert it
let strLength: number = (someValue as string).length;

console.log(strLength); // 8
