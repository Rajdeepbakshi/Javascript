let userScore = 10
const minValue = 0
for(userScore; userScore>=minValue; userScore = userScore-1){
    if (userScore==5) {
        continue;
    }
    console.log(`UserScore is ${userScore}`)
}