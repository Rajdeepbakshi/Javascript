const user = {
    username: "Rajdeep",
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`) // this refers to the current context
    }
}

user.welcomeMessage() // Rajdeep, welcome to website
user.username = "Raju"
user.welcomeMessage() // Raju, welcome to website


// ++++++++++++++++++++++++++++++++++++++++++++++++++++Some Interview Questions +++++++++++++++++++++++++++++++++++++++++++++
                                            // In browser the object is window object
                                           // In node the object is global object
                                          // In strict mode the object is undefined
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function hello() {
    let username = "Rajdeep"
    console.log(this.username) // we cant access the username in a function
}
hello()