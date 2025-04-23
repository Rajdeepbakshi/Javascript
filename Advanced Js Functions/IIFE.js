(function chai () { // named IIFE
    console.log("chai");
}) ();   // we cant write two IIFE without a semicolon closing the first one



( () => { // unnamed IIFE
    console.log("chai");
}) ()