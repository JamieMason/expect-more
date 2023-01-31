import { isArray } from './is-array';
import { curry2 } from './lib/curry2';
import { isJestEqual } from './lib/is-jest-equal';
import { some } from './lib/some';

/**
 * Asserts that `value` is an `Array` including at least one of the members of
 * `allowedValues`.
 * @param allowedValues ['Ginola', 3]
 * @param value [12, 0, 14, 'Ginola']
 * @matcherName toBeArrayIncludingAnyOf
 * @memberMatcherName toHaveArrayIncludingAnyOf
 * @matcherMessage expected ${value} to include at least one of the values in
 * ${allowedValues}
 * @matcherNotMessage expected ${value} not to include at least one of the
 * values in ${allowedValues}
 */
export const isArrayIncludingAnyOf = curry2(
  (allowedValues: unknown[], value: unknown): value is any[] =>
    isArray(allowedValues) &&
    isArray(value) &&
    some((allowedValue: unknown) => some(isJestEqual(allowedValue), value), allowedValues),
);
