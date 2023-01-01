import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeEmptyObject()', () => {
  expect({}).toBeEmptyObject();
});

it('provides global.expect().not.toBeEmptyObject()', () => {
  expect(() => expect({}).not.toBeEmptyObject()).toThrow();
});

it('provides global.expect.toBeEmptyObject()', () => {
  expect({}).toEqual(expect.toBeEmptyObject());
});

it('provides expect().toBeEmptyObject()', () => {
  esmExpect({}).toBeEmptyObject();
});

it('provides expect().not.toBeEmptyObject()', () => {
  esmExpect(() => esmExpect({}).not.toBeEmptyObject()).toThrow();
});

it('provides expect.toBeEmptyObject()', () => {
  esmExpect({}).toEqual(esmExpect.toBeEmptyObject());
});
