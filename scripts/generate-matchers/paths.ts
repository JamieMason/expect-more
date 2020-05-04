import { readdirSync } from 'fs';
import { resolve } from 'path';

const getFiles = (dirPath) =>
  readdirSync(dirPath)
    .filter(
      (filename) =>
        filename.endsWith('.ts') &&
        !filename.endsWith('index.ts') &&
        !filename.endsWith('typings.ts'),
    )
    .map((filename) => resolve(dirPath, filename));

const rootDir = resolve(__dirname, '../..');
const expectMorePath = resolve(rootDir, './packages/expect-more/src');
const expectMoreLibPath = resolve(expectMorePath, './lib');
const libFilePaths = getFiles(expectMoreLibPath);

export const expectMoreJasminePath = resolve(rootDir, './packages/expect-more-jasmine/src');
export const expectMoreJestPath = resolve(rootDir, './packages/expect-more-jest/src');
export const rootFilePaths = getFiles(expectMorePath);
export const allFilePaths = [...rootFilePaths, ...libFilePaths];
