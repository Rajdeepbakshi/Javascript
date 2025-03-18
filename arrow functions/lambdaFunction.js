//Lambda function ---> Arrow function () => {}

    function processArray(array, fa) {
        for (let i=0; i<array.length; i++) {
            console.log("index", i, "value", array[i], "return value of fn", fa(array[i]));
        }
    }

    processArray([2,3,4,1,5], (x) => { return x*x*x;});