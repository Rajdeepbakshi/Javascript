let userScore = 10
const minValue = 0
for(userScore; userScore>=minValue; userScore = userScore-1){
    if (userScore==5) {
        continue;
    }
    console.log(`UserScore is ${userScore}`)
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i+ " * " + j + " = " + i*j);
    }
}


