"use strict"; //---------> this enables strict mode in JS and treat all JS code as newer version of JS
var teacher = "Rajdeep Bakshi"; // -------> Global Scope

function fun() { //---------> Global Scope as it is not in any other function
    var teacher = "Raju";
    content = "JS"; //---------> now it will not make content auto global , as we are in strict mode 
    console.log("hello", teacher);
}

    function gun() {
        var student ="Rahul";
        console.log("welcome to the class", student);
    
}

//console.log(teacher, content); //--------> Rajdeep Bakshi, No auto global promotion here

fun();
gun();

console.log(teacher, content);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode - for more info on strict mode