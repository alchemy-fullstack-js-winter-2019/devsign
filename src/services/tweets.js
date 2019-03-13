export const getTweets = () => {
  return Promise.resolve([
    { body: 'Tweet One', id: 1, likes: 11, retweets: 100 },
    { body: 'Tweet Two', id: 2, likes: 75, retweets: 42 }
  ]);
};

