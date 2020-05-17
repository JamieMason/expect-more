import * as fs from 'fs';
import * as path from 'path';
import { camelToKebab, FileMeta } from './index';
import { expectMoreJestPath } from './paths';

export const generateJestIndex = () => {
  const toJestExport = (name) => `export { ${name}Matcher } from './${camelToKebab(name)}';`;
  const kebabToCamel = (kebab) => kebab.replace(/-[a-z]/g, (a) => a[1].toUpperCase());
  const indexPath = path.resolve(expectMoreJestPath, './index.ts');
  const source = fs
    .readdirSync(expectMoreJestPath)
    .filter((location) => location.endsWith('.ts') && location !== 'index.ts')
    .map((filename) => toJestExport(kebabToCamel(filename.replace('.ts', ''))))
    .sort()
    .join('\n');
  fs.writeFileSync(indexPath, source, 'utf8');
};
