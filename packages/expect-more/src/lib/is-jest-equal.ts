import { curry2 } from './curry2';
import { isAsym } from './is-asym';

export const isJestEqual = curry2(
  <T>(value: T, other: unknown): other is T =>
    value === other ||
    (isAsym(value) && value.asymmetricMatch(other)) ||
    (isAsym(other) && other.asymmetricMatch(value)),
);
