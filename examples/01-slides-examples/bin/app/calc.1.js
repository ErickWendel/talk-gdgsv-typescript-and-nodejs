const { basename } = require('path');
const scriptName = basename(__filename);
function sum(number1, number2) {
    return number1 + number2;
}
function sub(number1, number2) {
    return number1 - number2;
}
function mult(number1, number2) {
    return number1 * number2;
}
console.log(`**** Math Class ${scriptName}****
    1+1: ${sum(1, 1)},
    2-1: ${sub(2, 1)},
    10*2: ${mult(10, 2)}`);
