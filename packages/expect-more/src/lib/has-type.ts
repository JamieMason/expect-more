import { getType } from './get-type';

export const hasType =
  <T>(type: string) =>
  <CallTimeType = T>(value: unknown): value is CallTimeType =>
    getType(value) === `[object ${type}]`;
