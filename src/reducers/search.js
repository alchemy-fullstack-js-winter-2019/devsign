import { UPDATE_SEARCHTERM } from '../actions/search';

const initialState = {
  searchTerm: 'search chirps'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_SEARCHTERM:
      return {
        ...state,
        searchTerm: payload
      };
    default:
      return state;
  }
}
