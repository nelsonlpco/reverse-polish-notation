import Memoiser from "../Memoiser";

describe('utils > memoise', () => {
  test.each(
    [
      [(a: number, b: number) => a + b , [2, 2] , 4],
      // [(a: number, b: number, c: number) => a + b * c, [2, 2, 2], 6],
      // [(a: number, b: number) => a + b , [2, 2] , 4],
    ]
  )('should be moize a function %p and receibe params %p returns %p', 
  (f, p, e) => {
    const memoisedFunction = Memoiser(f);

    const result1 = memoisedFunction(...p);
    const result2 = memoisedFunction(...p);
    const result3 = memoisedFunction(...p);

    expect(e).toEqual(result1);
    expect(e).toEqual(result2);
    expect(e).toEqual(result3);
  });
});