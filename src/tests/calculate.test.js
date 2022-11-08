import calculate from '../logic/calculate';

describe('Test calculate component', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Return an empty string if "AC" is clicked', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('"+"  operator', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  });
  test('"-"  operator', () => {
    expect(calculate(obj, '-').operation).toBe('-');
  });
  test('"÷"  operator', () => {
    expect(calculate(obj, '÷').operation).toBe('÷');
  });
  test('"x"  operator', () => {
    expect(calculate(obj, 'x').operation).toBe('x');
  });

  // complete calculation
  test('complete calculation', () => {
    obj.next = 2;
    expect(calculate(calculate(calculate(calculate(obj, 'null'), '+'), '545'), '=').total).toBe('547');
  });
});