import { isNumber } from './is-number';

export const isDecimalNumber = (value: any) => isNumber(value) && String(value).indexOf('.') !== -1;
