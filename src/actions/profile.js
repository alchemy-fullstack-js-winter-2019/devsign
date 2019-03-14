import { createAction } from 'promise-middleware-redux';
import { getUserChirps } from '../services/mockChirps';

export const [
  fetchUserChirps,
  FETCH_USER_CHIRPS,
  FETCH_USER_CHIRPS_PENDING
] = createAction('FETCH_USER_CHIRPS', getUserChirps);
