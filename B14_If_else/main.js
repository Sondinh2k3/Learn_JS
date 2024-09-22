/*
    Control flow with if ... else
    - condition là một giá trị boolean
    - Nếu condition là kiểu giá trị khác, nó sẽ tự động chuyển đổi về boolean
    - Hạn chế sử dụng else, bỏ được hãy bỏ với if ... return 
    - Hạn chế dùng nested if ... else (if else lồng nhau)
*/

//GOOD
if(condition) doSomething();

//GOOD
if(condition){
    doSomething();
    doSomethingElse();
}

//OK
if(condition){
    doSomething();
}
else{
    doSomethingElse();
}

//BAD
if(condition){
    doSomething();
}
else if(anothercondition){
    doSomethingAnother();
}
else{
    doSomethingFinally();
}

//Avoid to use nested if
if(condition1){
    if(condition2){
        doSomething();
    }
    else{
        doSomethingElse();
    }
}