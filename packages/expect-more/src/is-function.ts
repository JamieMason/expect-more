/**
 * Asserts that ${value} is a `Function`.
 * @matcherName toBeFunction
 * @memberMatcherName toHaveMethod
 * @matcherMessage expected ${value} to be a function or async function
 * @matcherNotMessage expected ${value} not to be a function or async function
 */
export const isFunction = <T extends (...args: any[]) => any>(value: any): value is T => typeof value === 'function';
