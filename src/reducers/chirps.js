import { FETCH_CHIRPS, FETCH_CHIRPS_PENDING } from '../actions/chirps';

const initialState = {
  chirps: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHIRPS:
      return { ...state, chirps: action.payload, loading: false };
    case FETCH_CHIRPS_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}