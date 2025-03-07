// array --> list of numbers that we will get
//fn --> is a function passed as an argumnet to the processArray function


function processArray(array,fn) {
    for(let i=0; i<array.length; i++) {
        console.log("index", i, "value", array[i], "return value of fn", fn(array[i]));
        //i--> index, array[i]--> value at the ith index, fn(array[i])--> it will pass array[i] as argument to fn
        //fn(array[i]) -->
        //    1. we are calling fn
        //    2. argumnet passed to call fn is array[i]
        //    3. fn represents the function passed as the argument to processArray
    }
}

processArray([2,3,4,1,5], function cube(x) {return x*x*x; }); //passing function as an argument
