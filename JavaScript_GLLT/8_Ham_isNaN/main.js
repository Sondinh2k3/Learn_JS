/*
    isNaN(value): kiểm tra xem giá trị(hoặc biểu thức) truyền vào: Kiểm tra value không phải định 
    dạng số, hoặc không thể chuyển sang định dạng số
    - Step 1: cố gắng chuyển đổi về kiểu Number
    - Step 2: * Trả về true nếu giá trị sau chuyển đổi không phải là kiểu số
              * Trả về false nếu giá trị sau chuyển đổi là kiểu số
*/

let a = 123;
console.log(isNaN(a));

//Đặc biệt có 2 giá trị true/false ===> Có thể được ép kiểu ngầm sang số 1/0 được
console.log(isNaN(true));
console.log(isNaN(false));