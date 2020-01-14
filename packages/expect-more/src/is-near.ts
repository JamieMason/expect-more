import { isWithinRange } from './is-within-range';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a number within the given acceptable distance from
 * ${otherNumber}.
 * @matcherName toBeNear
 * @memberMatcherName toHaveNumberNear
 * @matcherMessage expected ${value} to be within ${epsilon} greater or less
 * than ${otherNumber}
 * @matcherNotMessage expected ${value} not to be within ${epsilon} greater or
 * less than ${otherNumber}
 */
export const isNear: {
  (otherNumber: number, epsilon: number, value: any): boolean;
  (otherNumber: number, epsilon: number): (value: any) => boolean;
  (otherNumber: number): (epsilon: number, value: any) => boolean;
} = curry((otherNumber, epsilon, value) => isWithinRange(otherNumber - epsilon, otherNumber + epsilon, value));
