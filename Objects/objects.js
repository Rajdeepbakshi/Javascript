// singleton

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: 'Rajdeep',
    "fullname": 'Rajdeep Bakshi',
    [mySym]: "mykey1",
    age: 23,
    location: 'Kolkata',
    email: 'rajdeep@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
}

//console.log(JsUser["fullname"]);
//console.log(JsUser[mySym]);

JsUser.email = "rajchatgpt.com"
//Object.freeze(JsUser); //--------> Freezing the object
JsUser.email = "rajdeep@microsoft.com" // no effect
//console.log(JsUser);

JsUser.greeting = function () {
    //console.log("Hello JS user");
    
}

JsUser.greetingTwo = function () {
    //console.log(`Hello JS user, ${this.name}`); // this keyword refers to the object itself and to access anything inside the object we use this keyword
    
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

// const tinderUser = new Object(); // singleton object'
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Rajdeep"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rajdeep@gmail.com",
    fullname : {
        userfullname : {
            firstName: "Rajdeep",
            lastName: "Bakshi"
        }
    }
}

//console.log(regularUser.fullname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

//const obj3 = {obj1, obj2} // object destructuring
//const obj3 = Object.assign({}, obj1, obj2) // object destructuring
const obj3 = {...obj1, ...obj2} 
//console.log(obj3);

const users = [
{
    id: 1,
    email: "rajdeep@gmail.com",
}, {
    id: 2,
    email: "rajdeep@gmail.com",
},
{
    id: 3,
    email: "rajdeep@gmail.com",
}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns the keys of the object
console.log(Object.values(tinderUser))

const course = {
    coursename: "Javascript",
    price: 999,
    courseInstructor: "Hitesh",
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

