import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setAuth,
  SET_AUTH,
] = createAction('SET_AUTH', handleAuth);
