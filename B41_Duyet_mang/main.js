/*
    Duyệt các phần tử của Array
    - Before ES5: for...i
    - ES5: forEach
    - ES6: for...of
*/

//before ES5
const numberList = [2, 4, 6];
for(let i = 0; i < numberList.length; i++){
    const number = numberList[i];
    console.log(number);
}

//ES5: foreach
numberList.forEach(x => console.log(x));

//ES6: for...of
for(const number1 of numberList){
    console.log(number1);
}

//=============== Syntax của forEach: =====================

//Arrow Function: () => {}
    
//forEach((element) => {...});
//forEach((element, index) => {...});
//forEach((element, index, array) => {...});

//Callback Function
//forEach(callbackFn);
//forEach(callbackFn, thisArg);

//Inline callback Function
//forEach(function callbackFn(element) {...});
//forEach(function callbackFn(element, index) {...});
//forEach(function callbackFn(element, index, array) {...});
//forEach(function callbackFn(element, index, array) {...}, thisArg);