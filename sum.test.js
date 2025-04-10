const sum = require('./sum');

test('soma de 2 + 2 deve ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('soma de números negativos', () => {
  expect(sum(-2, -3)).toBe(-5);
});
