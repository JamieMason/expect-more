import { isWithinRange } from './is-within-range';
import { curry } from './lib/curry';

export const isNear = curry<number, number, any, boolean>((other, epsilon, value) =>
  isWithinRange(other - epsilon, other + epsilon, value)
);
