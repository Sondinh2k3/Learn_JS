/*
    Comparision Operator: Toán tử so sánh
    1. So sánh cùng kiểu dữ liệu
    2. So sánh khác kiểu dữ liệu
    3. So sánh với null/undefined

    Có thể lên google tra cứu thêm về Toán tử so sánh của JS
    => Kết quả của các phép so sánh là boolean

    true sẽ lớn hơn false => true > false sẽ ra true

    So sánh khác kiểu dữ liệu:
    - Khi so sánh khác kiểu dữ liệu, js sẽ tự động convert giá trị về dạng number để so sánh (vs so sánh ==; !=; >; <; ...)
    => Để hiểu được phần này, bạn cần nắm được khi convert một giá trị nào đó về number thì nó sẽ thành giá trị bao nhiêu

    - strict equality (=== and !==)
    Giữ nguyên giá trị (không tự động convert kiểu dữ liệu về dạng number) để so sánh với nhau
    * Nếu khác kiểu dữ liệu, lập tức return false
    * Nếu cùng kiểu dữ liệu, thì so sánh như cách thức đã đề cập ở phần so sánh cùng kiểu dữ liệu
    
    NOTE: Nên sử dụng === thay vì == để hạn chế các rủi ro không đáng có. Nếu muốn dùng == thì phải hiểu 
    rõ mình thực sự đang làm gì

*/
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
