import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a function using async/await syntax.
 * @param value async () => { await fetch('...') }
 * @matcherName toBeAsyncFunction
 * @memberMatcherName toHaveAsyncFunction
 * @matcherMessage expected ${value} to be a `Function` using async/await syntax
 * @matcherNotMessage expected ${value} not to be a function using async/await
 * syntax
 */
export const isAsyncFunction = hasType<(...args: any[]) => Promise<any>>('AsyncFunction');
