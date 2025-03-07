const user = {
    "first Name" : "Rajdeep",
    name : "Rajdeep",
    email : "rajdeep@gmail.com",
    age : "22",
    isAdmin : false,
    isLoggedIn : true,
    tea : ["lemon", "peach", "ginger"],
    address : {
        city: "jaipur",
        state : "West Bengal"
    }
}

const anotherUser = user;
console.log(user.age)

console.log(Object.keys(user.address));