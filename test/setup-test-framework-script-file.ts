import * as testcheck from 'jasmine-check';
import { asymmetric, matchers } from '../packages/expect-more-jest/src';

beforeEach(() => {
  Object.assign(expect, asymmetric);
  expect.extend(matchers);
});

testcheck.install();
