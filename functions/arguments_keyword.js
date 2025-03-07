function addNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

//variable arguments
console.log(addNumbers(9,1,2));
console.log(addNumbers(9,1,2,3,4,5,6,7));