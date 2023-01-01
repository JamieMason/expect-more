import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeObject()', () => {
  expect({}).toBeObject();
});

it('provides global.expect().not.toBeObject()', () => {
  expect(() => expect({}).not.toBeObject()).toThrow();
});

it('provides global.expect.toBeObject()', () => {
  expect({}).toEqual(expect.toBeObject());
});

it('provides expect().toBeObject()', () => {
  esmExpect({}).toBeObject();
});

it('provides expect().not.toBeObject()', () => {
  esmExpect(() => esmExpect({}).not.toBeObject()).toThrow();
});

it('provides expect.toBeObject()', () => {
  esmExpect({}).toEqual(esmExpect.toBeObject());
});
