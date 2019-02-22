import { equal } from 'assert'
function sum (number1:number, number2:number): number {


    return number1 + number2
}
describe('My test suite', () => {
    it('my description', () => {
        const expected = 2
        const actual = sum('1', 1) // error
        equal(actual, expected)
    })
})

// // const { equal } = require('assert')
// import { equal } from 'assert'
// function sum(number1: number, number2: number) : number {
//     return number1 + number2
// }

// describe('Sum test suite', () => {
//     it('should sum 1 + 1 with the result 2', () => {
//         const expected = 2
//         // const actual = sum('1a', 1)
//         const actual = sum(1, 1)
//         // ops
//         equal(actual, expected)
//     })
// })