import { gen } from 'testcheck';
import pos = require('./positive');

const midnight = () => new Date('2013-01-01T00:00:00.000Z');
const oneAm = () => new Date('2013-01-01T01:00:00.000Z');

const allBut = (...gens) =>
  gen.oneOf(
    Object.keys(pos)
      .map((key) => pos[key])
      .filter((val) => gens.indexOf(val) === -1),
  );

export const notEndingWith = gen.oneOf([
  ['mie', 'jamie '],
  ['mie', 'jamiE'],
  ['', ''],
  ['', undefined],
  ['undefined', undefined],
  [undefined, 'undefined'],
]);

export const notStartingWith = gen.oneOf([
  ['jam', ' jamie'],
  ['jam', 'JAmie'],
  ['', ''],
  ['', undefined],
  ['undefined', undefined],
  [undefined, 'undefined'],
]);

export const notArrayOfBooleans = allBut(
  pos.arrayOfBooleans,
  pos.booleans,
  pos.arrayOfFiveItems,
  pos.nonEmptyArrays,
  pos.arrays,
);
export const notArrayOfFiveItems = allBut(pos.arrayOfFiveItems, pos.arrays);
export const notArrayOfNumbers = allBut(
  pos.arrayOfNumbers,
  pos.arrayOfFiveItems,
  pos.nonEmptyArrays,
  pos.arrays,
);
export const notArrayOfObjects = allBut(pos.arrayOfObjects, pos.arrayOfFiveItems, pos.arrays);
export const notArrayOfStrings = allBut(
  pos.arrayOfFiveItems,
  pos.arrayOfStrings,
  pos.endingWith,
  pos.nonEmptyArrays,
  pos.startingWith,
  pos.arrays,
);
export const notArrays = allBut(
  pos.endingWith,
  pos.startingWith,
  pos.dateAfter,
  pos.dateBefore,
  pos.arrayOfBooleans,
  pos.arrayOfFiveItems,
  pos.arrayOfNumbers,
  pos.arrayOfObjects,
  pos.arrayOfStrings,
  pos.arrays,
  pos.emptyArrays,
  pos.nonEmptyArrays,
);
export const notBooleans = gen.NaN; // allBut(pos.trues, pos.falses, pos.booleans, pos.walkables, pos.argsObject);
export const notCalculables = gen.oneOf([{}, NaN]);
export const notRegExs = allBut(pos.regExs);
export const notDates = allBut(pos.dates);
export const notDecimalNumbers = allBut(
  pos.decimalNumbers,
  pos.numbers,
  pos.numbersWithinRange,
  pos.walkables,
);
export const notValidDates = gen.oneOf([new Date(''), new Date('invalid')]);
export const notEmptyArrays = allBut(pos.emptyArrays, pos.arrays);
export const notEmptyObjects = allBut(pos.emptyObjects, pos.objects);
export const notEmptyStrings = allBut(
  pos.emptyStrings,
  pos.calculables,
  pos.walkables,
  pos.strings,
);
export const notEvenNumbers = allBut(
  pos.decimalNumbers,
  pos.evenNumbers,
  pos.numbers,
  pos.numbersWithinRange,
  pos.walkables,
  pos.wholeNumbers,
);
export const notFalses = gen.NaN;
export const notUndefineds = allBut(pos.undefineds);
export const notGeneratorFunctions = allBut(pos.generatorFunctions, pos.functions);
export const notAsyncFunctions = allBut(pos.asyncFunctions, pos.functions);
export const notSyncFunctions = allBut(pos.syncFunctions);
export const notFunctions = allBut(
  pos.functions,
  pos.asyncFunctions,
  pos.generatorFunctions,
  pos.syncFunctions,
  pos.errorConstructors,
  pos.walkables,
);
export const notJsonStrings = gen.oneOf(['[1,]', '<>', null, '', undefined]);
export const notNonEmptyArrays = gen.NaN;
export const notNonEmptyObjects = allBut(pos.nonEmptyObjects, pos.objects, pos.walkables);
export const notNonEmptyStrings = gen.oneOf(['', { length: 1 }, ['marloes']]);
export const notNumbers = allBut(
  pos.decimalNumbers,
  pos.evenNumbers,
  pos.numbers,
  pos.numbersWithinRange,
  pos.oddNumbers,
  pos.walkables,
  pos.wholeNumbers,
);
export const notWhitespaceStrings = allBut(
  pos.calculables,
  pos.emptyStrings,
  pos.nonEmptyStrings,
  pos.strings,
  pos.walkables,
  pos.whitespaceStrings,
);
export const notWalkables = gen.oneOf([gen.null, gen.undefined]);
export const notWholeNumbers = gen.NaN;
export const notStrings = gen.NaN;
export const notNumbersWithinRange = gen.numberWithin(-8, 7);
export const notObjects = gen.NaN;
export const notOddNumbers = gen.oneOf([2, 4, 6, null, 'arjen']);
export const notTrues = gen.NaN;
export const notDateAfter = gen.oneOf([
  [oneAm(), midnight()],
  [oneAm(), oneAm()],
]);
export const notDateBefore = gen.oneOf([
  [midnight(), oneAm()],
  [oneAm(), oneAm()],
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
  '',
]);
