/*
    Một số thao tác cơ bản với Object
    1. Đặt tên cho Key
    - Với tên biến/tên function thì không được dùng reserved keywords.
    - Còn với tên key của object thì thoải mái, kể cả reserved keywords, nhưng không khuyến khích sử dụng

    2. Property value shorthand (Có thể viết tắt)

    3. Object destructuring

    4. Kiểm tra key có trong object hay không
    - Dùng in operator để kiểm tra xem một key có tồn tại trong object hay không

*/
//Đặt tên cho key của object
const student = {
    name: 'Easy Frontend',
    const: 'haha',
    function: 'its work',
    true: 'work too',
}

//Viết tắt: Shorthand
const Name = 'Easy Frontend';
const age = 18;

const student1 = {
    Name, //tên key và tên value giống nhau
    age,
}

//Object destructuring
//old way
const name = student.name;
const age = student.age;
//new way usign object destructuring
const {name, age} = student;

//Ktra key có trong object hay không
const xehoi = {
    color: 'red',
    weight: 555,
    speed: 123,
}
'name' in xehoi; //false
'color' in xehoi; //true

//------------------------ Clone Object -------------------------------------------------
const student = {
    name: 'Easy Frontend',
    age = 18,
}

const moreProps = {
    isHero: true,
    gender: 'male',
}
//v1: Using Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);
//v2: Using spread operator (shorter, easier to read)
const cloneStudent2 = {
    ...student,
    ...moreProps,
}

//-------------------------- Deep Clone Object --------------------------------------------
const student = {
    name: 'Easy Frontend',
    age: 18,

    mark: {
        math: 10,
        english: 7,
    }
}

const clonedStudent = {
    ...student,
}
cloneStudent.mark.math = 1;
console.log(student.mark.math); //1 :)) haha
//Tức là nếu ta clone như thông thường thì nó chỉ clone được các kiểu primitive type thôi
//còn các kiểu như object bên trong thì nó sẽ tham chiếu đến. Nên nếu ta thay đổi bản clone thì bản chính cũng bị thay đổi
//lúc này sinh ra một kiểu mới: đó là deep clone ===> tạo ra một bản sao hoàn toàn mới
const clonedStudent = {
    ...student,
    mark: {
        ...student.mark,
    }
}
cloneStudent.mark.math = 1;
console.log(student.mark.math); //10