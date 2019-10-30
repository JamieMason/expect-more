import { isObject } from './is-object';
import { keys } from './lib/keys';

export const isNonEmptyObject = (value: any) => isObject(value) && keys(value).length > 0;
