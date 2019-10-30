import { isBoolean } from '../is-boolean';

export const isGivenBoolean = (bool: boolean) => (value: any) =>
  value === bool || (isBoolean(value) && value.valueOf() === bool);
