import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: 'abcdef',
  failReceived: 'abc',
  name: 'toHaveLongerThan',
  passOther: 'abc',
  passReceived: 'abcdef'
});
