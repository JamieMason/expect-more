import { hasType } from './lib/has-type';

/**
 * Asserts that ${value} is a `Function` using yield syntax.
 * @matcherName toBeGeneratorFunction
 * @memberMatcherName toHaveGeneratorFunction
 * @matcherMessage expected ${value} to be a function using yield syntax.
 * @matcherNotMessage expected ${value} not to be a function using yield syntax.
 */
export const isGeneratorFunction = hasType<Generator>('GeneratorFunction');
