import { createAction } from 'promise-middleware-redux';
import { getNotifications } from '../services/services';

export const [
  fetchNotifications,
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_PENDING,
] = createAction('FETCH_NOTIFICATIONS', getNotifications);
