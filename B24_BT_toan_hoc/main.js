/*
    1. Write a function to calculate the area of a rectangle
    2. Write a function to calculate perimeter of a rectangle
    3. Write a function to calculate the area of a circle
*/
function chuViHCN(a, b){
    if(a <= 0 || b <= 0) return -1;
    return (a+b)*2;
}

function dienTichHCN(a, b){
    if(a <= 0 || b <= 0) return -1;
    return a*b;
}

function dienTichHinhTron(bankinh){
    if(bankinh <= 0) return -1;
    return Math.PI*Math.pow(bankinh, 2);
}

/*
    1. Write a function to check if a number is odd/even
    2. Write a function to check if a number is divisible by 5
    3. Write a function to check if a number is perfect square (số chính phương)
*/
function isEven(n){
    return n%2===0;
}

function isOdd(n){
    return !isEven(n);
}

function isDivisibleBy5(n){
    return n%5 === 0;
}

function isPerfectSquare(n){
    if(n<=0) return false;

    const k = Math.trunc(Math.sqrt(n));

    return k*k === n;
}


/*
    1. Convert hours to seconds.
    2. Given 3 number, find max
    2. Given 3 number, find max even number
*/
function convertHoursToSeconds(hours){

    const SECONDS_PER_HOUR = 3600;
    return hours * SECONDS_PER_HOUR; //Nếu ta dùng 3600 luôn mà không giải thích gì, thì nó được gọi là hardcode
}

function findMax(a, b, c){
    //Kỹ thuật lính canh: dùng một thằng làm lính canh giữ, sau đó duyệt từng thằng qua lính canh đó
    let max = a;

    if(b > max) max = b;
    if(c > max) max = c;

    return max;
}

function findMaxEven(a, b, c){
    //Kỹ thuật lính canh: dùng một thằng làm lính canh giữ, sau đó duyệt từng thằng qua lính canh đó
    let max = Number.NEGATIVE_INFINITY;

    if(a % 2 === 0 && a > max) max = a;
    if(b % 2 === 0 && b > max) max = b;
    if(c % 2 === 0 && c > max) max = c;

    return max;
}


/*
    1. Gets the ones of a number having 3 digits
    2. Gets the tens of a number having 3 digits
    3. Gets the hundreds of a number having 3 digits
    4. Sum all digits of a number having 3 digits
*/

function getOnesOfNumber(n){
    if(n.toString().length !== 3) return -1;

    return n%10;
}

function getTensOfNumber(n){
    if(n.toString().length !== 3) return -1;

    return Math.trunc(n/=10)%10;
}

function getHundredsOfNumber(n){
    if(n.toString().length !== 3) return -1;

    return Math.trunc(n/=100)%10;
}

function sumOfAllDigits(n){
    if(n.toString().length !== 3) return -1;

    return getOnesOfNumber(n) + getTensOfNumber(n) + getHundredsOfNumber(n);
}

console.log(sumOfAllDigits(249));