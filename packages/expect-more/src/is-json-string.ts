import { isString } from './is-string';

/**
 * Asserts that a value is a `String` of valid JSON.
 * @param value '{"i":"am valid JSON"}'
 * @matcherName toBeJsonString
 * @memberMatcherName toHaveJsonString
 * @matcherMessage expected ${value} to be a string of valid JSON
 * @matcherNotMessage expected ${value} not to be a string of valid JSON
 */
export const isJsonString = (value: unknown): value is string => {
  try {
    return isString(value) && JSON.parse(value) !== null;
  } catch (err) {
    return false;
  }
};
