import { curry2 } from './curry2';

export const includes = curry2((value: unknown, array: any[]): array is any[] => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
});
