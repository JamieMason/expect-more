import * as api from '../src';
import { notWhitespaceStrings, whitespaceStrings } from './lib/fixtures';

check.it('accepts if value is a non-empty string containing only whitespace', whitespaceStrings, (value) => {
  expect(api.isWhitespace(value)).toEqual(true);
});

check.it('rejects otherwise', notWhitespaceStrings, (value) => {
  expect(api.isWhitespace(value)).toEqual(false);
});
