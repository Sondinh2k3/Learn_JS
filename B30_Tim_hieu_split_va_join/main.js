/*

    - string to array: split();
    - array to string: join();

    1. split();
    - Hàm dùng để phân tách chuỗi hiện tại thành một mảng các chuỗi con

    2. join();
    - Hàm dùng để gộp các item của 1 mảng thành một chuỗi
*/
//split
'easy'.split(); //['easy']
'easy'.split(' '); //['easy']
'easy'.split('-'); //['easy']
'easy'.split('as'); //['e', 'y']


'easy'.split(''); //['e', 'a', 's', 'y']

//count words
const name1 = 'Easy frontend';
const words = name1.split(' '); //['Easy', 'frontend']
console.log(words.length); //2

//join
const words1 = ['Easy', 'frontend'];
words1.join(); // 'Easy,frontend'
words1.join(''); // 'Easyfrontend'
words1.join(' '); // 'Easy frontend'
words1.join('-'); // 'Easy-frontend'
