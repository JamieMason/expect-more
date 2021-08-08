import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const generateDocsForPackage = (name: string): void => {
  const rootDir = path.resolve(__dirname, '..');
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
            const examples = jsDoc.tags
              .filter(({ tagName }) => tagName.text === 'example')
              .map(({ comment }) => comment);
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

  const packagePath = path.resolve(rootDir, `./packages/${name}/src`);
  const files = fs
    .readdirSync(packagePath)
    .filter((filename) => filename.endsWith('.ts') && !filename.endsWith('index.ts'))
    .map((filename) => ({
      filePath: path.resolve(packagePath, filename),
      gitHubUrl: `https://github.com/JamieMason/expect-more/blob/master/packages/${name}/src/${filename}`,
    }));

  files.forEach(visitFile);

  console.log('```js');
  console.log(`describe('${name}', () => {`);
  console.log(`  it('makes your tests and output easier to read', () => {`);
  fullApi.forEach(({ matcher }) => {
    matcher.examples.forEach((example) => {
      console.log(`    ${example}`);
    });
  });
  console.log(`  });`);
  console.log(`});`);
  console.log('```');
};

generateDocsForPackage('expect-more-jest');

generateDocsForPackage('expect-more-jasmine');
