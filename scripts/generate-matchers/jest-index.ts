import * as fs from 'fs';
import * as path from 'path';
import { camelToKebab, expectMoreJestPath } from './index';

export const generateJestIndex = (matcherMetadata, memberMatcherMetadata) => {
  const toJestExport = (name) => `export { ${name}Matcher } from './${camelToKebab(name)}';`;
  const indexPath = path.resolve(expectMoreJestPath, './index.ts');
  const source = []
    .concat(
      matcherMetadata.map(({ jsDoc }) => toJestExport(jsDoc.matcherName)),
      memberMatcherMetadata.map(({ jsDoc }) => toJestExport(jsDoc.memberMatcherName)),
    )
    .sort()
    .join('\n');
  fs.writeFileSync(indexPath, source, 'utf8');
};
