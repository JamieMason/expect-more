import { isArray } from './is-array';
import { isString } from './is-string';
import { every } from './lib/every';

export const isArrayOfStrings = (value) => isArray(value) && every(isString, value);
