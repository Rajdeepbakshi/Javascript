function fun() {
    //console.log("Called the function fun");

    return function cleanUp() {
        //console.log("Cleaning up the resources");
    }
}

//const result = fun();
//result();

/**
 * What is stored inside result? --> It stores the function returned by fun , i.e. cleanup
 */

// function addTwoNumbers(number1, number2) {
//     console.log(number1 +  number2); // number1 and number2 are parameters
    
// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2; // number1 and number2 are parameters
    return result // the code written after result dont get executed
    console.log("This will not be executed"); // this code will not be executed
}

const result = addTwoNumbers(2, 3); //3,4 are arguments
//console.log("Result is:", result); // 5

function loginUserMessage(username) {
    if(username === undefined) {
  //      console.log("Please enter your username");
        return
    }
    return `${username}, you are logged in`
}

//console.log(loginUserMessage("Rajdeep")); // Rajdeep, you are logged in
//console.log(loginUserMessage()); // Please enter your username

function calculateCartPrice(...num1) { //if we add val1, val2 so the output will be 500 as 200 goes for val1 and 400 goes for val2
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: "Rajdeep",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
