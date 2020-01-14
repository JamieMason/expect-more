import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

/**
 * Asserts that ${value} is safe to attempt to read property values from.
 * @param value {}
 * @matcherName toBeWalkable
 * @memberMatcherName toHaveWalkable
 * @matcherMessage expected ${value} to be walkable
 * @matcherNotMessage expected ${value} not to be walkable
 */
export const isWalkable = (value: any): boolean => !isNull(value) && !isUndefined(value);
