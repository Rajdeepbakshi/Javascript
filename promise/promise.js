const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function() {
        console.log('Async task completed');
        resolve();
        
    }, 1000)
})

promiseOne.then(function() {
    console.log('Promise resolved successfully');
})

new Promise(function(resolve, reject) {
    console.log('Async task 2 completed');
    resolve();
    
}).then(function() {
    console.log('Promise resolved successfully');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "raj", email: "rajdeep@gmail.com"}) // we can pass any data we want to resolve
    },1000)
})

promiseThree.then(function(user){
    console.log('User data received:', user); // whatever we pass in the resolve function will be available here
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Raj", password: "123"});
        } else {
            reject('Error: Something went wrong!');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log((user));
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch((error) => {
    console.error(error);
}).finally(() => console.log("Promise is either resolved or rejected")
)


const promiseFive = new Promise(function(resolve, reject) {
     setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Javascript", password: "123"});
        } else {
            reject('Error: JS went wrong!');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
    
}

getAllUsers()

