import { isDate } from './is-date';
import { curry } from './lib/curry';

export const isAfter = curry<Date, any, boolean>(
  (otherDate, value) => isDate(value) && isDate(otherDate) && value.getTime() > otherDate.getTime()
);
