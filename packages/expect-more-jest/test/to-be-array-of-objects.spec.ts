import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toBeArrayOfObjects();
});

it('provides global.expect().not.toBeArrayOfObjects()', () => {
  expect(() => expect([{}, new Object()]).not.toBeArrayOfObjects()).toThrow();
});

it('provides global.expect.toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toEqual(expect.toBeArrayOfObjects());
});

it('provides expect().toBeArrayOfObjects()', () => {
  esmExpect([{}, new Object()]).toBeArrayOfObjects();
});

it('provides expect().not.toBeArrayOfObjects()', () => {
  esmExpect(() => esmExpect([{}, new Object()]).not.toBeArrayOfObjects()).toThrow();
});

it('provides expect.toBeArrayOfObjects()', () => {
  esmExpect([{}, new Object()]).toEqual(esmExpect.toBeArrayOfObjects());
});
