import { isArray } from './is-array';
import { curry2 } from './lib/curry2';
import { every } from './lib/every';
import { isJestEqual } from './lib/is-jest-equal';
import { some } from './lib/some';

/**
 * Asserts that a value is an `Array` including only the values provided in the
 * given `allowedValues` array and no others. The order and number of times each
 * value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 * @param allowedValues [1, 5, 10]
 * @param value [5, 10, 1]
 * @matcherName toBeArrayIncludingOnly
 * @memberMatcherName toHaveArrayIncludingOnly
 * @matcherMessage expected ${value} to only include values featured in
 * ${allowedValues} and no others
 * @matcherNotMessage expected ${value} not to only include values featured in
 * ${allowedValues} and no others
 */
export const isArrayIncludingOnly = curry2(
  (allowedValues: unknown[], value: unknown): value is any[] =>
    isArray(allowedValues) &&
    isArray(value) &&
    every((member: unknown) => some(isJestEqual(member), allowedValues), value),
);
