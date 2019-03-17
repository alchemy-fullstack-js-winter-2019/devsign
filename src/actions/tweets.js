import { getUser } from '../services/twitsApi';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
  type: FETCH_USER,
  payload: getUser()
});
