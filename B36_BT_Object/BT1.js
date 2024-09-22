/*
    Object exercises
    1. Creat an object student with name is Easy Frontend and age is 18
    2. Check if an object is empty (means have no keys)
    3. Get average mark of an object
    //calcAvgMark({math: 10, english: 8}) ---> 9
*/

//---------- BT1 -------------------
const student = {
    name: 'Easy Frontend',
    age: 18,
}

//-------------- BT2 ----------------
let cnt = 0;
for(let key in student){
    cnt++;
}
if(cnt == 0) console.log('Empty');

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

//----------- BT3 -------------------
function calcAvgMark(mark){
    const length = Object.keys(mark).length;
    let sum = 0;

    for (const key in mark) {
       const value = mark[key];
       sum += value;
    }

    return (sum / length).toFixed(2);
}

console.log(calcAvgMark({math: 10, english: 9}));