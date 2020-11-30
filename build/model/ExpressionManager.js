"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressionHashMap_1 = __importDefault(require("./ExpressionHashMap"));
const NumberHelper_1 = require("../utils/NumberHelper");
class ExpressionManager {
    constructor(expression) {
        this._expression = '';
        this._expression = expression;
        this._expressionHashMap = new ExpressionHashMap_1.default(expression);
        this._simplify();
    }
    _simplify() {
        let result = '';
        const arrayExpresion = this._expression.split('');
        const labels = this._expressionHashMap.Keys;
        let labelIndex = 0;
        let isChangedNumber = false;
        for (const value of arrayExpresion) {
            if (!NumberHelper_1.isNumber(value) && value !== '.') {
                isChangedNumber = false;
                result += value;
                continue;
            }
            if (isChangedNumber)
                continue;
            if (!isNaN(Number(value)) || value === '.') {
                result += labels[labelIndex];
                labelIndex++;
                isChangedNumber = true;
            }
        }
        return result;
    }
    get SimplifiedExpression() {
        return this._simplify();
    }
}
exports.default = ExpressionManager;
