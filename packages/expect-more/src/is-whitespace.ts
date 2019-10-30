import { isString } from './is-string';

export const isWhitespace = (value: any) => isString(value) && value.search(/\S/) === -1;
