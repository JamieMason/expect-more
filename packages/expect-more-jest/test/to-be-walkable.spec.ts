import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeWalkable()', () => {
  expect({}).toBeWalkable();
});

it('provides global.expect().not.toBeWalkable()', () => {
  expect(() => expect({}).not.toBeWalkable()).toThrow();
});

it('provides global.expect.toBeWalkable()', () => {
  expect({}).toEqual(expect.toBeWalkable());
});

it('provides expect().toBeWalkable()', () => {
  esmExpect({}).toBeWalkable();
});

it('provides expect().not.toBeWalkable()', () => {
  esmExpect(() => esmExpect({}).not.toBeWalkable()).toThrow();
});

it('provides expect.toBeWalkable()', () => {
  esmExpect({}).toEqual(esmExpect.toBeWalkable());
});
