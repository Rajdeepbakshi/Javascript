const name = "Rajdeep"
const repoCount = 50

//console.log(name + repoCount); 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rajdeep')

console.log(gameName.__proto__);  //------------>>>> To access prototypes of string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 2)
console.log(newString);  //------------>>>> To access substring of string

const newStringOne = "  Rajdeep   "
console.log(newStringOne.trim());  //------------>>>> To remove spaces from string

const url = "https://rajdeep.com/rajdeep%20bakshi"

console.log(url.replace('%20', '-'));  //------------>>>> To replace special characters

