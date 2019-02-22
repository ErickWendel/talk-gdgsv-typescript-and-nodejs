const { equal } = require('assert')
function sum (number1, number2) {
    if(isNaN(number1) || isNaN(number2))
        throw Error('invalid argument!')
    
    if(typeof(number1) === 'string')
        number1 = parseInt(number1)
    
    if(typeof(number2) === 'string')
        number2 = parseInt(number2)
    

    return number1 + number2
}
describe('My test suite', () => {
    it('my description', () => {
        const expected = 2
        const actual = sum('1', 1)
        equal(actual, expected)
    })
})

// const { equal } = require('assert')
// function sum(number1, number2) {
//     if(isNaN(number1) || isNaN(2))
//         throw Error('invalid arguments')
    
//     if(typeof(number1)== "string")
//         number1 = parseInt(number1)
        
//     if(typeof(number2) === "string")
//         number2 = parseInt(number2)

//     return number1 + number2
// }

// describe('Sum test suite', () => {
//     it('should sum 1 + 1 with the result 2', () => {
//         const expected = 2
//         const actual = sum('1',1)
//         // ops
//         equal(actual, expected)
//     })
// })