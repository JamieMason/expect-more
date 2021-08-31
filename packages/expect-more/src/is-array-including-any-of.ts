import { isArray } from './is-array';
import { curry2 } from './lib/curry2';
import { includes } from './lib/includes';
import { some } from './lib/some';

/**
 * Asserts that `value` is an `Array` including at least one of the members of
 * `values`.
 * @param values ['Ginola', 3]
 * @param value [12, 0, 14, 'Ginola']
 * @matcherName toBeArrayIncludingAnyOf
 * @memberMatcherName toHaveArrayIncludingAnyOf
 * @matcherMessage expected ${value} to include at least one of the values in
 * ${values}
 * @matcherNotMessage expected ${value} not to include at least one of the
 * values in ${values}
 */
export const isArrayIncludingAnyOf = curry2(
  (values: unknown[], value: unknown): value is any[] =>
    isArray(values) && some((other) => includes(other, value), values),
);
