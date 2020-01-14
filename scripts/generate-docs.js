const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const fullApi = [];

const visitFile = ({ filePath, gitHubUrl }) => {
  const code = fs.readFileSync(filePath, 'utf8');
  const setParentNodes = true;
  const sourceFile = ts.createSourceFile(filePath, code, ts.ScriptTarget.ES2015, setParentNodes);

  const api = {
    matcher: null,
    asymmetricMatcher: null,
  };

  const visitNode = (node) => {
    switch (node.kind) {
      case ts.SyntaxKind.InterfaceDeclaration:
        const isAsymmetricMatcher = node.name.text === 'Expect';
        const isMatcher = node.name.text === 'Matchers';
        if (isAsymmetricMatcher || isMatcher) {
          const methodSignature = node.members[0];
          const [jsDoc] = methodSignature.jsDoc || [{ comment: '', tags: [] }];
          const shortName = methodSignature.name.text;
          const name = isAsymmetricMatcher ? `expect.${shortName}` : shortName;
          const signature = isMatcher
            ? `expect(value: any).${methodSignature.getText()}`
            : `expect.${methodSignature.getText()}`;
          const description = jsDoc.comment;
          const examples = jsDoc.tags.filter((tag) => tag.tagName.text === 'example').map((tag) => tag.comment);
          api[isAsymmetricMatcher ? 'asymmetricMatcher' : 'matcher'] = {
            name,
            signature,
            description,
            examples,
            gitHubUrl,
          };
        }
        break;
    }
    ts.forEachChild(node, visitNode);
  };

  fullApi.push(api);
  visitNode(sourceFile);
};

const rootDir = path.resolve(__dirname, '..');
const expectMorePath = path.resolve(rootDir, './packages/expect-more-jest/src');
const files = fs
  .readdirSync(expectMorePath)
  .filter((filename) => filename.endsWith('.ts') && !filename.endsWith('index.ts'))
  .map((filename) => ({
    filePath: path.resolve(expectMorePath, filename),
    gitHubUrl: `https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/src/${filename}`,
  }));

files.forEach(visitFile);

fullApi.forEach(({ matcher, asymmetricMatcher }) => {
  console.log(`### ${matcher.name}`);
  console.log(`${matcher.description}`);
  console.log(`##### \`${matcher.signature}\``);
  console.log('```ts');
  matcher.examples.forEach((example) => console.log(`${example}`));
  console.log('```');
  console.log(`##### \`${asymmetricMatcher.signature}\``);
  console.log('```ts');
  asymmetricMatcher.examples.forEach((example) => console.log(`${example}`));
  console.log('```');
});
