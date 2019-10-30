import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

export const isWalkable = (value: any) => !isNull(value) && !isUndefined(value);
