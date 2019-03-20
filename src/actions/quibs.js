import { createAction } from 'promise-middleware-redux';
import { getQuibs } from '../services/quibs';

export const [
  fetchQuibs,
  FETCH_QUIBS
] = createAction('FETCH_QUIBS', getQuibs);
