//Các cách xuất dữ liệu với biến trong JS
let soA = 25;
let soB = 5;

//Cách 1:
console.log("Căn bậc 2 của số " + soA +" là: " + soB);

//Cach 2:
console.log("Căn bậc 2 của số", soA, "là:", soB);

//Cách 3:
console.log(`Căn bậc 2 của số ${soA} là: ${soB}`);

//Cách 4:
console.log(`Căn bậc 2 của số %s là: %s`, soA, soB);