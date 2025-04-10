// sum.test.js
function sum(a, b) {
  return a + b;
}

test('soma 1 + 2 deve dar 3', () => {
  expect(sum(1, 2)).toBe(3);
});
