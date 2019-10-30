import { isArray } from './is-array';
import { curry } from './lib/curry';

export const isArrayOfSize = curry<number, any, boolean>((size, value) => isArray(value) && value.length === size);
