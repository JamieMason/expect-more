import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a `Function` which throws an `Error` of the given
 * type.
 * @param typeName 'TypeError'
 * @param value () => thisValueIsUndefined.someProp
 * @matcherName toThrowErrorOfType
 * @memberMatcherName toHaveMethodThrowingErrorOfType
 * @matcherMessage expected ${value} to throw an error of type ${typeName}
 * @matcherNotMessage expected ${value} not to throw an error of type
 * ${typeName}
 */
export const throwsErrorOfType: {
  (typeName: string, value: any): boolean;
  (typeName: string): (value: any) => boolean;
} = curry((typeName, value) => {
  try {
    value();
    return false;
  } catch (err) {
    return err.name === typeName;
  }
});
