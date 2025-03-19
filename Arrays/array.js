//array 

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"];

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array Methods

myArr.push(6)
myArr.pop();
myArr.unshift(); //-----> add to the beginning
myArr.shift(); //-----> remove from the beginning
console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(6));


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

//slice don't manipulate the original array   
// splice manipulates the original array


