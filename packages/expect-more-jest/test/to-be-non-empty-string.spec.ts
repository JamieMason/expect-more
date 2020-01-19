it('provides expect().toBeNonEmptyString()', () => {
  expect('i am not empty').toBeNonEmptyString();
});

it('provides expect().not.toBeNonEmptyString()', () => {
  expect(() => expect('i am not empty').not.toBeNonEmptyString()).toThrow();
});

it('provides expect.toBeNonEmptyString()', () => {
  expect('i am not empty').toEqual(expect.toBeNonEmptyString());
});
