import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toBeNonEmptyObject();
});

it('provides global.expect().not.toBeNonEmptyObject()', () => {
  expect(() => expect({ i: 'am not empty' }).not.toBeNonEmptyObject()).toThrow();
});

it('provides global.expect.toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toEqual(expect.toBeNonEmptyObject());
});

it('provides expect().toBeNonEmptyObject()', () => {
  esmExpect({ i: 'am not empty' }).toBeNonEmptyObject();
});

it('provides expect().not.toBeNonEmptyObject()', () => {
  esmExpect(() => esmExpect({ i: 'am not empty' }).not.toBeNonEmptyObject()).toThrow();
});

it('provides expect.toBeNonEmptyObject()', () => {
  esmExpect({ i: 'am not empty' }).toEqual(esmExpect.toBeNonEmptyObject());
});
