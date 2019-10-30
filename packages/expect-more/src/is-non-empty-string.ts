import { isString } from './is-string';

export const isNonEmptyString = (value: any) => isString(value) && value.length > 0;
