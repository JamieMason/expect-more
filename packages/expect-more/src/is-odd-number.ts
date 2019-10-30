import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

export const isOddNumber = (value) => isNumber(value) && !isDivisibleBy(2, value);
