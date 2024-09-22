/*
    Kiểm tra sự tồn tại của phần tử

    Nhóm hàm kiểm tra xem phần tử có tồn tại không?
    1. every(callbackFn): Kiểm tra tất cả phần tử thỏa điều kiện
    2. some(callbackFn): Kiểm tra có 1 phần tử thỏa điều kiện
    3. indexOf(searchElement): Tìm vị trí đầu tiên của phần tử searchElement
    4. lastIndexOf(searchElement): Tìm vị trí cuối cùng của phần tử searchElement
    5. includes(searchElement): Kiểm tra có chứa phần tử searchElement không
*/

// check if all numbers is even
[1, 2, 4].every((x) => x%2 === 0); //false
[2, 4, 6].every((x) => x%2 === 0); //true


//check if exist one number is even
[1, 2, 5].some((x) => x%2 === 0); //truy
[3, 5, 7].some((x) => {return x%2 === 0}); //false

//Một số hàm khác
[1, 1, 1].indexOf(1); //0
[1, 1, 1].lastIndexOf(1); //2

['easy', 'frontend', 'easy'].indexOf('easy'); //0
['easy', 'frontend', 'easy'].lastIndexOf('easy'); //2

['easy', 'frontend', 'easy'].includes('easy'); //true
['frontend'].includes('easy'); //false