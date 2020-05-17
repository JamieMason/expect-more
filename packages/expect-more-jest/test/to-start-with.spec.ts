import 'expect-more-jest';

it('provides expect().toStartWith()', () => {
  expect('JavaScript').toStartWith('Java');
});

it('provides expect().not.toStartWith()', () => {
  expect(() => expect('JavaScript').not.toStartWith('Java')).toThrow();
});

it('provides expect.toStartWith()', () => {
  expect('JavaScript').toEqual(expect.toStartWith('Java'));
});
