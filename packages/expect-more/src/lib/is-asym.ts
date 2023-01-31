import { isFunction } from '../is-function';
import { isObject } from '../is-object';

interface AsymmetricMatcher {
  asymmetricMatch(value: unknown): boolean;
}

export function isAsym(value: unknown): value is AsymmetricMatcher {
  return isObject(value) && isFunction(value.asymmetricMatch);
}
