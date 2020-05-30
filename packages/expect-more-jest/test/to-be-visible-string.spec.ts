import 'expect-more-jest';

it('provides expect().toBeVisibleString()', () => {
  expect('i am visible').toBeVisibleString();
});

it('provides expect().not.toBeVisibleString()', () => {
  expect(() => expect('i am visible').not.toBeVisibleString()).toThrow();
});

it('provides expect.toBeVisibleString()', () => {
  expect('i am visible').toEqual(expect.toBeVisibleString());
});
