import { CREATE_CHIRP } from '../actions/createChirp';

const initialState = {
  text: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_CHIRP:
      return {
        text: payload
      };
    default:
      return state;
  }
}
