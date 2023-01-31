import { isArray } from './is-array';
import { curry2 } from './lib/curry2';
import { every } from './lib/every';
import { isJestEqual } from './lib/is-jest-equal';
import { some } from './lib/some';

/**
 * Asserts that `value` is an `Array` including all of the values provided in
 * `requiredValues`. It could also include additional values or be in a
 * different order, but if every value in `requiredValues` features in `value`
 * then this will return `true`.
 * @param requiredValues ['Ivo', 14]
 * @param value [12, 0, 14, 'Ivo']
 * @matcherName toBeArrayIncludingAllOf
 * @memberMatcherName toHaveArrayIncludingAllOf
 * @matcherMessage expected ${value} to include every value provided in
 * ${requiredValues}
 * @matcherNotMessage expected ${value} not to include every value provided in
 * ${requiredValues}
 */
export const isArrayIncludingAllOf = curry2(
  (requiredValues: unknown[], value: unknown): value is any[] =>
    isArray(requiredValues) &&
    isArray(value) &&
    every((requiredValue) => some(isJestEqual(requiredValue), value), requiredValues),
);
