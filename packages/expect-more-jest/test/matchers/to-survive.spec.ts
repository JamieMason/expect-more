import { gen } from '../../src';
import { getIn } from '../../src/lib/get-in';

it('provides toSurvive', () => {
  const shape = { deeply: { dippy: { bout: { the: { way: { you: ['walk'] } } } } } };
  const safe = (data) => getIn(['deeply', 'dippy', 'bout', 'the', 'way', 'you', 0], data);
  const unsafe = ({ deeply: { dippy: { bout: { the: { way: { you: [walk] } } } } } }) => walk;

  expect(safe).toSurvive(gen.nullNodes(shape));
  expect(unsafe).not.toSurvive(gen.nullNodes(shape));
});
