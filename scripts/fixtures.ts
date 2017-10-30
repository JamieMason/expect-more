import { gen, Generator } from 'testcheck';

export const emptyArrays = gen.array(gen.primitive, { size: 0 });
export const nonEmptyArrays = gen.array(gen.primitive, { minSize: 1, maxSize: 3 });
export const arrays = gen.oneOf([nonEmptyArrays, emptyArrays]);

export const emptyObjects = gen.object(gen.primitive, { size: 0 });
export const nonEmptyObjects = gen.object(gen.primitive, { minSize: 1, maxSize: 3 });
export const objects = gen.oneOf([nonEmptyObjects, emptyObjects]);

export const emptyStrings = gen.oneOf(['', new String('')]);
export const nonEmptyStrings = gen.oneOf([gen.string.notEmpty(), gen.string.then((val) => new String(val)).notEmpty()]);
export const whitespaceStrings = gen.oneOf([' ', new String(' '), ' ', new String(' ')]);
export const strings = gen.oneOf([nonEmptyStrings, emptyStrings, whitespaceStrings]);

export const booleans = gen.oneOf([gen.boolean, gen.boolean.then((val) => new Boolean(val))]);
export const calculables = gen.oneOf(['1', '', null]);
export const dates = gen.oneOf([
  new Date(),
  new Date('November 18, 1985 08:22:00'),
  new Date('1985-11-18T08:22:00'),
  new Date(1985, 11, 18, 8, 22, 0)
]);
export const falses = gen.oneOf([false, new Boolean(false)]);
export const functions = gen.oneOf([() => {}]);
export const errorConstructors = gen.oneOf([
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
]);
export const jsonStrings = gen.oneOf(['{}', '[]', '[1]']);
export const regExs = gen.oneOf([/foo/, new RegExp('foo')]);
export const trues = gen.oneOf([true, new Boolean(true)]);
export const undefineds = gen.oneOf([undefined]);
export const walkables = gen
  .oneOf([gen.array, gen.object, gen.primitive])
  .suchThat((value) => value !== null && value !== undefined);

export const numbers = gen.oneOf([
  gen.posNumber,
  gen.negNumber,
  gen.posNumber.then((val) => new Number(val)),
  gen.negNumber.then((val) => new Number(val))
]);
export const evenNumbers = gen.oneOf([2, 4, 6, 8, 10]);
export const oddNumbers = gen.oneOf([1, 3, 5, 7, 9]);
export const wholeNumbers = gen.int;
export const numbersWithinRange = gen.numberWithin(8, 15);

export const arrayOfFiveItems = gen.array(gen.primitive, { size: 5 });
export const arrayOfBooleans = gen.array(booleans, { minSize: 1, maxSize: 3 });
export const arrayOfNumbers = gen.array(numbers, { minSize: 1, maxSize: 3 });
export const arrayOfObjects = gen.array(objects, { minSize: 1, maxSize: 3 });
export const arrayOfStrings = gen.array(strings, { minSize: 1, maxSize: 3 });

export const endingWith = gen.oneOf([['mie', 'jamie']]);
export const notEndingWith = gen.oneOf([
  ['mie', 'jamie '],
  ['mie', 'jamiE'],
  ['', ''],
  ['', undefined],
  ['undefined', undefined],
  [undefined, 'undefined']
]);

export const startingWith = gen.oneOf([['jam', 'jamie']]);
export const notStartingWith = gen.oneOf([
  ['jam', ' jamie'],
  ['jam', 'JAmie'],
  ['', ''],
  ['', undefined],
  ['undefined', undefined],
  [undefined, 'undefined']
]);

export const notArrayOfBooleans = gen.NaN;
export const notArrayOfFiveItems = gen.NaN;
export const notArrayOfNumbers = gen.NaN;
export const notArrayOfObjects = gen.NaN;
export const notArrayOfStrings = gen.NaN;
export const notArrays = gen.NaN;
export const notBooleans = gen.NaN;
export const notCalculables = gen.oneOf([{}, NaN]);
export const notRegExs = gen.oneOf([
  () => {
    /* noop */
  },
  RegExp,
  Function,
  gen.primitive
]);
export const notDates = gen.NaN;
export const notValidDates = gen.oneOf([new Date(''), new Date('invalid')]);
export const notEmptyArrays = gen.NaN;
export const notEmptyObjects = gen.NaN;
export const notEmptyStrings = gen.NaN;
export const notEvenNumbers = gen.NaN;
export const notFalses = gen.NaN;
export const notUndefineds = gen.NaN;
export const notFunctions = gen.NaN;
export const notJsonStrings = gen.oneOf(['[1,]', '<>', null, '', undefined]);
export const notNonEmptyArrays = gen.oneOf([emptyArrays]);
export const notNonEmptyObjects = gen.oneOf([emptyObjects]);
export const notNonEmptyStrings = gen.oneOf(['', { length: 1 }, ['marloes']]);
export const notNumbers = gen.NaN;
export const notWhitespaceStrings = gen.NaN;
export const notWalkables = gen.oneOf([gen.null, gen.undefined]);
export const notWholeNumbers = gen.NaN;
export const notStrings = gen.NaN;
export const notNumbersWithinRange = gen.numberWithin(-8, 7);
export const notObjects = gen.NaN;
export const notOddNumbers = gen.oneOf([2, 4, 6, null, 'arjen']);
export const notTrues = gen.NaN;

export const midnight = () => new Date('2013-01-01T00:00:00.000Z');
export const oneAm = () => new Date('2013-01-01T01:00:00.000Z');

export const dateAfter = gen.oneOf([[midnight(), oneAm()]]);
export const notDateAfter = gen.oneOf([[oneAm(), midnight()], [oneAm(), oneAm()]]);
export const dateBefore = gen.oneOf([[oneAm(), midnight()]]);
export const notDateBefore = gen.oneOf([[midnight(), oneAm()], [oneAm(), oneAm()]]);

export function argsObject(..._) {
  return arguments;
}

export const iso8601s = gen.oneOf([
  '2013-07-08T07:29:15.863Z',
  '2013-07-08T07:29:15.863',
  '2013-07-08T07:29:15',
  '2013-07-08T07:29',
  '2013-07-08'
]);

export const notIso8601s = gen.oneOf([
  '2013-99-12T00:00:00.000Z',
  '2013-12-99T00:00:00.000Z',
  '2013-01-01T99:00:00.000Z',
  '2013-01-01T99:99:00.000Z',
  '2013-01-01T00:00:99.000Z',
  '2013-07-08T07:29:15.',
  '2013-07-08T07:29:',
  '2013-07-08T07:2',
  '2013-07-08T07:',
  '2013-07-08T07',
  '2013-07-08T',
  '2013-07-0',
  '2013-07-',
  '2013-07',
  '2013-0',
  '2013-',
  '2013',
  '201',
  '20',
  '2',
  ''
]);
