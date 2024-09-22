/*
    Bài tập 1: Tìm x, y khi biết tổng và hiệu của chúng

*/
let tong = parseInt(prompt('Nhập tổng của 2 số'));
let hieu = parseFloat(prompt('Nhập hiệu của 2 số'));

const x = (tong + hieu) / 2;
const y = (tong - hieu) / 2;

console.log(`x = ${x}`);
console.log(`y = ${y}`);