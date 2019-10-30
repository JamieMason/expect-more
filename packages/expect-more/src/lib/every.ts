import { UnaryBoolFn } from '../typings';
import { curry } from './curry';

export const every = curry<UnaryBoolFn, any[], boolean>((fn: UnaryBoolFn, array: any[]): boolean => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (fn(array[i]) === false) {
      return false;
    }
  }
  return array.length > 0;
});
