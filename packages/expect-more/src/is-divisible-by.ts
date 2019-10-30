import { curry } from './lib/curry';

export const isDivisibleBy = curry<number, any, boolean>((other, value) => value % other === 0);
