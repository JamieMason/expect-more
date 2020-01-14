import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: 'abcdef',
  failReceived: 'abc',
  name: 'toHaveSameLengthAs',
  passOther: 'abc',
  passReceived: 'abc',
});
