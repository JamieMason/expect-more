const fs = require('fs');
const inquirer = require('inquirer');
const _ = require('lodash');
const { EOL } = require('os');
const path = require('path');

const generateTest = ({ camelName }) =>
  `
it('provides ${camelName}', () => {
  expect('VALUE_WHICH_PASSES').${camelName}();
  expect(() => {
    expect('VALUE_WHICH_FAILS').${camelName}();
  }).toThrow();
  expect(() => {
    expect('VALUE_WHICH_PASSES').not.${camelName}();
  }).toThrow();
});

it('provides expect.${camelName}', () => {
  expect('VALUE_WHICH_PASSES').toEqual(expect.${camelName}());
});
`.trimLeft();

const generateSource = ({ camelName, description, sentenceName }) =>
  `
import { endsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that ${description}.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.${camelName}(ADD_ARGUMENTS_HERE_IF_APPLICABLE)
       * );
       */
      ${camelName}<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that ${description}.
       * @example
       * expect(ADD_EXAMPLE_INPUT_VALUE).${camelName}(ADD_ARGUMENTS_HERE_IF_APPLICABLE);
       */
      ${camelName}(): R;
    }
  }
}

export const ${camelName}Matcher = (received: any/*, foo, bar, baz*/) =>
  createResult({
    message: () => \`expected \${received} ${sentenceName}\`,
    notMessage: () => \`expected \${received} not ${sentenceName}\`,
    pass: endsWith('Replace this with whatever your matcher logic is', received)
  });

expect.extend({ ${camelName}: ${camelName}Matcher });
`.trimLeft();

const generateMatcher = ({ description, name }) => {
  const camelName = _.camelCase(name);
  const kebabName = _.kebabCase(name);
  const sentenceName = kebabName.split('-').join(' ');

  const repoRoot = path.resolve(__dirname, '..');
  const packageRoot = path.resolve(repoRoot, './packages/expect-more-jest');
  const sourceFile = path.resolve(packageRoot, `./src/${kebabName}.ts`);
  const testFile = path.resolve(packageRoot, `./test/${kebabName}.spec.ts`);
  const indexFile = path.resolve(packageRoot, `./src/index.ts`);

  const indexCode = _.uniq(
    fs
      .readFileSync(indexFile, { encoding: 'utf8' })
      .split(EOL)
      .filter(Boolean)
      .concat(`export { ${camelName}Matcher } from './${kebabName}';`)
  )
    .sort()
    .concat('')
    .join(EOL);

  const sourceCode = generateSource({ camelName, description, sentenceName });
  const testCode = generateTest({ camelName, description, sentenceName });

  fs.writeFileSync(indexFile, indexCode, { encoding: 'utf8' });
  fs.writeFileSync(sourceFile, sourceCode, { encoding: 'utf8' });
  fs.writeFileSync(testFile, testCode, { encoding: 'utf8' });
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Matcher Name (eg. toBeUseful)'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Complete the description "This Matcher Asserts that..."'
    }
  ])
  .then(({ description, name }) => {
    generateMatcher({ description, name });
  });
