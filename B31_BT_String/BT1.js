/*
    Write a function to transform a string:
    - The first letter in UPPERCASE
    - The rest in lowercase
    Eg: capitalize('easy FRontend') ---> Easy frontend

*/

function capitalize(str){
    if(str === '') return '';

    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1).toLowerCase();

    return `${firstLetter}${rest}`;
}

console.log(capitalize('HellO HeheHe'));