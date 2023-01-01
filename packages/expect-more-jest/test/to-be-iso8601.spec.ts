import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeIso8601()', () => {
  expect('1999-12-31T23:59:59').toBeIso8601();
});

it('provides global.expect().not.toBeIso8601()', () => {
  expect(() => expect('1999-12-31T23:59:59').not.toBeIso8601()).toThrow();
});

it('provides global.expect.toBeIso8601()', () => {
  expect('1999-12-31T23:59:59').toEqual(expect.toBeIso8601());
});

it('provides expect().toBeIso8601()', () => {
  esmExpect('1999-12-31T23:59:59').toBeIso8601();
});

it('provides expect().not.toBeIso8601()', () => {
  esmExpect(() => esmExpect('1999-12-31T23:59:59').not.toBeIso8601()).toThrow();
});

it('provides expect.toBeIso8601()', () => {
  esmExpect('1999-12-31T23:59:59').toEqual(esmExpect.toBeIso8601());
});
