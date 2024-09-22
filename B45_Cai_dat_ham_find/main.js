/*
    Hãy tự cài đặt lại một hàm tương tự với hàm find
    Ví dụ: cài đặt hàm trả về phần tử chẵn đầu tiên
*/

//v1
function isEven(numberList){
    //Sử dụng kỹ thuật lính canh
    let value;

    for(let i = 0; i < numberList.length; i++){
        const number = numberList[i];
        if(number % 2 === 0){
            value = number;
            break;
        }
    }
    return value;
}

//v2
function isEven(numberList){

    for(let i = 0; i < numberList.length; i++){
        const number = numberList[i];
        if(number % 2 === 0){
            return number;
        }
    }
    return undefined;
}

//v3
function findFirstEven(numberList, callbackFn){

    for(let i = 0; i < numberList.length; i++){
        const number = numberList[i];
        if(callbackFn(number, i)){
            return number;
        }
    }
    return undefined;
}

function callbackFn(number){
    return number % 2 === 0;
}

