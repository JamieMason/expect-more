import { isArray } from './is-array';
import { isNumber } from './is-number';
import { every } from './lib/every';

export const isArrayOfNumbers = (value) => isArray(value) && every(isNumber, value);
