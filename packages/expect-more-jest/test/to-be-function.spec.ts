import 'expect-more-jest';

it('provides expect().toBeFunction()', () => {
  expect(() => 'i am a function').toBeFunction();
});

it('provides expect().not.toBeFunction()', () => {
  expect(() => expect(() => 'i am a function').not.toBeFunction()).toThrow();
});

it('provides expect.toBeFunction()', () => {
  expect(() => 'i am a function').toEqual(expect.toBeFunction());
});
