import { hasType } from './lib/has-type';

export const isNumber = (value: any) => hasType('Number')(value) && !isNaN(parseFloat(value));
