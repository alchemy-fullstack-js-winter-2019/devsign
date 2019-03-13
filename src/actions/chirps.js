import { createAction } from 'promise-middleware-redux';
import { getChirps, getUser } from '../services/mockChirps';

export const [
  fetchChirps,
  FETCH_CHIRPS,
  FETCH_CHIRPS_PENDING
] = createAction('FETCH_CHIRPS', getChirps);

export const [
  fetchUser,
  FETCH_USER,
  FETCH_USER_PENDING
] = createAction('FETCH_USER', getUser);
