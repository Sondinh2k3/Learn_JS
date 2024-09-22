/*
    Tìm kiểm phần tử:
    - Nhóm hàm kiểm tra phần tử có tồn tại không?
    1. find(callbackFn): Tìm phần tử đầu tiên thỏa mãn điều kiện
    2. findIndex(callbackFn): Tìm vị trí của phần tử đầu tiên thỏa mãn điều kiện
*/

[2, 1, 3].find(x => x%2 === 0); //2: phần tử đầu tiên là số 2 chia hết cho 2
[2, 1, 3].findIndex(x => x%2 === 0); //0: phần tử đầu tiên là số 2 chia hết cho 2

['easy', 'frontend'].find(x => x.length > 4); //'frontend'
['easy', 'frontend'].findIndex(x => x.length > 4); //1

// ================================ Callback là gì? ========================================
/*
    Callback Function là một cái tham số có kiểu dữ liệu hàm mà được gọi trong một hàm
    Để cho dễ hiểu thì một hàm A gọi đến một hàm khác B ==> B chính là Callback Function
*/
function main(callbackFn){
    //processing ...
    //do another stuff ...
    callbackFn();
}

function callback(){
    console.log('Call me when you need');
}

main(callback);