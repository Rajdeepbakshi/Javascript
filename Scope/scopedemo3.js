var teacher = "Rajdeep Bakshi"; // -------> Global Scope

function fun() { //---------> Global Scope as it is not in any other function
    var teacher = "Raju";
    content = "JS"; //---------> no scope is it is not a formal declaration
    //console.log("hello", teacher);
}

    function gun() {
        var student ="Rahul";
        //console.log("welcome to the class", student);
    
}

fun();
gun();

//console.log(teacher, content);


function one() {
    const username = "Rajdeep";

    function two() {
        const website = "Youtube";
        console.log(username);
        
    }

    //console.log(website);

    two();
    
}

one();



// +++++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++


function addone(num) { //---------> function declaration
    return num + 1
}

addone(5)

const addTwo = function(num) { //---------> function expression
    return num + 2
}

addTwo(5)