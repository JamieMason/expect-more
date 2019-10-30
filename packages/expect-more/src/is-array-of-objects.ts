import { isArray } from './is-array';
import { isObject } from './is-object';
import { every } from './lib/every';

export const isArrayOfObjects = (value) => isArray(value) && every(isObject, value);
