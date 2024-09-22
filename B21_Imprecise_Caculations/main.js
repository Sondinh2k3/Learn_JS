/*
    Trong JS, không phải bất kỳ số thực nào ta cũng có thể biểu diễn chính xác 100% được
    mà chỉ có thể biểu diễn gần đúng mà thôi
     ===> Đến đây xuất hiện một vị cứu tinh là Number.EPSILON đã học ở bài trước
    Ta có thể kiểm tra 2 số thực giống nhau hay không bằng cách: Kiểm tra độ chênh lệch giữa 2 số thực đó, nếu
    độ chênh lệch đó nhỏ hơn EPSILON thì ta có thể tạm chấp nhận là 2 số thực đó giống nhau trong JS

    Hoặc lấy sau dấu chấm thập phân ít chứ số thôi

    Lưu ý:
     * Không phải số nào cũng được lưu chính xác trong JS (thực ra việc này cũng xảy ra ở ngôn ngữ khác do dùng 
    chung chuẩn dữ liệu)
     * Khi làm việc chung với số thực cần lưu ý về vấn đề này để xử lý cho đúng
     * So sánh số thực bằng nhau thì dùng hằng số EPSILON hoặc toFixed() để làm tròn số trước khi so sánh nhé.
*/
console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));

console.log(0.1+0.2 == 0.3);
console.log(0.1+0.2 === 0.3);

console.log(Math.abs(0.1+0.2 - 0.3) < Number.EPSILON);
console.log((0.1+0.2).toFixed(1) == (0.3).toFixed(1));