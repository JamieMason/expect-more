module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['packages/*/src/index.ts'],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-framework-script-file.ts'],
  testMatch: ['<rootDir>/packages/*/test/**/*.spec.(ts|tsx|js)'],
};
