import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

export const isWholeNumber = (value) => isNumber(value) && (value === 0 || isDivisibleBy(1, value));
