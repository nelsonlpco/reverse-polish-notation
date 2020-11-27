import ExpressionHashMap from "../ExpressionHashMap";

describe("HashMap", () => {
  test.each(
    [
      ["2+1", new Map([['A', 2], ['B', 1]])],
      ["2+1-2", new Map([['A', 2], ['B', 1], ['C', 2]])],
      ["2.2+1*(55.345 / 2.33)", new Map([['A', 2.2], ['B', 1], ['C', 55.345], ['D', 2.33]])],
    ]
  )(
    "should be receive %p returns %p", 
    (expression, expected) => {
      const hashMap = new ExpressionHashMap(expression).HashMap;

      expect(expected).toEqual(hashMap);
    }
  )

  test('should be return a valid keys from hashMap', () => {
      const hashMap = new ExpressionHashMap("2+3+4");

      const expected = ['A', 'B', 'C'];

      expect(expected).toEqual(hashMap.Keys);
  });

  test('should be return 0 without key and value to valid key', () => {
    const hashMap = new ExpressionHashMap('2+4');

    const validValue = hashMap.getValue('B');
    
    expect(4).toEqual(validValue);

    const invalidKey = hashMap.getValue('Z');

    expect(0).toEqual(invalidKey);
  });

});