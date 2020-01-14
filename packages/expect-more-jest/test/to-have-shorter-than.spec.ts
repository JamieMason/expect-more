import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: 'abc',
  failReceived: 'abcdef',
  name: 'toHaveShorterThan',
  passOther: 'abcdef',
  passReceived: 'abc',
});
