import { get, post } from './request';

export const getTweets = () => get('/tweets');
export const createTweet = tweet => post('/tweets', tweet);

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

export const getMessages = () => get('/messages');

