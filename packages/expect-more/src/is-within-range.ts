import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { curry } from './lib/curry';

export const isWithinRange = curry<number, number, any, boolean>(
  (floor, ceiling, value) => isLessThanOrEqualTo(ceiling, value) && isGreaterThanOrEqualTo(floor, value)
);
