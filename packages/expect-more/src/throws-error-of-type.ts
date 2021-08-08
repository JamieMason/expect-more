import { curry2 } from './lib/curry2';
import { AnyFn } from './typings';

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
export const throwsErrorOfType = curry2<AnyFn>((typeName: string, value: AnyFn): value is AnyFn => {
  try {
    value();
    return false;
  } catch (err) {
    return err.name === typeName;
  }
});
