import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeCalculable()', () => {
  expect('100').toBeCalculable();
});

it('provides global.expect().not.toBeCalculable()', () => {
  expect(() => expect('100').not.toBeCalculable()).toThrow();
});

it('provides global.expect.toBeCalculable()', () => {
  expect('100').toEqual(expect.toBeCalculable());
});

it('provides expect().toBeCalculable()', () => {
  esmExpect('100').toBeCalculable();
});

it('provides expect().not.toBeCalculable()', () => {
  esmExpect(() => esmExpect('100').not.toBeCalculable()).toThrow();
});

it('provides expect.toBeCalculable()', () => {
  esmExpect('100').toEqual(esmExpect.toBeCalculable());
});
