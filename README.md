# LEARN JAVASCRIPT

### LESSON 1: LÀM QUEN SYNTAX

Syntax (cú pháp) là một bộ quy tắc hình thành nên ngôn ngữ lập trình

**1, Câu lệnh in ra terminal:**

> - Để in ra terminal, ta dùng câu lệnh: console.log();

**_Example:_**

```JavaScript
console.log('Welcome to Javascript');
```

**2, Learn about "use strict" mode**

> - Từ ES5 có nhiều thay đổi và conflig với code trước đó, nên cần có cơ chế để quyết định sử dụng code mới hay cũ
> - "use strict" là cái flag để biết mình muốn dùng code mới (tức từ ES5 trở về sau)
> - Hiện thì nếu không có nhắc gì thêm thì mặc định ta sẽ dùng "use strict" nhé.
> - Lưu ý: "use strict" phải được đặt ở đầu file
> - Một khi đã bật "use strict" thì không có cách nào cancel được
> - Còn nếu chỉ muốn bật strict mode cho một hàm thì đặt nó ở đầu hàm, tuy nhiên hầu như chúng ta sẽ không dùng cách này
> - Khi bạn có sử dụng class hoặc module thì strict mode sẽ được bật tự động mà không cần phải thêm "use strict"

**3, Semicolon (Dấu chấm phẩy):**

> - Có thể bỏ qua dấu chấm phẩy, nó vẫn chạy được
> - Tùy team mà sẽ prefer có hoặc không có dấu chấm phẩy
> - Tuy nhiên, có một số trường hợp mà nó sẽ hiểu sai.
> - Recommend dùng dấu chấm phẩy

**4, Comment**

Mẹo viết comment hiệu quả:

> - What: Comments là phần giải thích thêm cho code hiện tại
> - When: Khi có logic phức tạp, code phức tạp
> - Where: Viết trước đoạn code cần giải thích
> - Why: Để hiểu được tại sao mình viết code như vậy khi quay lại sau này
> - Who: Người nào viết code, thì người đó comment

Viết comments như thế nào cho hiệu quả

> - Viết bằng TIẾNG ANH (QUAN TRỌNG)
> - Cung cấp high-level overview cho cái mình đang làm
> - Giải thích tại sao cho code hiện tại, chứ không phải giải thích code chạy như thế nào

**5, Reserved Keywords**

Là những từ khóa được sử dụng với những chức năng đặc biệt, Khi cần tới chức năng nào thì sử dụng từ khóa đó. Đây thuộc bộ Syntax của ngôn ngữ, cần follow theo

> - Lưu ý: Không được đặt tên biến, tên hàm , ... trùng với tên từ khóa.

**6, Variables in JavaScript**

Giống như các ngôn ngữ lập trình khác, JS cũng cần phải có một nơi để lưu trữ giá trị tạm lên bộ nhớ. Khi cần lưu trữ giá trị thì ta sẽ sử dụng các biến.

Cách khai báo biến trong JS:

> - Với ES5 thì dùng var (function scop)
> - Từ ES6 thì dùng const hoặc let (block scop)
> - Scope thì mình sẽ tìm hiểu sau
> - const thì dùng cho hằng số hoặc biến mà không có nhu cầu thay đổi
> - let thì dùng cho biến có mong muốn thay đổi giá trị

_TIPS: Hãy luôn dùng const cho đến khi cần let_

Cách đặt tên cho biến:

> - Dùng tiếng Anh
> - Đặt tên để biết biến đó chứa giá trị gì
> - Không đánh đố nhau, đặt tên một đằng lưu giá trị một nẻo
> - Với true/false, đặt tên với prefix has hoặc is hoặc show hoặc từ mang ý nghĩa chỉ có nhận giá trị true hoặc false
> - Còn lại thì dùng danh từ
> - Với dạng danh sách thì nên thêm Suffix List.

**7, Logical Operator:**

3 Logical Operator cơ bản: AND (&&), OR (||), NOT (!)

### LESSON 2: OPERATORS VÀ CÁC KIỂU DỮ LIỆU TRONG JS

**1, Operators in JavaScript**

> - Arithmetic Operator - Toán tử số học: a+b; a%b;
> - Unary Operators - Operator có 1 operand: count++; --number; !error ...
> - Binary Operators - Operator có 2 operand: a=b; a+b; ...
> - Ternary Operators - Operator có 3 operand: isShow ? "Show" : "Hide"
> - Logical Operators - Operator luận lý: a||b; a&&b ...
> - Bitwise Operators - Operator xử lý bit: a>>b; a|b; ...

**2, Các kiểu dữ liệu trong JavaScript**

> - Number: int or float, integers are limited by +- (2^53 - 1)
> - bigint: is for integer numbers of arbitrary length.
> - string: for strings, no single character type
> - boolean: for true/false
> - null: for unknown values - a standalone type that has a single value null
> - undefined: for unassigned values - a standalone type that has a single value undefined
> - symbol: for unique identifiers
> - object: NON-Primitive type, used for complex data structure

Có một điều đặc biệt trong JavaScript đó là bạn không cần khai báo kiểu dữ liệu cho biến. Một bién nó có thể thay đổi với bất cứ kiểu dữ liệu nào. Xem ví dụ ở đoạn code dưới:

**_Example:_**

```JavaScript
let powerfulVar; // count will be undefined
powerfulVar = 1;
powerfulVar = "Hello";
powerfulVar = true;
powerfulVar = {
    name: 'Crazy JavaScript =))'
};
```

Để xác định một biến nó đang ở kiểu dữ liệu nào tại thời điểm đó, ta sử dụng : typeof operator

**3, Comparision Operator: Toán tử so sánh**

> - So sánh cùng kiểu dữ liệu
> - So sánh khác kiểu dữ liệu
> - So sánh với null/undefined

Có thể lên google tra cứu thêm về Toán tử so sánh của JS => Kết quả của các phép so sánh là boolean

true sẽ lớn hơn false => true > false sẽ ra true

**So sánh khác kiểu dữ liệu**

- Khi so sánh khác kiểu dữ liệu, js sẽ tự động convert giá trị về dạng number để so sánh (vs so sánh ==; !=; >; <; ...)

=> Để hiểu được phần này, bạn cần nắm được khi convert một giá trị nào đó về number thì nó sẽ thành giá trị bao nhiêu

**strict equality (=== and !==)**

Giữ nguyên giá trị (không tự động convert kiểu dữ liệu về dạng number) để so sánh với nhau

- Nếu khác kiểu dữ liệu, lập tức return false
- Nếu cùng kiểu dữ liệu, thì so sánh như cách thức đã đề cập ở phần so sánh cùng kiểu dữ liệu

NOTE: Nên sử dụng === thay vì == để hạn chế các rủi ro không đáng có. Nếu muốn dùng == thì phải hiểu rõ mình thực sự đang làm

**_Example:_**

```JavaScript
// So sánh với null/undefined

//non-strict ==, null end undefined equal but not any other value
null == undefined; //true

//strict check
null === undefined; //false because they are different type

//other comparisons:
//null will converter to 0
//undefined will converter to NaN
null > 0 //fasle
null == 0 //false
null >=0 //true, what?
// => Trong trường hợp so sánh có dấu == thì null chỉ bằng duy nhất thằng undefined thôi
// => Trong trường hợp so sánh có dấu lớn bé > thì null sẽ được chuyển đổi về 0. => Hack não vcl =))
```

### LESSON 3: FUNCTION IN JS

**1, Function in JS**

> - What: tập hợp các lệnh phục vụ một chức năng nhỏ nào đó
> - When: nhận thấy các dòng lệnh có liên quan tới nhau và có thể tách rời được
> - Why: Dễ quản lý, dễ học, dễ maintain
> - Who: Dev

**2, Cách khai báo function:**

```JavaScript
    function ten_Function(tham_so_ham){
        //body of Function
        console.log('Welcome', tham_so_ham);
    }
```

**3, Thành phần cấu tạo nên Function:**

> - Từ khóa function:
> - Tham số hàm (arguments): optional, chỉ nên tối đa 3 tham số
> - Body
> - Return Statement: optional

**4, Cách đặt tên cho Function:**

> - Dùng tiếng anh
> - Dùng động từ vì Function là để thực hiện một nhiệm vụ nào đó
> - Thường hay dùng với Prefix: create, update, add, check, convert, map, get, ...

**5, Một số lưu ý khi viết function:**

> - Mỗi hàm chỉ làm một nhiệm vụ, và làm thật tốt nhiệm vụ đó
> - Nên giữ code của một hàm ngắn thôi, dưới 30 dòng code
> - Trường hợp ngoại lệ nhiều code hơn, tuy nhiên những hàm này ít thôi
> - Luôn kiểm tra tính hợp lệ của tham số ở đầu hàm
> - Return kiểu dữ liệu đồng nhất với nhau
> - Nên có comment cho những logic phức tạp
> - Chỉ nên có tối đa là 3 tham số truyền vào

### LESSON 4: BOOLEAN

Boolean là một kiểu dữ liệu primitive (nguyên thủy) và chỉ có giá trị true và false

**1, Type conversion và Type coersion:**

> - Điểm tương đồng là đều chuyển đổi từ kiểu dữ liệu này sang kiểu dữ liệu khác
> - Type coersion là ép kiểu tự động (ép kiểu ngầm)
> - Type conversion mang ý nghĩa là có thể ép kiểu tự động như type coersion hoặc ép kiểu tường minh (explicit, tức do mình chỉ định nó ép kiểu)

**2, 3 Kiểu type conversion phổ biến**

| Name                   | Type coersion happen when              | Explicit Conversion                  |
| :--------------------- | :------------------------------------- | :----------------------------------- |
| 1. String conversion:  | output something or string concatenate | .toString() or String()              |
| 2. Numeric Conversion: | math operations                        | parseInt(), parseFloat() or Number() |
| 3. Boolean conversion: | logical operations                     | ! operator or Boolean()              |

**_Example 1: type coersion_**

```JavaScript
const a = 1 + '2'; //'12' as it auto convert from number 1 to string '1' before doing the addition
const b = 1 - '2'; //-1 as it auto convert string '2' to number 2 before doing the subtraction

const message = 'JS is easy';
if(message){ //message here will be converted into boolean automatically
    console.log("Really?");
}
```

**_Example 2: explicit conversion_**

```JavaScript
const error = 'something wrong';
const hasError = Boolean(error); //we ask to convert string error to boolean


const mark = 9;
const markString = mark.toString(); //or String(mark)

const type = '1';
const typeID = Number.parseInt(type);//or Number(type)
```

**3, Truthy và Falsy**

> - Truthy: là những giá trị khi chuyển đổi về boolean thì sẽ được giá trị truth
> - Falsy: là những giá trị khi chuyển đổi về boolean thì sẽ được giá trị false

Làm sao để xác định được đâu là truthy hay falsy? Với falsy thì ta có một danh sách như bên dưới, ngoài danh sách này thì tất cả đều là truthy:

| false | 0   | -0  | 0n  | ''  | ""  | null | undefined | NaN | document.all |
| :---- | :-- | :-- | :-- | :-- | :-- | :--- | :-------- | :-- | :----------- |

=> Có thể lên google để tra: fulsy value trên javascript để đọc thêm

### LESSON 5: CÂU LỆNH RẼ NHÁNH

**1, if...else**

- condition là một giá trị boolean
- Nếu condition là kiểu giá trị khác, nó sẽ tự động chuyển đổi về boolean
- Hạn chế sử dụng else, bỏ được hãy bỏ với if ... return
- Hạn chế dùng nested if ... else (if else lồng nhau)

**_Example_**

```JavaScript
//GOOD
if(condition) doSomething();

//GOOD
if(condition){
    doSomething();
    doSomethingElse();
}

//OK
if(condition){
    doSomething();
}
else{
    doSomethingElse();
}

//BAD
if(condition){
    doSomething();
}
else if(anothercondition){
    doSomethingAnother();
}
else{
    doSomethingFinally();
}

//Avoid to use nested if
if(condition1){
    if(condition2){
        doSomething();
    }
    else{
        doSomethingElse();
    }
}
```

**2, switch...case**

- Giống với cú pháp trong C++

```JavaScript
switch(condition){
    case value1:
        doSomething();
        break;
    case vale2:
        doSomething2();
        break;
    default:
        doSomething3();
}
```

### LESSON 6: MỘT SỐ KỸ THUẬT ĐẶC BIỆT

**1, Kỹ thuật đặt cờ hiệu (Flag)**

- Với kỹ thuật này, ta sẽ đặt một biến làm cờ hiệu, biến này có thể nhận 2 giá trị true/false, sau đó duyệt qua lần lượt các điều kiện để quyết định giá trị cuối cùng của biến.

**_Example:_**

```JavaScript
function isPositiveEvenNumber(n){
    let isValid; //undefined

    //checking ...
    if(n>0 && n%2 === 0){
        isValid = true;
    }
    else{
        isValid = false
    }

    return isValid;
}

console.log(isPositiveEvenNumber(5));
```

**2, Kỹ thuật lính canh**

- Về cơ bản ý tưởng cũng giống như kỹ thuật đặt cờ hiệu. Khác ở chỗ là biến được đặt có thể là bất cứ loại giá trị nào chứ không phải chỉ true/false.

**_Example:_**

```JavaScript
function classifyStudent(mark){
    let result;

    //checking ...
    if(mark > 8) result = 'Excellence';
    else if(mark >= 7 ) result = 'Good';
    else if (mark >= 4) result = 'Not Good';
    else result = 'Bad';

    return result;
}
```

### LESSON 7: NUMBER and MATH

**1, Giới thiệu về kiểu number**

- Có 2 loại số:
  _ Interger (int): số nguyên (1, 2, 3, ...)
  _ Float (float): số thực (1.5, 2.5, 3.7, ...). Dùng dấu chấm để ngăn cách phần thập phân
- Lưu ý: JavaScript chỉ có một kiểu dữ liệu là number dùng cho cả số nguyên và số thực
- Number trong JS được lưu dưới dạng double-precision 64-bit binary format IEE754.

**toString(base)**

```JavaScript
const n = 20;
n.toString(); //'20' (default is 10)
n.toString(10); //'20' Decimal
n.toString(16); //'14' Hexadecimal
n.toString(8); //'24' Octal
n.toString(2); //'10100' Binary
```

**2, Object Number**

- Mỗi một kiểu dữ liệu primitive (nguyên thủy) ở trong JS thì nó sẽ có một cái Wrapper object để cung cấp những cái hằng số, hoặc những cái hàm mà nó liên quan tới cái kiểu dữ liệu mình đang làm việc
- Ví dụ: với Number, khi sử dụng nó như một function: Number(value) ===> Nó sẽ cố gắng chuyển đổi value từ các kiểu dữ liệu khác sang kiểu Number.

**_Example:_**

```JavaScript
Number(123); //123
Number('123'); //123
Number('abc); //NaN
```

**Number properties**

- Number.EPSILON ===> value = 2.220446049250313e-16: Độ chênh lệch nhỏ nhất giữa 2 số
- Number.MIN_VALUE ===> value = 5e-324: Số dương nhỏ nhất (gần tới số 0)
- Number.MAX_VALUE ===> value = 1.7976931348623157e+308: Số dương lớn nhất
- Number.MIN_SAFE_INTERGER ===> -(2^53 - 1)
- Number.MAX_SAFE_INTERGER ===> 2^53 - 1
- Number.NaN ===> value = NaN: Not a Number
- Number.NEGATIVE_INFINITY: Âm vô cùng
- Number.POSITIVE_INFINITY: Dương vô cùng

**Converts to Number (ParseInt and ParseFloat)**

Đối với ParseInt và ParseFloat, trình biên dịch sẽ thực hiện đọc từ đầu tới cuối, đến chỗ không hợp lệ để chuyển đổi thì sẽ dừng. Còn đối với Number() thì nếu tham số truyền vào không hợp lệ, sẽ trả về NaN ngay

```JavaScript
    Number('123'); //123
     Number.ParseInt('1.5'); //1
     Number.ParseFloat('1.5'); //1.5

     Number('123.5a'); //NaN
     Number.ParseInt('123.5a'); //123
     Number.ParseFloat('123.5a'); //123.5

     Number(null); //0
     Number(undefined); //NaN

     Number(true); //1
     Number(false); //0
```

**Phân biệt toFixed() và toPrecision()**

     * toFixed() và toPrecision() đều chuyển từ number thành string
     * toFixed(digits) thì cố định số lượng digits sau dấu chấm
     * toPrecision(digits) thì làm tròn tới digits số có nghĩa

```JavaScript
const n = 123.525;
     n.toFixed(); //124
     n.toFixed(0); //124
     n.toFixed(1); //123.5
     n.toFixed(2); //123.53
     n.toFixed(3); //123.525
     n.toFixed(4); //123.5250
     n.toFixed(5); //123.52500


     n.toPrecision(); //123.525 similar to toString();
     n.toPrecision(0); //error argument must be between 1 to 100
     n.toPrecision(1); //100
     n.toPrecision(2); //120
     n.toPrecision(3); //124
     n.toPrecision(4); //123.5
     n.toPrecision(5); //123.53
     n.toPrecision(6); //123.525
     n.toPrecision(7); //123.5250
     n.toPrecision(8); //123.52500
```

**3, Math**

Math - Built - in objects for mathematical constants and functions

- Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object

**Các props phổ biến:**

- Math.PI: Gía trị của PI, khoảng 3.14159
- Math.SQRT2: Giá trị của căn bậc 2 của 2 ~ 1.414

**Các methods phổ biến:**

- Math.ceil(x): Làm tròn lên số nguyên gần nhất
- Math.floor(x): Làm tròn xuống số nguyên gần nhất
- Math.round(x): Làm tròn tới số nguyên gần nhất
- Math.trunc(x): Hàm lấy phần nguyên, bỏ phần thập phân
- Math.random(x): Random số thực từ 0 --> 1
- Math.abs(x): Lấy giá trị tuyệt đối
- Math.pow(x, y): Hàm lũy thừa x^y
- Math.sqrt(x): Hàm lấy căn bậc 2 của x

LƯU Ý: Math chỉ làm việc với kiểu Number, chứ không làm việc với kiểu BigInt

### LESSON 8: STRING

**1, Tổng quan về string:**

- Cách khai báo string trong JS: chỉ cần sử dụng một dấu nháy đơn hoặc nháy kép
- Sử dụng dấu backticks (dấu huyền) để có thể gán các biến vào chuỗi

**_Example_**

```JavaScript
const name = 'Son';
const fullName = "Le Dinh Son";
const formatName = `My name is ${fullName}`;
```

Basic:

- Javascript không có kiểu dữ liệu cho từng ký tự, chỉ dùng chung một kiểu dữ liệu là string
- String trong JavaScript sử dụng character encoding UTF-16
- Mình còn có những loại encoding khác nữa như: ASCII (7 bits), UTF-8 (8 bits), UTF-16 (16 bits), UTF-32 (32 bits)
- String is immutable (không thay đổi được) ===> Một khi string đã được sinh ra trong JS thì nó sẽ không thể thay đổi được

**2, Object String trong JS**

_a, Instance Properties:_

```JavaScript
const name = 'Easy Frontend';
name.length; //13 (read-only)
```

_b, Instance Method:_

- charAt(index): Lấy ký tự tại vị trí index
- concat(str[, ...strN]): Nối chuỗi
- includes(searchString[, position]): Có chứa chuỗi nào đó hay không?
- startsWith(searchString[, length]): có bắt đầu với chuỗi searchString
- endsWith(searchString[, length]): có kết thúc bằng chuỗi searchString
- indexOf(searchValue[, fromIndex]): Vị trí đầu tiên có searchValue
- lastIndexOf(searchValue[, fromIndex]): Vị trí cuối cùng có searchValue
- match(regexp): Liên quan tới regular expresion (Tạm bỏ qua)
- matchAll(regexp): Liên quan tới regular expresion (Tạm bỏ qua)
- padStart(targetLength [, padString]): Thêm vào đầu String
- padEnd(targetLength [, padString]): Thêm vào cuối String
- repeat(count): Nhân chuỗi hiện tại lên count lần
- replace(searchFor, replaceWith): Thay thế chuỗi searchFor đầu tiên bằng chuỗi replaceWith
- replaceAll(searchFor, replaceWith): Thay thế tất cả chuỗi searchFor bằng chuỗi replaceWith
- slice(beginIndex [, endIndex]): Lấy chuỗi con
- substring(indexStart [, indexEnd]): Lấy chuỗi con
- split([sep [, limit]]): Tách chuỗi thành các mảng con của chuỗi
- trim(): Bỏ khoảng trắng đầu + cuối string
- trimStart(): Bỏ khoảng trắng đầu string
- trimEnd(): Bỏ khoảng trắng cuối string
- toLowerCase(): Chuyển chuỗi thành chữ viết thường
- toUpperCase(): Chuyễn chuỗi thành chữ viết hoa

**_Example1: charAt()_**

```JavaScript
'Easy Frontend'.charAt(0); //E
'Easy Frontend'.charAt(3); //y
```

**_Example2: concat - nối chuỗi_**

```JavaScript
'hh '.concat('Easy'); //hh Easy
''.concat('Easy', ' ', 'Frontend'); //Easy Frontend
```

**_Example3: padStart - padEnd_**

```JavaScript
'a'.padStart(5, '*'); // ****a
'ab'.padStart(5, '*'); // ***ab
'abc'.padStart(5, '*'); // **abc

'a'.padEnd(5, '*'); // a****
'ab'.padEnd(5, '*'); // ab***
'abc'.padEnd(5, '*'); // abc**
```

**_Example4: repeat - nhân chuỗi hiện tại_**

```JavaScript
'*'.repeat(5); // *****
```

**_Example5: trim - bỏ khoảng trắng_**

```JavaScript
'  Easy Frontend       '.trim(); // 'Easy Frontend'
'  Easy Frontend       '.trimStart(); // 'Easy Frontend       '
'  Easy Frontend       '.trimEnd(); //'  Easy Frontend'
```

**_Example6: Duyệt chuỗi_**

```JavaScript
    const name = 'Easy Frontend';
    for(let i = 0; i < name.length; i++){
        console.log(name[i]);
    }
```

**_Example7: Chuyển đổi hoa thường_**

```JavaScript
    'Easy Frontend'.toLowerCase(); //easy frontend
    'Easy Frontend'.toUpperCase(); //EASY FRONTEND
```

**_Example8: Tìm kiếm chuỗi con_**

```JavaScript
    const name = 'Hello Po';
    name.indexOf('o'); //4
    name.lastIndexOf('o'); //7
```
