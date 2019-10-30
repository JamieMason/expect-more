import { isString } from './is-string';
import { isWalkable } from './is-walkable';
import { curry } from './lib/curry';

export const hasMember = curry<string, any, boolean>(
  (key: string, value: any) => isString(key) && isWalkable(value) && key in value
);
