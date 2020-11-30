import ExpressionManager from "../ExpressionManager"

describe('ExpressionManager', () => {
  test.each(
    [
      ['2+3', 'A+B'],
      ['2+3*(2.2/5)^33.3', 'A+B*(C/D)^E'],
    ],
  )('When i receive %p returns  %p', (expression, expected) => {
    let result = new ExpressionManager(expression);

    expect(expected).toEqual(result.SimplifiedExpression);
  });
});