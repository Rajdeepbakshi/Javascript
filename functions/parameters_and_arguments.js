function calculateSquare(num){
    //Here num is a parameter
    //logic to calculate the square of a number
    let squareValue = num * num;

    //return the output of the Square value
    return squareValue;
}

let result1 = calculateSquare(9);
//Here 9 is an argument
//calculateSquare(9) <-------- Function call
console.log(result1)


function sumofThreeNo(num1,num2,num3) {
    let sumofNumbers = num1 + num2 + num3;

    return sumofNumbers;
}
let result2 = sumofThreeNo(10,20,30);
console.log(result2) //output 60