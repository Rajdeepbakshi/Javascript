function f1(){
    console.log("inside f1");
}

function f2(){
    console.log("inside f2");
    f1();
    return 7+8;
}

function f3(){
    console.log("inside f3");
    f2(); // just call f2
    return 5; // return 5
}

function f4(){
    console.log("inside f4");
    const x = 10; // a variable with a value 10
    const y = f3(); // we call f3 and assign its return value to y
    return x+y; //sum up x an y
}

console.log("Start");
const result = f4();
console.log(result);