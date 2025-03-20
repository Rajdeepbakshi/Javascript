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

console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);

JsUser.email = "rajchatgpt.com"
//Object.freeze(JsUser); //--------> Freezing the object
JsUser.email = "rajdeep@microsoft.com" // no effect
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`); // this keyword refers to the object itself and to access anything inside the object we use this keyword
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



