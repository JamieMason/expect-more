import { isString } from './is-string';
import { isWalkable } from './is-walkable';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} has a property of the given name, even if the value of
 * that property is undefined. This assertion describes the shape of the given
 * value. For example, value.prop is `undefined` in both of the following
 * scenarios, but `{ prop: undefined }` and `{ }` do not have the same shape.
 * @param ownKeyName 'name'
 * @param value { name: 'Guybrush Threepwood' }
 * @matcherName toHaveMember
 * @memberMatcherName toHaveNestedMember
 * @matcherMessage expected ${value} to have a property at ${ownKeyName}
 * @matcherNotMessage expected ${value} not to have a property at ${ownKeyName}
 */
export const hasMember: {
  (ownKeyName: string, value: any): boolean;
  (ownKeyName: string): (value: any) => boolean;
} = curry((ownKeyName, value) => isString(ownKeyName) && isWalkable(value) && ownKeyName in value);
