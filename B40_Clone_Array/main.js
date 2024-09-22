/*
    Clone Array
    - Issue: Array cũng là tham chiếu, nên cẩn thận khi dùng phép gán:
*/
const numberList = [1, 2, 3];
const anotherList = numberList;

anotherList[0] = 4; //4 2 3
console.log(numberList[0]); //4 

//Solution: Clone Array trước khi thực hiện thay đổi

const numberList1 = [1, 2, 3];
const anotherList1 = [...numberList1]; 
//spread operator (...): sẽ phân rã một mảng ra một list các phần tử

anotherList1[0] = 4;
console.log(numberList1); //[1, 2, 3]