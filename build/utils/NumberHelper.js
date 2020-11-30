"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const _isNumber = () => {
    let cache = new Map();
    return (value) => {
        value = value.trim();
        if (!value)
            return false;
        if (cache.has(value))
            return !!cache.get(value);
        const result = !Number.isNaN(Number(value));
        cache.set(value, result);
        return result;
    };
};
exports.isNumber = _isNumber();
