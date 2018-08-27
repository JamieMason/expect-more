import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: null,
  name: 'toHaveNonEmptyArray',
  passReceived: [3, 2, 1]
});
