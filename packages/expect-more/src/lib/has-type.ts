import { getType } from './get-type';

export const hasType = (type: string) => (value: any): boolean => getType(value) === `[object ${type}]`;
