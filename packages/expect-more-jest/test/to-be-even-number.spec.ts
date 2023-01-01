import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeEvenNumber()', () => {
  expect(2).toBeEvenNumber();
});

it('provides global.expect().not.toBeEvenNumber()', () => {
  expect(() => expect(2).not.toBeEvenNumber()).toThrow();
});

it('provides global.expect.toBeEvenNumber()', () => {
  expect(2).toEqual(expect.toBeEvenNumber());
});

it('provides expect().toBeEvenNumber()', () => {
  esmExpect(2).toBeEvenNumber();
});

it('provides expect().not.toBeEvenNumber()', () => {
  esmExpect(() => esmExpect(2).not.toBeEvenNumber()).toThrow();
});

it('provides expect.toBeEvenNumber()', () => {
  esmExpect(2).toEqual(esmExpect.toBeEvenNumber());
});
