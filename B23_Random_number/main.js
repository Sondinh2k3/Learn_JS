/*
    Random Number trong JS
    1. Random một số ngẫu nhiên trong khoảng [0, n]
    2. Random một số ngẫu nhiên trong khoảng [a, b]

    ===> Gợi ý: Sử dụng hàm Math.random() để làm việc này. Nhưng hàm này chỉ trả về trong khoảng [0, 1)


*/
//Random một số ngẫu nhiên trong khoảng [0, n]
function randomNumber(n){
    if(n <= 0) return -1;

    const random = Math.random() * n;
    const result = Math.round(random);
    
    return result;
}

//Random một số ngẫu nhiên trong khoảng [a, b]
function randomNumber2(a, b){
    if(a<0 || b<0 || a >= b) return -1;

    const random2 = Math.random() * (b-a);
    const result2 = Math.round(random2 + a);

    return result2;
}

console.log(randomNumber2(10,99));
console.log(randomNumber2(10,99));
console.log(randomNumber2(10,99));
console.log(randomNumber2(10,99));
console.log(randomNumber2(10,99));
console.log(randomNumber2(10,99));