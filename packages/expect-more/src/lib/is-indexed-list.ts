import { isArray } from '../is-array';
import { isString } from '../is-string';

export const isIndexedList = (value: unknown): value is string | any[] =>
  isString(value) || isArray(value);
