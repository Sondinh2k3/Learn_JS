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
