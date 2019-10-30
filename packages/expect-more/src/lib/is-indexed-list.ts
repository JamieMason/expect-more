import { isArray } from '../is-array';
import { isString } from '../is-string';

export const isIndexedList = (value: any) => isString(value) || isArray(value);
