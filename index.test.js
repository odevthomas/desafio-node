const soma = require('./index');

test('soma 2 + 2 deve ser 4', () => {
  expect(soma(2, 2)).toBe(4);
});
