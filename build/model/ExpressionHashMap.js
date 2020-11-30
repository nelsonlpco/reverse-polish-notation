"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberHelper_1 = require("../utils/NumberHelper");
class ExpressionHashMap {
    constructor(expression) {
        this._hashMap = new Map();
        this._key = 'A';
        this.getValue = (key) => this._hashMap.get(key) || 0;
        this._buildHashMap(expression);
    }
    get HashMap() {
        return new Map(this._hashMap);
    }
    get Keys() {
        return Array.from(this._hashMap.keys());
    }
    _buildHashMap(expression) {
        const arrayExpression = expression.split('');
        let numberAux = '';
        for (var value of arrayExpression) {
            if (NumberHelper_1.isNumber(value) || value === '.') {
                numberAux += value;
                continue;
            }
            if (!numberAux)
                continue;
            this._hashMap.set(this._key, Number(numberAux));
            this._nextKey();
            numberAux = '';
        }
        if (numberAux) {
            this._hashMap.set(this._key, Number(numberAux));
        }
    }
    _nextKey() {
        this._key = String.fromCharCode(this._key.charCodeAt(0) + 1);
    }
}
exports.default = ExpressionHashMap;
