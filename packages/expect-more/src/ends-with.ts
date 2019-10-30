import { isNonEmptyString } from './index';
import { curry } from './lib/curry';

export const endsWith = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(value.length - otherString.length, value.length) === otherString
);
