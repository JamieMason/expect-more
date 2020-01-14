/**
 * Asserts that ${value} is a `Function` which throws when invoked.
 * @param value () => { throw new Error("it wasn't me!") }
 * @matcherName toThrowAnyError
 * @memberMatcherName toHaveMethodThrowingAnyError
 * @matcherMessage expected ${value} to throw
 * @matcherNotMessage expected ${value} not to throw
 */
export const throwsAnyError = (value: any): boolean => {
  try {
    value();
    return false;
  } catch (err) {
    return true;
  }
};
