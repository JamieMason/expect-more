import chalk from 'chalk';
import { matcherHint, printExpected } from 'jest-matcher-utils';
import { AnyFunction, Collection, GeneratorCreator, IGenerator } from './gen';

export type ResultCreator = (
  options: {
    pass: boolean;
    message: () => string;
    notMessage: () => string;
  }
) => {
  message: () => string;
  pass: boolean;
};

export const createResult: ResultCreator = ({ pass, message, notMessage }) => ({
  message: () => (pass ? notMessage() : message()).trim(),
  pass
});

export const createToHandleComparer = (matcherName: string, createGenerator: GeneratorCreator) => (
  fn: AnyFunction,
  shape: Collection
) => {
  const generator: IGenerator = createGenerator(shape);
  const result = generator.assert(fn);
  const message = (hint, permutation, error) => `
  ${hint}

  When called with:
    ${permutation}

  Throws:
    ${error}
  `;

  const notMessage = (hint, msg) => `
  ${hint}

  ${msg}
  `;
  return createResult({
    message: () =>
      message(
        matcherHint(`.${matcherName}`, `Function ${fn.name}`),
        printExpected(result.permutation),
        chalk.red(result.error.stack)
      ),
    notMessage: () =>
      notMessage(matcherHint(`.not.${matcherName}`, `Function ${fn.name}`), chalk.red('No Error was thrown')),
    pass: result.pass
  });
};
