import { isArray, isObject } from 'expect-more';
import { Collection, DeepReducer, PropName } from '..';

export const deepReduce = <T>(collection: Collection, fn: DeepReducer<T>, memo: T): T => {
  const iterator = (value: any, path: PropName[]) => {
    memo = fn(memo, path, value);
    if (isArray(value)) {
      for (let i = 0, len = value.length; i < len; i++) {
        iterator(value[i], path.concat(i));
      }
    } else if (isObject(value)) {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          iterator(value[key], path.concat(key));
        }
      }
    }
    return memo;
  };
  return iterator(collection, []);
};
