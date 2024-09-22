/*
    Tổng quan về string trong JS
    1. Tổng quan về string
    2. Giới thiệu về object String
    3. Một số thao tác cơ bản với string (props + methods)
    4. Làm việc với substring
    5. Tìm kiếm và thay thế
    6. Split and Join
    7. Bài tập thực hành
*/

/*
    1. Tổng quan về string:
    - Cách khai báo string trong JS: chỉ cần sử dụng một dấu nháy đơn hoặc nháy kép
    - Sử dụng dấu backticks (dấu huyền) để có thể gán các biến vào chuỗi
    ví dụ: const name = 'Son';
            const fullName = "Le Dinh Son";
            const formatName = `My name is ${fullName}`;

    - Basic:
     * Javascript không có kiểu dữ liệu cho từng ký tự, chỉ dùng chung một kiểu dữ liệu là string
     * String trong JavaScript sử dụng character encoding UTF-16
     * Mình còn có những loại encoding khác nữa như: ASCII (7 bits), UTF-8 (8 bits), UTF-16 (16 bits), UTF-32 (32 bits)
     * String is immutable (không thay đổi được) ===> Một khi string đã được sinh ra trong JS thì nó sẽ không thể thay đổi được
     
    
*/