import 'expect-more-jest';

it('provides expect().toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toBeRegExp();
});

it('provides expect().not.toBeRegExp()', () => {
  expect(() => expect(new RegExp('i am a regular expression')).not.toBeRegExp()).toThrow();
});

it('provides expect.toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toEqual(expect.toBeRegExp());
});
