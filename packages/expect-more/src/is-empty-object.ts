import { isObject } from './is-object';
import { keys } from './lib/keys';

export const isEmptyObject = (value) => isObject(value) && keys(value).length === 0;
