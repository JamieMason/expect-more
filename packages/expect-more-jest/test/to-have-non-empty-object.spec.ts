import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: null,
  name: 'toHaveNonEmptyObject',
  passReceived: { a: 1 }
});
