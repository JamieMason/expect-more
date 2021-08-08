import * as fs from 'fs';
import * as path from 'path';
import { camelToKebab, FileMeta } from './index';
import { expectMoreJasminePath } from './paths';

export const generateJasmineIndex = (
  matcherMetadata: FileMeta[],
  memberMatcherMetadata: FileMeta[],
): void => {
  const toJasmineExport = (name) => `export { ${name}Matcher } from './${camelToKebab(name)}';`;
  const indexPath = path.resolve(expectMoreJasminePath, './index.ts');
  const source = []
    .concat(
      matcherMetadata.map(({ jsDoc }) => toJasmineExport(jsDoc.matcherName)),
      memberMatcherMetadata.map(({ jsDoc }) => toJasmineExport(jsDoc.memberMatcherName)),
    )
    .sort()
    .join('\n');
  fs.writeFileSync(indexPath, source, 'utf8');
};
