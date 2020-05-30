/* tslint:disable */
import { gen } from 'testcheck';

const midnight = () => new Date('2013-01-01T00:00:00.000Z');
const oneAm = () => new Date('2013-01-01T01:00:00.000Z');

export const argsObject = gen.oneOf([
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (function (..._) {
    // eslint-disable-next-line prefer-rest-params
    return arguments;
  })(1, 2, 3),
]);

export const iso8601s = gen.oneOf([
  '2013-07-08T07:29:15.863Z',
  '2013-07-08T07:29:15.863',
  '2013-07-08T07:29:15',
  '2013-07-08T07:29',
  '2013-07-08',
]);

export const dateAfter = gen.oneOf([[midnight(), oneAm()]]);
export const dateBefore = gen.oneOf([[oneAm(), midnight()]]);
export const emptyArrays = gen.array(gen.primitive, { size: 0 });
export const nonEmptyArrays = gen.array(gen.primitive, { minSize: 1, maxSize: 3 });
export const arrays = gen.oneOf([nonEmptyArrays, emptyArrays]);

export const emptyObjects = gen.object(gen.primitive, { size: 0 });
export const nonEmptyObjects = gen.object(gen.primitive, { minSize: 1, maxSize: 3 });
export const objects = gen.oneOf([nonEmptyObjects, emptyObjects]);

export const emptyStrings = gen.oneOf(['', new String('')]);
export const nonEmptyStrings = gen.oneOf([
  gen.string.notEmpty(),
  gen.string.then((val) => new String(val)).notEmpty(),
]);

export const visibleStrings = gen.oneOf([
  gen.string.notEmpty().then((str) =>
    str
      .split('')
      .concat('a')
      .sort(() => 0.5 - Math.random())
      .join(''),
  ),
]);
export const whitespaceStrings = gen.oneOf([' ', new String(' '), ' ', new String(' ')]);
export const strings = gen.oneOf([nonEmptyStrings, emptyStrings, whitespaceStrings]);

export const booleans = gen.oneOf([gen.boolean, gen.boolean.then((val) => new Boolean(val))]);
export const dates = gen.oneOf([
  new Date(),
  new Date('November 18, 1985 08:22:00'),
  new Date('1985-11-18T08:22:00'),
  new Date(1985, 11, 18, 8, 22, 0),
]);
export const falses = gen.oneOf([false, new Boolean(false)]);

// ↓↓ eval is workaround for typescript converting async to non-async ↓↓
export const asyncFunctions = gen.oneOf([
  eval('(async (_) => _)'),
  eval('(async function name() {})'),
  eval('(async function() {})'),
]);

// ↓↓ eval is workaround for typescript converting generator ↓↓
export const generatorFunctions = gen.oneOf([
  eval('(function*() {yield 2;})'),
  eval('(function* name() {yield 2;})'),
]);
export const syncFunctions = gen.oneOf([
  (_) => _,
  function name() {
    return undefined;
  },
  function () {
    return undefined;
  },
]);
export const functions = gen.oneOf([syncFunctions, asyncFunctions, generatorFunctions]);

export const errorConstructors = gen.oneOf([
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
]);
export const jsonStrings = gen.oneOf(['{}', '[]', '[1]']);
export const regExs = gen.oneOf([/foo/, new RegExp('foo')]);
export const trues = gen.oneOf([true, new Boolean(true)]);
export const undefineds = gen.oneOf([undefined]);
export const walkables = gen
  .oneOf([gen.array, gen.object, gen.primitive])
  .suchThat((value) => value !== null && value !== undefined);

export const calculables = gen.oneOf(['1', '', null]);
export const numbers = gen.oneOf([
  gen.posNumber,
  gen.negNumber,
  gen.posNumber.then((val) => new Number(val)),
  gen.negNumber.then((val) => new Number(val)),
]);
export const evenNumbers = gen.oneOf([2, 4, 6, 8, 10]);
export const oddNumbers = gen.oneOf([1, 3, 5, 7, 9]);
export const wholeNumbers = gen.int;
export const decimalNumbers = gen.number.suchThat(
  (val) => !isNaN(val) && String(val).indexOf('.') !== -1,
);
export const numbersWithinRange = gen.numberWithin(8, 15);

export const arrayOfFiveItems = gen.array(gen.primitive, { size: 5 });
export const arrayOfBooleans = gen.array(booleans, { minSize: 1, maxSize: 3 });
export const arrayOfNumbers = gen.array(numbers, { minSize: 1, maxSize: 3 });
export const arrayOfObjects = gen.array(objects, { minSize: 1, maxSize: 3 });
export const arrayOfStrings = gen.array(strings, { minSize: 1, maxSize: 3 });

export const endingWith = gen.oneOf([['mie', 'jamie']]);

export const startingWith = gen.oneOf([['jam', 'jamie']]);
