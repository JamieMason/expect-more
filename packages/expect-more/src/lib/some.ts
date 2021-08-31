import { UnaryBoolFn } from '../typings';
import { curry2 } from './curry2';

export const some = curry2((fn: UnaryBoolFn, array: any[]): array is any[] => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (fn(array[i]) === true) {
      return true;
    }
  }
  return false;
});
