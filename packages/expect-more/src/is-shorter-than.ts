import { curry } from './lib/curry';
import { isIndexedList } from './lib/is-indexed-list';

export const isShorterThan = curry<string | any[], any, boolean>(
  (otherString: string | any[], value: any) =>
    isIndexedList(value) && isIndexedList(otherString) && value.length < otherString.length
);
