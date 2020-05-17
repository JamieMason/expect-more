import 'expect-more-jest';

it('provides expect().toEndWith()', () => {
  expect('JavaScript').toEndWith('Script');
});

it('provides expect().not.toEndWith()', () => {
  expect(() => expect('JavaScript').not.toEndWith('Script')).toThrow();
});

it('provides expect.toEndWith()', () => {
  expect('JavaScript').toEqual(expect.toEndWith('Script'));
});
