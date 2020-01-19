import { getType } from './get-type';

export const hasType = <T>(type: string) => (value: any): value is T =>
  getType(value) === `[object ${type}]`;
