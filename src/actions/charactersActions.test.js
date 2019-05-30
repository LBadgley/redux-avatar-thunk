import {
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_ERROR
} from './charactersActions';

// jest.mock('../services/LastAirbenderApi.js', () => ({
//   getCharacters: () => Promise.resolve([])
// }));

// describe('characters actions', () => {
//   it('dispatches a loading action and fetch characters action', () => {
//     const thunk = fetchCharacters();
//     const dispatch = jest.fn();

//     return thunk(dispatch)
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledWith({
//           type: FETCH_CHARACTERS_LOADING
//         });

//         expect(dispatch).toHaveBeenCalledWith({
//           type: FETCH_CHARACTERS,
//           payload: []
//         });
//       });
//   });
// });

jest.mock('../services/LastAirbenderApi.js');

describe('character actions test', () => {
  it('fetches the characters then dispatches a action', () => {
    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      fulfilledType: FETCH_CHARACTERS_FULFILLED,
      pendingType: FETCH_CHARACTERS_LOADING,
      rejectedType: FETCH_CHARACTERS_ERROR,
      payload: expect.any(Promise)
    });
  });
});
