import { isNumber } from './is-number';
import { curry } from './lib/curry';

export const isLessThanOrEqualTo = curry<number, any, boolean>(
  (other, value) => isNumber(value) && isNumber(other) && value <= other
);
