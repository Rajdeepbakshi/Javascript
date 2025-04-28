// let temperature = 25
// if( temperature < 20){
//     //body - executable code
//     console.log("It's really cold")
// } else {
//     console.log("It's really hot")
// }

// let score = 99
// let life = 3
// console.log("Welcome to the Game")
// if (score > 99){
//     console.log("You gained a life")
//     score = score - 100
//     life++
// } else {
//     console.log("You don't get a life")
//     life--
// }

// console.log(`Your score is ${score} and my life is ${life}`)



// let getStarFromUser = "9"
// let starInNumber =  parseInt(getStarFromUser)

// if (starInNumber == 1) {
//     console.log("poor");
// } else if  (starInNumber == 2) {
//     console.log("emm,ok");
// } else  if (starInNumber == 3) {
//     console.log("average");
// } else if  (starInNumber == 4) {
//     console.log("cool");
// } else if (starInNumber == 5) {
//     console.log("great");
// } else if  (starInNumber == 6) {
//     console.log("awesome");
// } else if  (starInNumber == 7) {
//     console.log("Nailed it !!!");
// } else {
//     console.log("I don't know the rating !!!");
// }




// //login system

// const email = "rajdeep@gmail.com"

// //if email is present, ask for password. Otherwise ask for email
//  if (email == "raj@gmail.com") {
//     console.log(" Please enter your password")
//  }else {
//     console.log("Please enter your email")
//  }



//  //if user provides email, password , then allow login, else ask for it

// email = ""
//  const password = ""

//  if  (email) {
//     if (password){
//         console.log("Welcome to the app")
//     } else {
//         console.log("Please enter your password")
//     }
//     }else {
//         console.log("Please enter your email")
// }


// // logical operation
// // && -> and ; || => OR

// if(email && password){
//     console.log("Welcome to the app");
// }else {
//     console.log("Please enter your email and password");
// }


// let age = 19

// if(age>=18){
//     console.log("You will get the driving license");
// } else {
//     console.log("You will not get the driving license");
// }

//if

// const temperature = 41

// if(temperature < 50) {
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000
// // if(balance > 500) console.log("test");
// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("You can buy the product");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("You can login");
}

