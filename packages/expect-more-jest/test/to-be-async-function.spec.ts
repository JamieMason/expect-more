import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';
// eval is workaround for typescript converting async to non-async

it('provides global.expect().toBeAsyncFunction()', () => {
  expect(eval('(async (_) => _)')).toBeAsyncFunction();
});

it('provides global.expect().not.toBeAsyncFunction()', () => {
  expect(() => expect(eval('(async (_) => _)')).not.toBeAsyncFunction()).toThrow();
});

it('provides global.expect.toBeAsyncFunction()', () => {
  expect(eval('(async (_) => _)')).toEqual(expect.toBeAsyncFunction());
});

it('provides expect().toBeAsyncFunction()', () => {
  esmExpect(eval('(async (_) => _)')).toBeAsyncFunction();
});

it('provides expect().not.toBeAsyncFunction()', () => {
  esmExpect(() => esmExpect(eval('(async (_) => _)')).not.toBeAsyncFunction()).toThrow();
});

it('provides expect.toBeAsyncFunction()', () => {
  esmExpect(eval('(async (_) => _)')).toEqual(esmExpect.toBeAsyncFunction());
});
