import { isArray } from './is-array';
import { isBoolean } from './is-boolean';
import { every } from './lib/every';

export const isArrayOfBooleans = (value) => isArray(value) && every(isBoolean, value);
