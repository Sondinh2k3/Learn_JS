/*
    Write a function to check if a number a positive even number
    If yes, return true. Otherwise return false
*/

//Kỹ thuật đặt cờ hiệu (Flag)
function isPositiveEvenNumber(n){
    let isValid; //undefined

    //checking ...
    if(n>0 && n%2 === 0){
        isValid = true;
    }
    else{
        isValid = false
    }

    return isValid;
}

console.log(isPositiveEvenNumber(5));

// version 2
function isPositiveEvenNumber2(n){
    let isValid = false;

    //checking ...
    if(n>0 && n%2 === 0){
        isValid = true;
    }

    return isValid;
}

// version 3
function isPositiveEvenNumber3(n){

    //checking ...
    if(n>0 && n%2 === 0){
        return true;
    }

    return false;
}

// version 4
function isPositiveEvenNumber4(n){

    //checking ...
    return (n>0 && n%2 === 0);
}