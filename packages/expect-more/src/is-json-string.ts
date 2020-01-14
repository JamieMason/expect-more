/**
 * Asserts that ${value} is a `String` of valid JSON.
 * @matcherName toBeJsonString
 * @memberMatcherName toHaveJsonString
 * @matcherMessage expected ${value} to be a string of valid JSON
 * @matcherNotMessage expected ${value} not to be a string of valid JSON
 */
export const isJsonString = (value: any): boolean => {
  try {
    return JSON.parse(value) !== null;
  } catch (err) {
    return false;
  }
};
