import reducer from './chirps';
import { fetchChirps } from '../actions/chirps';

jest.mock('../services/mockChirps.js');

describe('reducers', () => {
  it('can handle a fetch to update chirps', () => {
    const state = {
      chirps: [],
      loading: false
    };
    const fetchedChirps = fetchChirps();
    const updatedState = reducer(state, fetchedChirps);
    console.log(updatedState);

    expect(updatedState).toEqual();
  });
});
