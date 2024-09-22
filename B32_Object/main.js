/*

    1. Tổng quan về object
    2. Một số thao tác cơ bản với object
    3. Tham trị và tham chiếu
    4. Duyệt key của object
    5. Bài tập thực hành

1. Tổng quan về object
- Khai báo object:
 * Với các loại dữ liệu mình đã biết như number, string, boolean, nó chỉ là một giá trị đơn giản.
 * Nhưng với object là kiểu dữ liệu có thể chứa nhiều dữ liệu khác nhau thông qua các cặp key, value
 * value có thể là kiểu dữ liệu bất kỳ: number, string, boolean, object, array, function, ...
 
Ví dụ: 
    object syntax{
        key1: value1,
        key2: value2,
        ...
    }

- Lấy value của key:
 * Dùng dot operator để truy cập key của object
 * Dùng square brackets (dấu ngoặc vuông) để truy cập dynamic key của object, kể cả key có space
 

*/
//ví dụ về object
const student = {
    id: 1,
    name: 'sondinh',
    name: 'dinhson', //same key come later will take precedence
    isHero: true,
    'key has space': 'supper', //key with spaces should be wrapped in quotes

    sayHi(){
        console.log('Hello');
    }
}

console.log(student.name);
console.log(student['key has space']); //supper

//Thêm key mới cho object:
const student1 = {
    id: 1,
    name: 'Van A',
    isHero: true,
}
//update value of key
student1.name = 'Van B';
//simply set new key for object
student1.age = 18;
student1['mark'] = 10;


//Xóa một key
//Để xóa một key ra khỏi object hiện tại, dùng delete operator
delete student1.name;