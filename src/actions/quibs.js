import { createAction } from 'promise-middleware-redux';
import { getQuibs } from '../services/quibs';

export const CREATE_QUIB = 'CREATE_QUIB';
export const addQuib = quib => ({
  type: CREATE_QUIB,
  payload: quib
});

export const [
  fetchQuibs,
  FETCH_QUIBS
] = createAction('FETCH_QUIBS', getQuibs);
