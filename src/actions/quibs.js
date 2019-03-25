import { createAction } from 'promise-middleware-redux';
import { getQuibs, postQuib } from '../services/quibs';

export const [
  createQuib,
  CREATE_QUIB
] = createAction('CREATE_NOTE', postQuib);

export const [
  fetchQuibs,
  FETCH_QUIBS
] = createAction('FETCH_QUIBS', getQuibs);
