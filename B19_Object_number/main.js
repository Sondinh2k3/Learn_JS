/*
    - Mỗi một kiểu dữ liệu primitive (nguyên thủy) ở trong JS thì nó sẽ có một cái Wrapper object để 
    cung cấp những cái hằng số, hoặc những cái hàm mà nó liên quan tới cái kiểu dữ liệu mình đang làm việc
    - Ví dụ: với Number, khi sử dụng nó như một function: Number(value) ===> Nó sẽ cố gắng chuyển đổi value
    từ các kiểu dữ liệu khác sang kiểu Number.

        Number(123); //123
        Number('123'); //123
        Number('abc); //NaN

    - Number properties
     * Number.EPSILON ===> value = 2.220446049250313e-16: Độ chênh lệch nhỏ nhất giữa 2 số
     * Number.MIN_VALUE ===> value = 5e-324: Số dương nhỏ nhất (gần tới số 0)
     * Number.MAX_VALUE ===> value = 1.7976931348623157e+308: Số dương lớn nhất
     * Number.MIN_SAFE_INTERGER ===> -(2^53 - 1)
     * Number.MAX_SAFE_INTERGER ===> 2^53 - 1
     * Number.NaN ===> value = NaN: Not a Number
     * Number.NEGATIVE_INFINITY: Âm vô cùng
     * Number.POSITIVE_INFINITY: Dương vô cùng
     
    - Converts to Number (ParseInt and ParseFloat)
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

    Đối với ParseInt và ParseFloat, trình biên dịch sẽ thực hiện đọc từ đầu tới cuối, đến chỗ không hợp lệ để chuyển
    đổi thì sẽ dừng.

    - Phân biệt toFixed() và toPrecision()
     * toFixed() và toPrecision() đều chuyển từ number thành string
     * toFixed(digits) thì cố định số lượng digits sau dấu chấm
     * toPrecision(digits) thì làm tròn tới digits số có nghĩa
     Ví dụ: 
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
*/