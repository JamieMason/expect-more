it('provides toBeEvenNumber', () => {
  expect(2).toBeEvenNumber();
  expect(() => { expect(null).toBeEvenNumber(); }).toThrow();
  expect(() => { expect(2).not.toBeEvenNumber(); }).toThrow();
});
