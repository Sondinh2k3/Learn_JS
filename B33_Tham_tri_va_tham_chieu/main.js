/*
    - Tham chiếu thường áp dụng đối với các kiểu dữ liệu phức tạp như: object, array, function

------ Phân biệt tham trị và tham chiếu: ------------------------------
- Tham trị (Primitive Type/Value Type) ===> Thường dùng trong các kiểu dữ liệu như: boolean, number, string, null, undefined, symbol
- Tham chiếu (Reference Type) ===> Thường dùng cho các kiểu dữ liệu: Object, array, function



*/

//value type, the variable store the value
const name = 'Easy Frontend';
const age = 18;
const isHero = true;
const selectedStudent = null;
// |-----------------------------------|
// |    name = 'Easy Frontend'         |
// |-----------------------------------|

//reference type, the variable store the address /ref of the value
//so in this example
// object value {name, age, ...} will be store at address 123456 (somewhere in memory)
//and the student variable just hold the address 123456 (that's why we call reference)
const student = {
    name: 'Easy Frontend',
    age: 18,

};
// |------------------------------------|                 | ADDRESS = 123456            |
// |    student = 123456                |   ------>       | VALUE: {name, age, ...}     |
// |------------------------------------|                 |-----------------------------|

// -------------------- Phép gán với Object --------------------------------------------
//primitive type
const a = 5;
let b = a;
b = 10;
console.log(a); //5

//reference type
const student1 = {name: 'Easy Frontend', };
const student2 = student1;
student2.name = 'Son Dinh';

console.log(student1.name); //Son Dinh ???

//-------------------- So sánh Object ---------------------------------------------------
// Khi so sánh tham chiếu (Object, array, function) thì địa chỉ tham chiếu sẽ được đem ra so sánh. Nếu
//cùng trỏ về một địa chỉ tham chiếu thì sẽ trả về true, còn lại là false

student1 === student2; //true as they both point to the same reference 

const student3 = {name: 'Easy Frontend', };
const student4 = {name: 'Easy Frontend', };
student3 === student4; //false as they are difference refs

//------------------------- Pass by values vs pass by reference ---------------------------

function changePrimitive(name1, age1){
    name1 = 'Easy Frontend';
    age1 = 18;
}
let name1 = 'Easy';
let age1 = 17;
changePrimitive(name1, age1);
console.log(name1); //Easy
console.log(age1); //17


function changeReference(student){
    student.name = 'Easy Frontend';
    student.age = 18;
}
const student5 = {
    name: 'Easy',
    age: 17,

}

changeReference(student5);
console.log(student5.name);  //Easy Frontend
console.log(student5.age);  //18