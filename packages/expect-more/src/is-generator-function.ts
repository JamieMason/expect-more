import { hasType } from './lib/has-type';

/**
 * Asserts that a value is a `Function` using `yield` syntax.
 * @param value function* gen() { yield 'i am a generator' }
 * @matcherName toBeGeneratorFunction
 * @memberMatcherName toHaveGeneratorFunction
 * @matcherMessage expected ${value} to be a function using yield syntax.
 * @matcherNotMessage expected ${value} not to be a function using yield syntax.
 */
export const isGeneratorFunction = hasType<Generator>('GeneratorFunction');
