import { createAction } from 'promise-middleware-redux';
import { getUser } from '../services/mockChirps';

export const [
  fetchUser,
  FETCH_USER,
  FETCH_USER_PENDING
] = createAction('FETCH_USER', getUser);
