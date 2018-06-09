import { getIn } from '../../src/lib/get-in';

it('provides toHandleNullNodes', () => {
  const shape = { deeply: { dippy: { bout: { the: { way: { you: ['walk'] } } } } } };
  const safe = (data) => getIn(['deeply', 'dippy', 'bout', 'the', 'way', 'you', 0], data);
  const unsafe = ({
    deeply: {
      dippy: {
        bout: {
          the: {
            way: {
              you: [walk]
            }
          }
        }
      }
    }
  }) => walk;

  expect(unsafe).not.toHandleNullNodes(shape);
  expect(safe).toHandleNullNodes(shape);
});
