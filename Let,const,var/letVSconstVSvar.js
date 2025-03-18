//The major difference between let and var exist around scoping mechanism.

//Let and const supoort block scope, if block scope not present then it will be global scope.
//Var supports function scope, and if function scope not present then it will be global scope.


//let and const support TDZ
//var does not support TDZ


//Differences between let and const
//Reassignment

//variables declared with let are reassignable
//const on th eother hand is not

//var is not used generally because of issue in block scope and functional scope

function letReassignment() {
let x = 10;
console.log(x);
x = "Rajdeep";
console.log(x);
}

letReassignment();



function constReassignment() {
    const x = 10;
    console.log(x); //print x
    x = "Rajdeep"; // error because x is const, reassignment is not possible
    console.log(x);
    }
    
    constReassignment();