export const getTweets = () => {
  return fetch(`${process.env.API_URL}/tweets`)
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json; 
    });
  // return Promise.resolve([
  //   { _id: '1', text: 'my first tweet', user: { handle: 'Larry_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
  //   { _id: '2', text: 'my second tweet', user: { handle: 'Big_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
  //   { _id: '3', text: 'my third tweet', user: { handle: 'Tweety', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
  //   { _id: '4', text: 'my fourth tweet', user: { handle: 'Scrooge', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
  //   { _id: '5', text: 'my firth tweet', user: { handle: 'R_R', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  // ]);
};

export const getMyTweets = () => {
  return Promise.resolve([
    { _id: '1', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '2', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '3', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '4', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  ]);
};

export const getNotifications = () => {
  return Promise.resolve([
    {
      user: { handle: 'Huey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
      action: 'Liked your photo',
      date: 'March 12, 2019'
    },
    {
      user: { handle: 'Luey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
      action: 'Tweeted',
      date: 'March 11, 2019'
    },
    {
      user: { handle: 'Duey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
      action: 'Liked your tweet',
      date: 'March 12, 2019'
    }
  ]);
}; 

export const getMessages = () => {
  return Promise.resolve([
    {
      user: {
        handle: 'Huey',
        image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
      },
      text: 'Good morrning',
      date: 'March 13, 2019'
    },
    {
      user: {
        handle: 'Luey',
        image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
      },
      text: 'Good morrning',
      date: 'March 13, 2019'
    },
    {
      user: {
        handle: 'Duey',
        image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
      },
      text: 'Good morrning',
      date: 'March 13, 2019'
    }
  ]);
};
