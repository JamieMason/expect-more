module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/expect-more/src/**/*.ts',
    'packages/expect-more-jest/src/index.ts',
  ],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 94,
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
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-framework-script-file.ts'],
  testMatch: [
    '<rootDir>/packages/expect-more/test/**/*.spec.ts',
    '<rootDir>/packages/expect-more-jest/test/**/*.spec.ts',
  ],
};
