import { isNumber } from "../NumberHelper";

describe('NumberHelper', ()=>{
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
  ]
  )(
    'should be receive %p returns %p',(value, expected) => {
      const result = isNumber(value as string);

      expect(expected).toEqual(result);
    });
});