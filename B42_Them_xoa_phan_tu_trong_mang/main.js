/*
    Thêm xóa phần tử trong mảng

    Nhóm hàm thêm xóa phần tử:
    1. push(element0, ..., elementN): Thêm vào cuối mảng
    2. pop(): Xóa cuối mảng
    3. shift(): Xóa đầu mảng
    4. unshift(element0, ..., elementN): Thêm đầu mảng
    5. splice(start, deleteCount, item1, ..., itemN): xóa/thêm giữa mảng
*/

//1. Add new items at the end:
const numberList = [1, 2, 3];
numberList.push(4, 5);
console.log(numberList);

//2. remove items at the end
const lastNumber = numberList.pop();
console.log(numberList, lastNumber);

//3. Add new items at the beginning
const numberList1 = [1, 2, 3];
numberList1.unshift(0);
console.log(numberList1);

//4. remove items at the beginning
const numberList2 = [1, 2, 3];
const firstNumber = numberList2.shift();
console.log(firstNumber, numberList2);

//5. add/remove items at the middle of an array
const numberList3 = [3, 5, 7];
numberList3.splice(0,0, 2, 4);
console.log(numberList3);