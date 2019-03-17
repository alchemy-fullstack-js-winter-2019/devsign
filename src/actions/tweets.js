import { getUser } from '../services/twitsApi';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => {
  console.log('actions called');
  return ({
    type: FETCH_USER,
    payload: getUser()
  });

};
