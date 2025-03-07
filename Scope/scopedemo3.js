var teacher = "Rajdeep Bakshi"; // -------> Global Scope

function fun() { //---------> Global Scope as it is not in any other function
    var teacher = "Raju";
    content = "JS"; //---------> no scope is it is not a formal declaration
    console.log("hello", teacher);
}

    function gun() {
        var student ="Rahul";
        console.log("welcome to the class", student);
    
}

fun();
gun();

console.log(teacher, content);