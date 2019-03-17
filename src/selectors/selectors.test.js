import { getTweets } from './tweets';
// import { getToken } from './session';

describe('selectors test', () => {
  it('can get tweets', () => {
    const state = {
      tweets: [
        { _id: '1', text: 'my first tweet', user: { handle: 'Larry_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
      ]
    };

    const fetchedTweets = getTweets(state);
    expect(fetchedTweets).toEqual([
      { _id: '1', text: 'my first tweet', user: { handle: 'Larry_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    ]);
  });
});
