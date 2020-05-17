import 'expect-more-jest';

it('provides expect().toBeDate()', () => {
  expect(new Date('2019-12-31')).toBeDate();
});

it('provides expect().not.toBeDate()', () => {
  expect(() => expect(new Date('2019-12-31')).not.toBeDate()).toThrow();
});

it('provides expect.toBeDate()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeDate());
});
