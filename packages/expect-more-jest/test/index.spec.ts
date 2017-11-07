import matchers, { asymmetric } from '../src';

beforeEach(() => {
  Object.assign(expect, asymmetric);
  expect.extend(matchers);
});

it('provides toBeAfter', () => {
  expect(new Date(200)).toBeAfter(new Date(100));
  expect(() => { expect(new Date(100)).toBeAfter(new Date(200)); }).toThrow();
  expect(() => { expect(new Date(new Date(200))).not.toBeAfter(new Date(100)); }).toThrow();
});

it('provides toBeArray', () => {
  expect([]).toBeArray();
  expect(() => { expect(null).toBeArray(); }).toThrow();
  expect(() => { expect([]).not.toBeArray(); }).toThrow();
});

it('provides toBeArrayOfBooleans', () => {
  expect([true]).toBeArrayOfBooleans();
  expect(() => { expect([null]).toBeArrayOfBooleans(); }).toThrow();
  expect(() => { expect([true]).not.toBeArrayOfBooleans(); }).toThrow();
});

it('provides toBeArrayOfNumbers', () => {
  expect([1]).toBeArrayOfNumbers();
  expect(() => { expect([null]).toBeArrayOfNumbers(); }).toThrow();
  expect(() => { expect([1]).not.toBeArrayOfNumbers(); }).toThrow();
});

it('provides toBeArrayOfObjects', () => {
  expect([{}]).toBeArrayOfObjects();
  expect(() => { expect([null]).toBeArrayOfObjects(); }).toThrow();
  expect(() => { expect([{}]).not.toBeArrayOfObjects(); }).toThrow();
});

it('provides toBeArrayOfSize', () => {
  expect([1]).toBeArrayOfSize(1);
  expect(() => { expect([1]).toBeArrayOfSize(2); }).toThrow();
  expect(() => { expect([1]).not.toBeArrayOfSize(1); }).toThrow();
});

it('provides toBeArrayOfStrings', () => {
  expect(['']).toBeArrayOfStrings();
  expect(() => { expect([null]).toBeArrayOfStrings(); }).toThrow();
  expect(() => { expect(['']).not.toBeArrayOfStrings(); }).toThrow();
});

it('provides toBeBefore', () => {
  expect(new Date(100)).toBeBefore(new Date(200));
  expect(() => { expect(new Date(200)).toBeBefore(new Date(100)); }).toThrow();
  expect(() => { expect(new Date(new Date(100))).not.toBeBefore(new Date(200)); }).toThrow();
});

it('provides toBeBoolean', () => {
  expect(true).toBeBoolean();
  expect(() => { expect(null).toBeBoolean(); }).toThrow();
  expect(() => { expect(true).not.toBeBoolean(); }).toThrow();
});

it('provides toBeCalculable', () => {
  expect('1').toBeCalculable();
  expect(() => { expect({}).toBeCalculable(); }).toThrow();
  expect(() => { expect('1').not.toBeCalculable(); }).toThrow();
});

it('provides toBeDate', () => {
  expect(new Date()).toBeDate();
  expect(() => { expect(null).toBeDate(); }).toThrow();
  expect(() => { expect(new Date()).not.toBeDate(); }).toThrow();
});

it('provides toBeDivisibleBy', () => {
  expect(4).toBeDivisibleBy(2);
  expect(() => { expect(3).toBeDivisibleBy(2); }).toThrow();
  expect(() => { expect(4).not.toBeDivisibleBy(2); }).toThrow();
});

it('provides toBeEmptyArray', () => {
  expect([]).toBeEmptyArray();
  expect(() => { expect(null).toBeEmptyArray(); }).toThrow();
  expect(() => { expect([]).not.toBeEmptyArray(); }).toThrow();
});

it('provides toBeEmptyObject', () => {
  expect({}).toBeEmptyObject();
  expect(() => { expect(null).toBeEmptyObject(); }).toThrow();
  expect(() => { expect({}).not.toBeEmptyObject(); }).toThrow();
});

it('provides toBeEmptyString', () => {
  expect('').toBeEmptyString();
  expect(() => { expect(null).toBeEmptyString(); }).toThrow();
  expect(() => { expect('').not.toBeEmptyString(); }).toThrow();
});

it('provides toBeEvenNumber', () => {
  expect(2).toBeEvenNumber();
  expect(() => { expect(null).toBeEvenNumber(); }).toThrow();
  expect(() => { expect(2).not.toBeEvenNumber(); }).toThrow();
});

it('provides toBeFalse', () => {
  expect(false).toBeFalse();
  expect(() => { expect(null).toBeFalse(); }).toThrow();
  expect(() => { expect(false).not.toBeFalse(); }).toThrow();
});

it('provides toBeFunction', () => {
  expect(() => {}).toBeFunction();
  expect(() => { expect(null).toBeFunction(); }).toThrow();
  expect(() => { expect(() => {}).not.toBeFunction(); }).toThrow();
});

it('provides toBeIso8601', () => {
  expect('2017-10-31T15:17:11').toBeIso8601();
  expect(() => { expect(null).toBeIso8601(); }).toThrow();
  expect(() => { expect('2017-10-31T15:17:11').not.toBeIso8601(); }).toThrow();
});

it('provides toBeJsonString', () => {
  expect('{}').toBeJsonString();
  expect(() => { expect(null).toBeJsonString(); }).toThrow();
  expect(() => { expect('{}').not.toBeJsonString(); }).toThrow();
});

it('provides toBeLongerThan', () => {
  expect('abc').toBeLongerThan('de');
  expect(() => { expect('abc').toBeLongerThan('defghi'); }).toThrow();
  expect(() => { expect('abc').not.toBeLongerThan('de'); }).toThrow();
});

it('provides toBeNear', () => {
  expect(1.25).toBeNear(0.30, 1);
  expect(() => { expect(1.25).toBeNear(0.10, 1); }).toThrow();
  expect(() => { expect(1.25).not.toBeNear(0.30, 1); }).toThrow();
});

it('provides toBeNonEmptyArray', () => {
  expect([1, 2]).toBeNonEmptyArray();
  expect(() => { expect([]).toBeNonEmptyArray(); }).toThrow();
  expect(() => { expect([1, 2]).not.toBeNonEmptyArray(); }).toThrow();
});

it('provides toBeNonEmptyObject', () => {
  expect({ a: 1 }).toBeNonEmptyObject();
  expect(() => { expect({}).toBeNonEmptyObject(); }).toThrow();
  expect(() => { expect({ a: 1 }).not.toBeNonEmptyObject(); }).toThrow();
});

it('provides toBeNonEmptyString', () => {
  expect('a').toBeNonEmptyString();
  expect(() => { expect('').toBeNonEmptyString(); }).toThrow();
  expect(() => { expect('a').not.toBeNonEmptyString(); }).toThrow();
});

it('provides toBeNull', () => {
  expect(null).toBeNull();
  expect(() => { expect(1).toBeNull(); }).toThrow();
  expect(() => { expect(null).not.toBeNull(); }).toThrow();
});

it('provides toBeNumber', () => {
  expect(1).toBeNumber();
  expect(() => { expect(null).toBeNumber(); }).toThrow();
  expect(() => { expect(1).not.toBeNumber(); }).toThrow();
});

it('provides toBeObject', () => {
  expect({}).toBeObject();
  expect(() => { expect(null).toBeObject(); }).toThrow();
  expect(() => { expect({}).not.toBeObject(); }).toThrow();
});

it('provides toBeOddNumber', () => {
  expect(3).toBeOddNumber();
  expect(() => { expect(null).toBeOddNumber(); }).toThrow();
  expect(() => { expect(3).not.toBeOddNumber(); }).toThrow();
});

it('provides toBeRegExp', () => {
  expect(/match/).toBeRegExp();
  expect(() => { expect(null).toBeRegExp(); }).toThrow();
  expect(() => { expect(/match/).not.toBeRegExp(); }).toThrow();
});

it('provides toBeSameLengthAs', () => {
  expect('abc').toBeSameLengthAs('abc');
  expect(() => { expect('abc').toBeSameLengthAs('defghi'); }).toThrow();
  expect(() => { expect('abc').not.toBeSameLengthAs('abc'); }).toThrow();
});

it('provides toBeShorterThan', () => {
  expect('ab').toBeShorterThan('abc');
  expect(() => { expect('abc').toBeShorterThan('ab'); }).toThrow();
  expect(() => { expect('ab').not.toBeShorterThan('abc'); }).toThrow();
});

it('provides toBeString', () => {
  expect('a').toBeString();
  expect(() => { expect(null).toBeString(); }).toThrow();
  expect(() => { expect('a').not.toBeString(); }).toThrow();
});

it('provides toBeTrue', () => {
  expect(true).toBeTrue();
  expect(() => { expect(null).toBeTrue(); }).toThrow();
  expect(() => { expect(true).not.toBeTrue(); }).toThrow();
});

it('provides toBeUndefined', () => {
  expect(undefined).toBeUndefined();
  expect(() => { expect(null).toBeUndefined(); }).toThrow();
  expect(() => { expect(undefined).not.toBeUndefined(); }).toThrow();
});

it('provides toBeValidDate', () => {
  expect(new Date(1)).toBeValidDate();
  expect(() => { expect(new Date('never gonna')).toBeValidDate(); }).toThrow();
  expect(() => { expect(new Date(1)).not.toBeValidDate(); }).toThrow();
});

it('provides toBeWalkable', () => {
  expect(true).toBeWalkable();
  expect(() => { expect(null).toBeWalkable(); }).toThrow();
  expect(() => { expect(true).not.toBeWalkable(); }).toThrow();
});

it('provides toBeWhitespace', () => {
  expect(' ').toBeWhitespace();
  expect(() => { expect('a').toBeWhitespace(); }).toThrow();
  expect(() => { expect(' ').not.toBeWhitespace(); }).toThrow();
});

it('provides toBeWholeNumber', () => {
  expect(1).toBeWholeNumber();
  expect(() => { expect(1.25).toBeWholeNumber(); }).toThrow();
  expect(() => { expect(1).not.toBeWholeNumber(); }).toThrow();
});

it('provides toBeWithinRange', () => {
  expect(2).toBeWithinRange(1, 3);
  expect(() => { expect(5).toBeWithinRange(1, 3); }).toThrow();
  expect(() => { expect(2).not.toBeWithinRange(1, 3); }).toThrow();
});

it('provides toEndWith', () => {
  expect('jamie').toEndWith('mie');
  expect(() => { expect('wut?').toEndWith('nah!'); }).toThrow();
  expect(() => { expect('jamie').not.toEndWith('mie'); }).toThrow();
});

it('provides toStartWith', () => {
  expect('jamie').toStartWith('jam');
  expect(() => { expect('wut?').toStartWith('nah!'); }).toThrow();
  expect(() => { expect('jamie').not.toStartWith('jamie'); }).toThrow();
});

it('provides expect.after', () => {
  expect(new Date(200)).toEqual(expect.after(new Date(100)));
});

it('provides expect.arrayOfBooleans', () => {
  expect([true]).toEqual(expect.arrayOfBooleans());
});

it('provides expect.arrayOfNumbers', () => {
  expect([1]).toEqual(expect.arrayOfNumbers());
});

it('provides expect.arrayOfObjects', () => {
  expect([{}]).toEqual(expect.arrayOfObjects());
});

it('provides expect.arrayOfSize', () => {
  expect([1]).toEqual(expect.arrayOfSize(1));
});

it('provides expect.arrayOfStrings', () => {
  expect(['']).toEqual(expect.arrayOfStrings());
});

it('provides expect.before', () => {
  expect(new Date(100)).toEqual(expect.before(new Date(200)));
});

it('provides expect.calculable', () => {
  expect('1').toEqual(expect.calculable());
});

it('provides expect.divisibleBy', () => {
  expect(4).toEqual(expect.divisibleBy(2));
});

it('provides expect.endingWith', () => {
  expect('jamie').toEqual(expect.endingWith('mie'));
});

it('provides expect.evenNumber', () => {
  expect(2).toEqual(expect.evenNumber());
});

it('provides expect.iso8601', () => {
  expect('2017-10-31T15:17:11').toEqual(expect.iso8601());
});

it('provides expect.jsonString', () => {
  expect('{}').toEqual(expect.jsonString());
});

it('provides expect.longerThan', () => {
  expect('abc').toEqual(expect.longerThan('a'));
});

it('provides expect.near', () => {
  expect(1.25).toEqual(expect.near(1, 0.3));
});

it('provides expect.nonEmptyArray', () => {
  expect([1, 2]).toEqual(expect.nonEmptyArray());
});

it('provides expect.nonEmptyObject', () => {
  expect({ a: 1 }).toEqual(expect.nonEmptyObject());
});

it('provides expect.nonEmptyString', () => {
  expect('a').toEqual(expect.nonEmptyString());
});

it('provides expect.oddNumber', () => {
  expect(3).toEqual(expect.oddNumber());
});

it('provides expect.sameLengthAs', () => {
  expect('abc').toEqual(expect.sameLengthAs('def'));
});

it('provides expect.shorterThan', () => {
  expect('ab').toEqual(expect.shorterThan('abc'));
});

it('provides expect.startingWith', () => {
  expect('jamie').toEqual(expect.startingWith('jam'));
});

it('provides expect.validDate', () => {
  expect(new Date(1)).toEqual(expect.validDate());
});

it('provides expect.walkable', () => {
  expect(true).toEqual(expect.walkable());
});

it('provides expect.whitespace', () => {
  expect(' ').toEqual(expect.whitespace());
});

it('provides expect.wholeNumber', () => {
  expect(1).toEqual(expect.wholeNumber());
});

it('provides expect.withinRange', () => {
  expect(2).toEqual(expect.withinRange(1, 3));
});
