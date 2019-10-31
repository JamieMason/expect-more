const chalk = require('chalk');
const childProcess = require('child_process');
const Generator = require('yeoman-generator');
const path = require('path');
const yosay = require('yosay');

const rootPath = path.resolve(__dirname, '../../../..');
const paths = {
  root: rootPath,
  expectMore: path.resolve(rootPath, './packages/expect-more'),
  expectMoreJest: path.resolve(rootPath, './packages/expect-more-jest'),
  matcherIndex: path.resolve(rootPath, './packages/expect-more-jest/src/index.ts'),
  generator: path.resolve(__dirname, './generators/app'),
  matcherTemplate: path.resolve(__dirname, './templates/matcher.ejs'),
  specTemplate: path.resolve(__dirname, './templates/matcher.spec.ejs')
};

const camelToKebab = (camelName) => camelName.replace(/[A-Z]/g, '-$&').toLowerCase();
const camelToSentence = (camelName) => camelName.replace(/[A-Z]/g, ' $&').toLowerCase();
const getMatcherPath = (camelName) => path.resolve(paths.expectMoreJest, `./src/${camelToKebab(camelName)}.ts`);
const getMatcherSpecPath = (camelName) =>
  path.resolve(paths.expectMoreJest, `./test/${camelToKebab(camelName)}.spec.ts`);

class ExpectMoreGenerator extends Generator {
  async getConfiguration() {
    this.props = await this.prompt(
      [
        {
          message: 'Name',
          name: 'camelName',
          type: 'input'
        },
        {
          message: 'Description',
          name: 'description',
          type: 'input'
        },
        {
          message: 'Does the Matcher take Arguments?',
          name: 'hasArguments',
          type: 'confirm'
        },
        {
          message: 'List each Argument and its Type. Separate each argument with a comma',
          name: 'rawArguments',
          type: 'input',
          when: ({ hasArguments }) => hasArguments
        },
        {
          message: 'Usage Example',
          name: 'example',
          type: 'input'
        },
        {
          message: 'Asymmetric Usage Example',
          name: 'asymmetricExample',
          type: 'input'
        },
        {
          message: ({ camelName }) => `Fail Message for expect().${camelName}`,
          name: 'failMessage',
          type: 'input'
        },
        {
          message: ({ camelName }) => `Fail Message for expect().not.${camelName}`,
          name: 'notFailMessage',
          type: 'input'
        }
      ].map((question) => {
        question.default = this.config.get(question.name);
        return question;
      })
    );
    const { camelName, rawArguments = '' } = this.props;
    this.props.matcherPath = getMatcherPath(camelName);
    this.props.matcherSpecPath = getMatcherSpecPath(camelName);
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

  addMatcherToIndex() {
    const { camelName, kebabName } = this.props;
    const imports = this.fs
      .read(paths.matcherIndex)
      .split('\n')
      .concat(`export { ${camelName}Matcher } from './${kebabName}';`)
      .filter(Boolean)
      .sort()
      .concat('');
    const uniqueImports = Array.from(new Set(imports));
    this.fs.write(paths.matcherIndex, uniqueImports.join('\n'));
  }

  writeMatcher() {
    this.fs.copyTpl(paths.matcherTemplate, this.props.matcherPath, this.props);
    this.fs.copyTpl(paths.specTemplate, this.props.matcherSpecPath, this.props);
  }

  formatChanges() {
    const commit = this.fs.commit.bind(this.fs);
    this.fs.commit = (filters, done) => {
      return commit(filters, (...args) => {
        const command = `yarn prettier --write ${this.props.matcherPath} ${this.props.matcherSpecPath} ${paths.matcherIndex}`;
        childProcess.execSync(command, { cwd: rootPath });
        return done(...args);
      });
    };
  }
}

module.exports = ExpectMoreGenerator;
