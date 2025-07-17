const user = {
    username: "Rajdeep",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function() {
        //console.log("Got user details from database");
       // console.log(`Username: ${username}`); // This could not find the variable username
        console.log(`Username: ${this.username}`); // Using 'this' to refer to the current object
        console.log(this);
        
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // Returning 'this' allows the function to be used as a constructor
}

const userOne = new  User("Rajdeep", 12, true)
const userTwo = new User("John", 5, false) // This will overwrite userOne values
// new keyword creates a new object and sets 'this' to that object
console.log(userOne);
console.log(userTwo);