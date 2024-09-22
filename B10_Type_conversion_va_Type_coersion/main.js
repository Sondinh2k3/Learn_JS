/*
    Tìm hiều về Type Conversion và Type coersion trong JavaScript:
    Type conversion và Type coersion:
    - Điểm tương đồng là đều chuyển đổi từ kiểu dữ liệu này sang kiểu dữ liệu khác
    - Type coersion là ép kiểu tự động (ép kiểu ngầm)
    - Type conversion mang ý nghĩa là có thể ép kiểu tự động như type coersion hoặc ép kiểu tường
    minh (explicit, tức do mình chỉ định nó ép kiểu)


    // 3 Kiểu type conversion phổ biến
        Name                    Type coersion happen when               Explicit Conversion
    1. String conversion:   output something or string concatenate      .toString() or String()
    2. Numeric Conversion:      math operations                         parseInt(), parseFloat() or Number()
    3. Boolean conversion:      logical operations                      ! operator or Boolean()
*/

//type coersion
const a = 1 + '2'; //'12' as it auto convert from number 1 to string '1' before doing the addition
const b = 1 - '2'; //-1 as it auto convert string '2' to number 2 before doing the subtraction

const message = 'JS is easy';
if(message){ //message here will be converted into boolean automatically
    console.log("Really?");
}

//explicit conversion
const error = 'something wrong';
const hasError = Boolean(error); //we ask to convert string error to boolean


const mark = 9;
const markString = mark.toString(); //or String(mark)

const type = '1';
const typeID = Number.parseInt(type);//or Number(type)