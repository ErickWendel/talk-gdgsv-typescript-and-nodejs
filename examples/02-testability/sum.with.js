"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function sum(number1, number2) {
    return number1 + number2;
}
describe('My test suite', function () {
    it('my description', function () {
        var expected = 2;
        var actual = sum(1, 1);
        assert_1.equal(actual, expected);
    });
});
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
