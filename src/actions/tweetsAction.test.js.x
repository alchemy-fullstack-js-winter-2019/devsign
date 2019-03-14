import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchTweets, FETCH_TWEETS } from '../actions/tweetsAction';

jest.mock('../services/tweetsApi.js');

describe('actions test', () => {
  it('fetches posts and create action', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(fetchTweets(6));
    
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_TWEETS,
        payload: ['tweets']
      });
      done();
    });
  }, 500);
});


