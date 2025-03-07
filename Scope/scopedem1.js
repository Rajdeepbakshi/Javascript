var teacher = "Rajdeep Bakshi"; // -------> Global Scope

function fun() { //---------> Global Scope as it is not in any other function
    var teacher = "Raju";
    console.log("hello", teacher);
}

    function gun() {
        var student ="Rahul";
        console.log("welcome to the class", student);
    
}

fun();
gun();