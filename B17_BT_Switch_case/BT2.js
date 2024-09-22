/*
    A list of error codes from server
    - E01: Invalid username or password
    - E02: Too many attepmts
    - E03: Missing data
    - Other code: Something went wrong
    - Write a function that take errorCode and return the according message
*/

function getErrorMessage(errorCode){
    let message = '';

    switch(errorCode){
        case "E01":
            {
                message = 'Invalid username or password';
                break;
            }
        case 'E02':
            {
                message = 'Too many attepmts';
                break;
            }
        case 'E03':
            {
                message = 'Missing data';
                break;
            }
        default: message = 'Something went wrong';
    }

    return message;
}

console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));