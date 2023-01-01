import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateBetween()', () => {
  expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
});

it('provides global.expect().not.toBeDateBetween()', () => {
  expect(() =>
    expect(new Date('2019-12-11')).not.toBeDateBetween(
      new Date('2019-12-10'),
      new Date('2019-12-12'),
    ),
  ).toThrow();
});

it('provides global.expect.toBeDateBetween()', () => {
  expect(new Date('2019-12-11')).toEqual(
    expect.toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12')),
  );
});

it('provides expect().toBeDateBetween()', () => {
  esmExpect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
});

it('provides expect().not.toBeDateBetween()', () => {
  esmExpect(() =>
    esmExpect(new Date('2019-12-11')).not.toBeDateBetween(
      new Date('2019-12-10'),
      new Date('2019-12-12'),
    ),
  ).toThrow();
});

it('provides expect.toBeDateBetween()', () => {
  esmExpect(new Date('2019-12-11')).toEqual(
    esmExpect.toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12')),
  );
});
