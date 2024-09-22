/*
    Write a function to classify student
    - Receive mark as a number, output as below
    * mark > 8 ==> 'Excellence'
    * 7 <= mark <= 8 ==> 'Good'
    * 4 <= mark <= 6 ==> 'Not good'
    * mark < 4 ==> 'Bad'
*/

//Kỹ thuật Lính canh:
function classifyStudent(mark){
    let result;

    //checking ...
    if(mark > 8) result = 'Excellence';
    else if(mark >= 7 ) result = 'Good';
    else if (mark >= 4) result = 'Not Good';
    else result = 'Bad';

    return result;
}

//version 2
function classifyStudent(mark){
    let result = 'Bad';

    //checking ...
    if(mark > 8) result = 'Excellence';
    else if(mark >= 7 ) result = 'Good';
    else if (mark >= 4) result = 'Not Good';

    return result;
}

//version 3
function classifyStudent(mark){

    //checking ...
    if(mark > 8) return 'Excellence';
    if(mark >= 7) return 'Good';
    if(mark >= 4) return 'Not Good';

    return 'Bad';
}
console.log(classifyStudent(7));