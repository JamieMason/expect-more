import 'expect-more-jest';

it('provides expect().toBeCalculable()', () => {
  expect('100').toBeCalculable();
});

it('provides expect().not.toBeCalculable()', () => {
  expect(() => expect('100').not.toBeCalculable()).toThrow();
});

it('provides expect.toBeCalculable()', () => {
  expect('100').toEqual(expect.toBeCalculable());
});
