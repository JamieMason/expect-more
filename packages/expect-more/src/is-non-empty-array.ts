import { isArray } from './is-array';

export const isNonEmptyArray = (value: any) => isArray(value) && value.length > 0;
