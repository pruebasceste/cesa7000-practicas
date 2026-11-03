// tests/index.test.js
const { sumar } = require('../src/index');

test('suma dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});