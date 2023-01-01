import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeSameLengthAs()', () => {
  expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
});

it('provides global.expect().not.toBeSameLengthAs()', () => {
  expect(() =>
    expect(['i also have', '2 items']).not.toBeSameLengthAs(['i have', '2 items']),
  ).toThrow();
});

it('provides global.expect.toBeSameLengthAs()', () => {
  expect(['i also have', '2 items']).toEqual(expect.toBeSameLengthAs(['i have', '2 items']));
});

it('provides expect().toBeSameLengthAs()', () => {
  esmExpect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
});

it('provides expect().not.toBeSameLengthAs()', () => {
  esmExpect(() =>
    esmExpect(['i also have', '2 items']).not.toBeSameLengthAs(['i have', '2 items']),
  ).toThrow();
});

it('provides expect.toBeSameLengthAs()', () => {
  esmExpect(['i also have', '2 items']).toEqual(esmExpect.toBeSameLengthAs(['i have', '2 items']));
});
