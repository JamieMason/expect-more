import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
 * @matcherName toBeNumber
 * @memberMatcherName toHaveNumber
 * @matcherMessage expected ${value} to be a valid number
 * @matcherNotMessage expected ${value} not to be a valid number
 */
export const isNumber = (value: any): value is number =>
  hasType<number>('Number')(value) && !isNaN(parseFloat(String(value)));
