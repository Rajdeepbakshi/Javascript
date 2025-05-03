//for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World";

for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    //console.log(`Each char is ${greet}`);
    
}



// Maps

const map = new Map() // maps are known for unique values; duplicate values are not allowed
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
    
