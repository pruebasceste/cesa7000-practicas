// tests/index.test.js
const { sumar, restar } =
  require('../src/index');
 
test('suma dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});
 
test('resta dos números', () => {
  expect(restar(5, 3)).toBe(2);
});
