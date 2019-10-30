import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

export const isEvenNumber = (value) => isNumber(value) && isDivisibleBy(2, value);
