it('provides toBeEvenNumber', () => {
  expect(2).toBeEvenNumber();
  expect(() => {
    expect(null).toBeEvenNumber();
  }).toThrow();
  expect(() => {
    expect(2).not.toBeEvenNumber();
  }).toThrow();
});

it('provides expect.toBeEvenNumber', () => {
  expect(2).toEqual(expect.toBeEvenNumber());
});
