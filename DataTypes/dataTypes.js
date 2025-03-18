// alert(3 + 3) //we are using nodejs not the browser


let name = "rajdeep"
let age = 18
let isAdult = true

// number => 2 to power 53
// string => ""
// boolean => true/false
//bigint
//null => standalone value/ object
//undefined => no value assigned
//symbol => uniqueness




//object 

console.log(typeof name);
console.log(typeof null)  //object
console.log(typeof undefined)  //undefined



// primitive
// 7types : string, number, boolean, null, undefined, symbol, bigint

//Js is dynamically typed language

// Reference (Non Primitive): -----
//Arrays, objects, functions

//Arrays

const heros = ["shaktiman", "batman", "spiderman"];

//Objects
let myObj = {
    name: "Rajdeep",
    age: 22
}

//Functions
const myFunction = function() {
    console.log("Hello World");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap (Non Primitive)

let myYoutubename = "technoRaj.com"
anothername = "rajdeep"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Rajdeep@google.com"
console.log(userOne.email);
console.log(userTwo.email);



