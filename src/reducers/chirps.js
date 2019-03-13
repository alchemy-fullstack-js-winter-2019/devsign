/* eslint-disable no-unused-vars */
import { FETCH_CHIRPS, FETCH_USER } from '../actions/chirps';

const initialState = {
  chirps: [],
  user: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_CHIRPS:
      return {
        ...state,
        chirps: payload
      };
    case FETCH_USER:
      return {
        ...state,
        user: {
          ...payload
        }
      };
    default:
      return state;
  }
}
