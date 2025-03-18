console.log(Math.random()); //----> it will return a random number between 0 and 1


//You will be given two values, x and y and you have to generate a random number
//between x and y inclusive of both x and y
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function randomInRange(x, y) { //10,20 --> y-x+1 = 20-10+1 = 11
    return Math.floor(Math.random()*(y-x+1) + x); // [10,21]

}

console.log(randomInRange(10, 20));