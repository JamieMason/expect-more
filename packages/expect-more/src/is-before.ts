import { isAfter } from './is-after';
import { curry } from './lib/curry';

export const isBefore = curry<Date, any, boolean>((otherDate, value) => isAfter(value, otherDate));
