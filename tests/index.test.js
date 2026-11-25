const { sumar, restar } = require('../src/index');
 
describe('sumar', () => {
  test('suma dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });
 
  test('suma con un número negativo', () => {
    expect(sumar(-2, 3)).toBe(1);
  });
 
  test('suma con cero', () => {
    expect(sumar(0, 7)).toBe(7);
  });
 
  test('suma decimales', () => {
    expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('restar', () => {
  test('resta dos números', () => {
    expect(restar(5, 3)).toBe(2);
  });
 
  test('da negativo si el segundo es mayor', () => {
    expect(restar(3, 5)).toBe(-2);
  });
});
