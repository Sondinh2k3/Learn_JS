/*
    Tổng quan về number:
    1. Giới thiệu về kiểu number
     - Có 2 loại số:
        * Interger (int): số nguyên (1, 2, 3, ...)
        * Float (float): số thực (1.5, 2.5, 3.7, ...). Dùng dấu chấm để ngăn cách phần thập phân
     - Lưu ý: JavaScript chỉ có một kiểu dữ liệu là number dùng cho cả số nguyên và số thực
     - Number trong JS được lưu dưới dạng double-precision 64-bit binary format IEE754.

     //toString(base)
     const n = 20;
     n.toString(); //'20' (default is 10)
     n.toString(10); //'20' Decimal
     n.toString(16); //'14' Hexadecimal
     n.toString(8); //'24' Octal
     n.toString(2); //'10100' Binary

    2. Object Number có gì?
    3. Object Math có gì?
    4. Imprecise calculations
    5. Rounding - làm tròn số
    6. Random number
    7. Bài tập thực hành
*/

//1. Giới thiệu về kiểu number
// const count = 1;
// const mark = 9.5;

// const long = 1000000;
// const longer = 1_000_000; //rare usage
// const short = 1e6; //usually use this

// const smaller = 0.0001;
// const smallerShort = 1e-4; //rối não

// //Arithmetic operators:
// const sum = 1 + 2; //3
// const substract = 1 - 2; //-1
// const multiply = 1*2; //2
// const divide = 1/4; //0.25

// const remainder = 7%5; //2

// //increment
// let count = 1;
// const n = count++; // 1 postfix, return first, then increase

// let count = 1;
// const n = ++count; //2 prefix, increase first, then return

// //decrement:
// let count = 1;
// const n = count--; // 1 postfix, return first, then increase

// let count = 1;
// const n = --count; //0 prefix, increase first, then return

// //unary plus: attempts to convert to number if it's not a number
// const n =+ '123'; //123
// //unary negation: return the negation of the operand
// const n =- '123'; //-123

// //exponentiation operator
// const n = 2 ** 3; //means 2^3 = 8

// //Assignment operators:
// //addition assignment 
// let n = 1;
// n += 1; //2, similar to n = n + 1

// //subtraction assignment 
// let n = 1;
// n -= 1; //0, similar to n = n - 1

// //multiplication assignment 
// let n = 1;
// n *= 3; //3, similar to n = n * 3

// //divition assignment 
// let n = 1;
// n /= 2; //0.5, similar to n = n / 2