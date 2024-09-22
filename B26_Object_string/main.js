/*
    Object string trong JavaScript ===> A primitive wrapper object
    - Instance Properties
        const name = 'Easy Frontend';
        name.length; //13 (read-only)
    
    - Instance Method:
      * charAt(index): Lấy ký tự tại vị trí index
      * concat(str[, ...strN]): Nối chuỗi
      * includes(searchString[, position]): Có chứa chuỗi nào đó hay không?
      * startsWith(searchString[, length]): có bắt đầu với chuỗi searchString
      * endsWith(searchString[, length]): có kết thúc bằng chuỗi searchString
      * indexOf(searchValue[, fromIndex]): Vị trí đầu tiên có searchValue
      * lastIndexOf(searchValue[, fromIndex]): Vị trí cuối cùng có searchValue
      * match(regexp): Liên quan tới regular expresion (Tạm bỏ qua)
      * matchAll(regexp): Liên quan tới regular expresion (Tạm bỏ qua)
      * padStart(targetLength [, padString]): Thêm vào đầu String
      * padEnd(targetLength [, padString]): Thêm vào cuối String
      * repeat(count): Nhân chuỗi hiện tại lên count lần
      * replace(searchFor, replaceWith): Thay thế chuỗi searchFor đầu tiên bằng chuỗi replaceWith
      * replaceAll(searchFor, replaceWith): Thay thế tất cả chuỗi searchFor bằng chuỗi replaceWith
      * slice(beginIndex [, endIndex]): Lấy chuỗi con
      * substring(indexStart [, indexEnd]): Lấy chuỗi con
      * split([sep [, limit]]): Tách chuỗi thành các mảng con của chuỗi
      * trim(): Bỏ khoảng trắng đầu + cuối string
      * trimStart(): Bỏ khoảng trắng đầu string
      * trimEnd(): Bỏ khoảng trắng cuối string
      * toLowerCase(): Chuyển chuỗi thành chữ viết thường
      * toUpperCase(): Chuyễn chuỗi thành chữ viết hoa
*/

'Easy Frontend'.charAt(0); //E
'Easy Frontend'.charAt(3); //y

const name = 'Easy Frontend';
name.charAt(name.length - 1); //d (The last character)

'hh '.concat('Easy'); //hh Easy
''.concat('Easy', ' ', 'Frontend'); //Easy Frontend

'a'.padStart(5, '*'); // ****a
'ab'.padStart(5, '*'); // ***ab
'abc'.padStart(5, '*'); // **abc

'a'.padEnd(5, '*'); // a****
'ab'.padEnd(5, '*'); // ab***
'abc'.padEnd(5, '*'); // abc**

'*'.repeat(5); // *****

'  Easy Frontend       '.trim(); // 'Easy Frontend'
'  Easy Frontend       '.trimStart(); // 'Easy Frontend       '
'  Easy Frontend       '.trimEnd(); //'  Easy Frontend'

