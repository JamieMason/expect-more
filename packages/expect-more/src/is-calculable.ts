/**
 * Assert value can be used in Mathemetic calculations despite not being a
 * `Number`, for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
 * @matcherName toBeCalculable
 * @memberMatcherName toHaveCalculable
 * @matcherMessage expected ${value} to be coercible for use in mathemetical
 * operations
 * @matcherNotMessage expected ${value} not to be coercible for use in
 * mathemetical operations
 */
export const isCalculable = (value: any): boolean => !isNaN(value * 2);
