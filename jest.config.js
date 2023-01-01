module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/expect-more/src/**/*.ts',
    'packages/expect-more-jest/src/index.ts',
  ],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 28,
      lines: 85,
      statements: 87,
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-framework-script-file.ts'],
  testMatch: [
    '<rootDir>/packages/expect-more/test/**/*.spec.ts',
    '<rootDir>/packages/expect-more-jest/test/**/*.spec.ts',
  ],
  // @FIXME: migrate from abandoned https://github.com/leebyron/testcheck-js
  testPathIgnorePatterns: [
    '<rootDir>/packages/expect-more/test/ends-with.spec.ts',
    '<rootDir>/packages/expect-more/test/has-member.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array-of-booleans.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array-of-numbers.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array-of-objects.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array-of-size.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array-of-strings.spec.ts',
    '<rootDir>/packages/expect-more/test/is-array.spec.ts',
    '<rootDir>/packages/expect-more/test/is-async-function.spec.ts',
    '<rootDir>/packages/expect-more/test/is-boolean.spec.ts',
    '<rootDir>/packages/expect-more/test/is-calculable.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-after.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-before.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-between.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-in-month.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-in-year.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-on-day-of-month.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-on-day-of-week.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-on-or-after.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date-on-or-before.spec.ts',
    '<rootDir>/packages/expect-more/test/is-date.spec.ts',
    '<rootDir>/packages/expect-more/test/is-decimal-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-empty-array.spec.ts',
    '<rootDir>/packages/expect-more/test/is-empty-object.spec.ts',
    '<rootDir>/packages/expect-more/test/is-empty-string.spec.ts',
    '<rootDir>/packages/expect-more/test/is-even-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-false.spec.ts',
    '<rootDir>/packages/expect-more/test/is-function.spec.ts',
    '<rootDir>/packages/expect-more/test/is-generator-function.spec.ts',
    '<rootDir>/packages/expect-more/test/is-greater-than-or-equal-to.spec.ts',
    '<rootDir>/packages/expect-more/test/is-iso8601.spec.ts',
    '<rootDir>/packages/expect-more/test/is-json-string.spec.ts',
    '<rootDir>/packages/expect-more/test/is-less-than-or-equal-to.spec.ts',
    '<rootDir>/packages/expect-more/test/is-negative-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-non-empty-array.spec.ts',
    '<rootDir>/packages/expect-more/test/is-non-empty-object.spec.ts',
    '<rootDir>/packages/expect-more/test/is-non-empty-string.spec.ts',
    '<rootDir>/packages/expect-more/test/is-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-object.spec.ts',
    '<rootDir>/packages/expect-more/test/is-odd-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-positive-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-reg-exp.spec.ts',
    '<rootDir>/packages/expect-more/test/is-string.spec.ts',
    '<rootDir>/packages/expect-more/test/is-true.spec.ts',
    '<rootDir>/packages/expect-more/test/is-undefined.spec.ts',
    '<rootDir>/packages/expect-more/test/is-valid-date.spec.ts',
    '<rootDir>/packages/expect-more/test/is-visible-string.spec.ts',
    '<rootDir>/packages/expect-more/test/is-walkable.spec.ts',
    '<rootDir>/packages/expect-more/test/is-whitespace.spec.ts',
    '<rootDir>/packages/expect-more/test/is-whole-number.spec.ts',
    '<rootDir>/packages/expect-more/test/is-within-range.spec.ts',
    '<rootDir>/packages/expect-more/test/starts-with.spec.ts',
    '<rootDir>/packages/expect-more/test/throws-any-error.spec.ts',
    '<rootDir>/packages/expect-more/test/throws-error-of-type.spec.ts',
  ],
};
