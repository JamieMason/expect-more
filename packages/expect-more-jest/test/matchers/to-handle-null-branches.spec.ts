import { getIn } from '../../src/lib/get-in';

it('provides toHandleNullBranches', () => {
  const shape = { deeply: { dippy: { bout: { the: { way: { you: ['walk'] } } } } } };
  const safe = (data) => getIn(['deeply', 'dippy', 'bout', 'the', 'way', 'you', 0], data);
  const unsafe = ({ deeply: { dippy: { bout: { the: { way: { you: [walk] } } } } } }) => walk;

  expect(safe).toHandleNullBranches(shape);
  expect(unsafe).not.toHandleNullBranches(shape);
});
