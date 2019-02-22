"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { equal } = require('assert')
var assert_1 = require("assert");
function sum(number1, number2) {
    return number1 + number2;
}
describe('Sum test suite', function () {
    it('should sum 1 + 1 with the result 2', function () {
        var expected = 2;
        // const actual = sum('1a', 1)
        var actual = sum(1, 1);
        // ops
        assert_1.equal(actual, expected);
    });
});
