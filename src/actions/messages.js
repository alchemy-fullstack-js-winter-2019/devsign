import { createAction } from 'promise-middleware-redux';
import { getMessages } from '../services/services';

export const [
  fetchMessages,
  FETCH_MESSAGES,
  FETCH_MESSAGES_PENDING,
] = createAction('FETCH_MESSAGES', getMessages);
