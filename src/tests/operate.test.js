import operate from '../logic/operate';

describe('Tests for Operating logic', () => {
  // Addition
  test('1 + 5 and return 6', () => {
    expect(operate(1, 5, '+')).toEqual('6');
  });
  // subtraction
  test('7 - 0 and return 7', () => {
    expect(operate(15, 10, '-')).toEqual('5');
  });
  // Multiplication
  test('6 x 3 and return 126', () => {
    expect(operate(6, 3, 'x')).toEqual('18');
  });
  // Division
  test('70 ÷ 10 and return 7', () => {
    expect(operate(70, 10, '÷')).toEqual('7');
  });
  // Division by 0
  test('9 ÷ 0 and return Can\'t divide by 0.', () => {
    expect(operate(30, 0, '÷')).toEqual('Can\'t divide by 0.');
  });
  // Modulo
  test('100 % 80 and return 40', () => {
    expect(operate(100, 80, '%')).toEqual('20');
  });
  // Modulo by 0
  test('100 % 0 and return Can\'t find modulo as can\'t divide by 0.', () => {
    expect(operate(100, 0, '%')).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
  // Throw Error
  test('Throw Error if the operator is no defined or valid', () => {
    expect(() => (operate(100, 0, ';')).toThrow(Error));
  });
});