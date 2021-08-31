import { isWithinRange } from './is-within-range';
import { curry3 } from './lib/curry3';

/**
 * Asserts that a value is a number within the given acceptable distance from
 * another.
 * @param otherNumber 5
 * @param epsilon 0.5
 * @param value 4.8
 * @matcherName toBeNear
 * @memberMatcherName toHaveNumberNear
 * @matcherMessage expected ${value} to be within ${epsilon} greater or less
 * than ${otherNumber}
 * @matcherNotMessage expected ${value} not to be within ${epsilon} greater or
 * less than ${otherNumber}
 */
export const isNear = curry3((otherNumber: number, epsilon: number, value: any): value is number =>
  isWithinRange(otherNumber - epsilon, otherNumber + epsilon, value),
);
