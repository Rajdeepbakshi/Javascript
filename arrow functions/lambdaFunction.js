//Lambda function ---> Arrow function () => {}

    function processArray(array, fa) {
        for (let i=0; i<array.length; i++) {
            console.log("index", i, "value", array[i], "return value of fn", fa(array[i]));
        }
    }

    processArray([2,3,4,1,5], (x) => { return x*x*x;});


    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    //console.log(addTwo(2,3));

    const addThree = (num1, num2, num3) => num1 + num2 + num3; // implicit return
    //console.log(addThree(2,3,4));

    const additionTwo = (num1, num2) => ({username: "Rajdeep"})
    console.log(additionTwo(3,4));
    