it('provides expect().toBeString()', () => {
  expect('i am a string').toBeString();
});

it('provides expect().not.toBeString()', () => {
  expect(() => expect('i am a string').not.toBeString()).toThrow();
});

it('provides expect.toBeString()', () => {
  expect('i am a string').toEqual(expect.toBeString());
});
