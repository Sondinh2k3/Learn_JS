/*
    String excercise

    Write a JS function to parameterize a string
    Eg: parameterize('Code JS is Fun') ---> 'code-js-is-fun'

*/

function parameterize(str){
    // const str1 = str.replaceAll(' ', '-').toLowerCase();

    // return str1;
    return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Code JS is Fun'));