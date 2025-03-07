function fun() {  //TDZ for x
    console.log(x);
    let x = 10;
    console.log(x);
}

fun();