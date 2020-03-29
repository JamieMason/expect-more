import * as fs from 'fs';
import * as path from 'path';
import { camelToKebab, FileMeta } from './index';
import { expectMoreJestPath } from './paths';

export const generateJestIndex = (
  matcherMetadata: FileMeta[],
  memberMatcherMetadata: FileMeta[],
) => {
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
