export const getTweets = () => {
  return Promise.resolve([
    { _id: '1', text: 'my first tweet', user: { handle: 'Larry_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '2', text: 'my second tweet', user: { handle: 'Big_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '3', text: 'my third tweet', user: { handle: 'Tweety', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '4', text: 'my fourth tweet', user: { handle: 'Scrooge', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '5', text: 'my firth tweet', user: { handle: 'R_R', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  ]);
};
