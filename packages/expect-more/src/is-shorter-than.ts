import { curry } from './lib/curry';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that ${value} is a `String` or `Array` whose length is less than that
 * of ${otherStringOrArray}.
 * @param otherStringOrArray ['i', 'have', 4, 'items']
 * @param value ['i have one item']
 * @matcherName toBeShorterThan
 * @memberMatcherName toHaveShorterThan
 * @matcherMessage expected ${value} to be a string or array whose length is
 * less than that of ${otherStringOrArray}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is less than that of ${otherStringOrArray}
 */
export const isShorterThan: {
  (otherStringOrArray: string | any[], value: any): boolean;
  (otherStringOrArray: string | any[]): (value: any) => boolean;
} = curry(
  (otherStringOrArray, value) =>
    isIndexedList(value) && isIndexedList(otherStringOrArray) && value.length < otherStringOrArray.length,
);
