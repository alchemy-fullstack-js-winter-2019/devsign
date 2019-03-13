/* eslint-disable no-unused-vars */
import { FETCH_CHIRPS } from '../actions/chirps';

const initialState = {
  chirps: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_CHIRPS:
      return {
        ...state,
        chirps: payload
      };
    default:
      return state;
  }
}
