const chalk = require('chalk');
const childProcess = require('child_process');
const Generator = require('yeoman-generator');
const path = require('path');
const yosay = require('yosay');

const rootPath = path.resolve(__dirname, '../../../..');
const paths = {
  root: rootPath,
  expectMore: path.resolve(rootPath, './packages/expect-more'),
  assertionIndex: path.resolve(rootPath, './packages/expect-more/src/index.ts'),
  generator: path.resolve(__dirname, './generators/app'),
  assertionTemplate: path.resolve(__dirname, './templates/assertion.ejs'),
  specTemplate: path.resolve(__dirname, './templates/assertion.spec.ejs')
};

const camelToKebab = (camelName) => camelName.replace(/[A-Z]/g, '-$&').toLowerCase();
const camelToSentence = (camelName) => camelName.replace(/[A-Z]/g, ' $&').toLowerCase();
const getAssertionPath = (camelName) => path.resolve(paths.expectMore, `./src/${camelToKebab(camelName)}.ts`);
const getAssertionSpecPath = (camelName) => path.resolve(paths.expectMore, `./test/${camelToKebab(camelName)}.spec.ts`);

class ExpectMoreGenerator extends Generator {
  async getConfiguration() {
    const defaults = this.config.get('assertion');
    this.props = await this.prompt(
      [
        {
          message: 'Name',
          name: 'camelName',
          type: 'input'
        },
        {
          message: 'Does the Assertion take Arguments?',
          name: 'hasArguments',
          type: 'confirm'
        },
        {
          message: 'List each Argument and its Type. Separate each argument with a comma',
          name: 'rawArguments',
          type: 'input',
          when: ({ hasArguments }) => hasArguments
        }
      ].map((question) => {
        question.default = defaults[question.name];
        return question;
      })
    );
    const { camelName, rawArguments = '' } = this.props;
    this.props.assertionPath = getAssertionPath(camelName);
    this.props.assertionSpecPath = getAssertionSpecPath(camelName);
    this.props.kebabName = camelToKebab(camelName);
    this.props.sentenceName = camelToSentence(camelName);
    this.props.argumentsList = rawArguments
      .split(',')
      .filter(Boolean)
      .map((v) => v.trim());
  }

  printConfiguration() {
    console.log(this.props);
  }

  addAssertionToIndex() {
    const { camelName, kebabName } = this.props;
    const imports = this.fs
      .read(paths.assertionIndex)
      .split('\n')
      .concat(`export { ${camelName} } from './${kebabName}';`)
      .filter(Boolean)
      .sort()
      .concat('');
    const uniqueImports = Array.from(new Set(imports));
    this.fs.write(paths.assertionIndex, uniqueImports.join('\n'));
  }

  writeAssertion() {
    this.fs.copyTpl(paths.assertionTemplate, this.props.assertionPath, this.props);
    this.fs.copyTpl(paths.specTemplate, this.props.assertionSpecPath, this.props);
  }

  formatChanges() {
    const commit = this.fs.commit.bind(this.fs);
    this.fs.commit = (filters, done) => {
      return commit(filters, (...args) => {
        const command = `yarn prettier --write ${this.props.assertionPath} ${this.props.assertionSpecPath} ${paths.assertionIndex}`;
        childProcess.execSync(command, { cwd: rootPath });
        return done(...args);
      });
    };
  }
}

module.exports = ExpectMoreGenerator;
