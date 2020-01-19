it('provides expect().toBeEvenNumber()', () => {
  expect(2).toBeEvenNumber();
});

it('provides expect().not.toBeEvenNumber()', () => {
  expect(() => expect(2).not.toBeEvenNumber()).toThrow();
});

it('provides expect.toBeEvenNumber()', () => {
  expect(2).toEqual(expect.toBeEvenNumber());
});
