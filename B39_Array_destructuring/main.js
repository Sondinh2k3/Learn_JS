
    // ---------------------Nhắc lại Object destructuring ------------------------------
    const student = {
        id: 1,
        name: 'Easy Frontend',
    }
    const {id, name} = student;
    console.log(id); //1
    console.log(name); //'Easy Frontend'

//------------------- Array Destructuring ------------------------------------------
//Tương tự
const numberList = [3, 5, 7];
//old way:
const first = numberList[0]; //3
const second = numberList[1]; //5
const third = numberList[2]; //7

//similar but new way:
const [first1, second1, third1] = numberList;

//or even direct array
const [first2, second2, third2] = [1, 3, 5, 7, 9];
//first2 = 1, second2 = 3, third2 = 5

//rest operator (...)
const [first3, second3, third3, ...rest] = [3, 5, 7, 9, 11];
console.log(rest); //[9, 11] ===> Nhiệm vụ của dấu ... là gom những thằng còn lại thành một mảng