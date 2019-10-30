import { isString } from './is-string';

export const isEmptyString = (value) => isString(value) && value.length === 0;
