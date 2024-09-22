/*
    String excercise

    Check if a string contains an email address with '@gmail.com' or not
*/  
function hasEmail(str){
    // return str.includes('@gmail.com');
    return str.indexOf('@gmail.com') >= 0;
}

console.log(hasEmail('ledinhsonx1td@gmail.com'));