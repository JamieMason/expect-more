import 'expect-more-jest';

it('provides expect().toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toBeValidDate();
});

it('provides expect().not.toBeValidDate()', () => {
  expect(() => expect(new Date('2020-01-01')).not.toBeValidDate()).toThrow();
});

it('provides expect.toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toEqual(expect.toBeValidDate());
});
