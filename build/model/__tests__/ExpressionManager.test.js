"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressionManager_1 = __importDefault(require("../ExpressionManager"));
describe('ExpressionManager', () => {
    test.each([
        ['2+3', 'A+B'],
        ['2+3*(2.2/5)^33.3', 'A+B*(C/D)^E'],
    ])('When i receive %p returns  %p', (expression, expected) => {
        let result = new ExpressionManager_1.default(expression);
        expect(expected).toEqual(result.SimplifiedExpression);
    });
});
