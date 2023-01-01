import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';
// eval is workaround for typescript converting generator fns

it('provides global.expect().toBeGeneratorFunction()', () => {
  expect(eval('(function*() {yield 2;})')).toBeGeneratorFunction();
});

it('provides global.expect().not.toBeGeneratorFunction()', () => {
  expect(() => expect(eval('(function*() {yield 2;})')).not.toBeGeneratorFunction()).toThrow();
});

it('provides global.expect.toBeGeneratorFunction()', () => {
  expect(eval('(function*() {yield 2;})')).toEqual(expect.toBeGeneratorFunction());
});

it('provides expect().toBeGeneratorFunction()', () => {
  esmExpect(eval('(function*() {yield 2;})')).toBeGeneratorFunction();
});

it('provides expect().not.toBeGeneratorFunction()', () => {
  esmExpect(() =>
    esmExpect(eval('(function*() {yield 2;})')).not.toBeGeneratorFunction(),
  ).toThrow();
});

it('provides expect.toBeGeneratorFunction()', () => {
  esmExpect(eval('(function*() {yield 2;})')).toEqual(esmExpect.toBeGeneratorFunction());
});
