import { isNonEmptyString } from './index';
import { curry } from './lib/curry';

export const startsWith = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isNonEmptyString(value) && isNonEmptyString(otherString) && value.slice(0, otherString.length) === otherString
);
