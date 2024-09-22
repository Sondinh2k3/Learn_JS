/*
    Tổng quan về array (mảng):
    1. Tổng quan về array
    2. Array object - Props and Methods
    3. Array destructuring
    4. Clone mảng
    5. Duyệt mảng
    6. Thêm xóa phần tử
    7. Kiểm tra tồn tại của phần tử
    8. Tìm kiếm một phần tử
    9. Transform mảng
    10. Lọc phần tử theo điều kiện
    11. Sắp xếp mảng
    12. Reduce
    13. Bài tập thực hành
*/

// ----------------- Tổng quan về array ---------------------------------
/*
    Khai báo mảng:
    - Đặt tên nên dùng suffix là List. Egs: Dùng numberList thay vì numbers
    - Mỗi phần tử có thể có một kiểu dữ liệu khác nhau

*/  
//Khai báo mảng rỗng:
const numberList = [];

const numberList1 = [1, 2, 3]; //a list of numbers
const wordList = ['Easy', 'Frontend']; //a list of strings
const flagList = [true, false, false]; //a list of boolean
//a list of student
const studentList = [
    {id: 1, name: 'Van A'},
    {id: 2, name: 'Van B'},
    {id: 3, name: 'Van C'},
];
//a list of list
const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, true]
];
//a list of mixed data type
const mixedList = [
    1, 2, 'word', true, null, undefined, {id: 1, name: 'Easy Frontend'}, [1, 2, 3]
];
//===> Trong thực tế thì khai báo được theo kiểu trên, nhưng không ai làm như vậy cả :)))

//-------------- Truy xuất phần tử của mảng ------------------------
/*
    - Dùng square brackets để truy xuất phần tử tại vị trí index
    - Index của mảng bắt đầu từ 0
    - Nếu length của array bằng 3, thì index lớn nhất là 3-1=2
*/
const numberList2 = [3, 5, 7]; //recommended
numberList2[0]; //3
numberList2[1]; //5
numberList2[2]; //7

numberList2.length; //3
numberList2[numberList2.length - 1]; //7 (the last element)

//------------------- Mảng 2 chiều ----------------------
//Là một mảng mà mỗi phần tử của nó lại là một mảng nữa
const board1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

board1[0]; //[1, 2, 3]
board1[1]; //[4, 5, 6]
board1[2]; //[7, 8, 9]

board1[0][1]; //2
board1[1][2]; //6
