/*
    Thao tác cơ bản với string
    1. Lấy ký tự tại vị trí Index:
     ===> Sử dụng phương thức charAt(Index);
     ===> Hoặc có thể sử dụng cách khác: xem chuỗi giống như mảng và lấy theo chỉ số bình thường: string[Index]

    'Easy Frontend'.charAt(0); //E
    'Easy Frontend'.charAt(3); //y

    const name = 'Easy Frontend';
    name.charAt(name.length - 1); //d (The last character)

    'Easy Frontend'[0]; //E
    'Easy Frontend'[3]; //y
    const name = 'Easy Frontend';
    name[name.length - 1]; //d (The last character)

    2. Nối chuỗi:
    const a = 'Easy';
    const b = 'Frontend';
    const c = a + ' ' + b; //Easy Frontend
    const d = a.concat(' ', b); //Easy Frontend
    const e = `${a} ${b}`; //Easy Frontend

    3. Duyệt chuỗi:
    const name = 'Easy Frontend';
    for(let i = 0; i < name.length; i++){
        console.log(name[i]);
    }

    4. Chuyển đổi hoa thường:
    'Easy Frontend'.toLowerCase(); //easy frontend
    'Easy Frontend'.toUpperCase(); //EASY FRONTEND

    5. Tìm kiếm chuỗi con:
    const name = 'Hello Po';
    name.indexOf('o'); //4
    name.lastIndexOf('o'); //7

    6. Kiểm tra chữa chuỗi con
    const name = 'Easy and Frontend';

    name.startsWith('easy'); //false
    name.startsWith('Easy'); //true
    name.startsWith('and'); //false

    name.includes('Easy'); //true
    name.includes('and'); //true
    name.includes('Frontend'); //true

    name.endsWith('Frontend'); //true
    name.endsWith('and'); //false
    name.endsWith('frontend'); //false
*/