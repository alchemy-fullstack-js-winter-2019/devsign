import store from '../store';
import { getToken } from '../selectors/session';

export const getTweets = () => {
  return fetch(`${process.env.API_URL}/tweets`, {
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

