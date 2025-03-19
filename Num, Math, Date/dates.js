//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2022, 0, 27)
console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000)); // convert to seconds

Date.toLocaleString('default' , {
    weekday: 'long',
    timeZone: 'UTC',
})