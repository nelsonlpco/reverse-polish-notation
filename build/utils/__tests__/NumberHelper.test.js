"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberHelper_1 = require("../NumberHelper");
describe('NumberHelper', () => {
    test.each([
        ['', false],
        ['a', false],
        ['-', false],
        ['1231', true],
        ['1.22', true],
        ['.22', true],
        ['0', true],
        ['+', false],
        ['/', false],
    ])('should be receive %p returns %p', (value, expected) => {
        const result = NumberHelper_1.isNumber(value);
        expect(expected).toEqual(result);
    });
});
