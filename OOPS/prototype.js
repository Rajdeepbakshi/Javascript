// let myName = "Rajdeep     "

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "webs",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.rajdeep  = function() {
    console.log("Hello Rajdeep");
}

myHeros.rajdeep();