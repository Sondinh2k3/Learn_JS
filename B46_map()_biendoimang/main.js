/*
    Transform array với hàm map()
    - Dùng hàm map(transformFn): để biến đổi các phần tử này sang phần tử khác
    - Lưu ý số lượng phần tử không thay đổi
    - Điều thay đổi ở đây là mỗi phần tử sẽ bị biến đổi theo một công thức giống nhau
    - Kết quả trả về là một mảng mới

    mapping: ánh xạ ==> là ý nghĩa của hàm này
*/

const numberList = [1, 3, 5, 7];
numberList.map(x => x + 1); //[2, 4, 6, 8]
numberList.map(x => x * 2); //[2, 6, 10, 14]

const wordList = ['easy', 'frontend'];
wordList.map(x => x.length); //[4, 8]
wordList.map(x => `super - ${x}`); //['super-easy', 'super-frontend']
