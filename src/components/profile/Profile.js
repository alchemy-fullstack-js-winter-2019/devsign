import React from 'react';
import Tweets from '../../components/tweets/Tweets';
import User from '../user/User';

const tweets = 
  [
    { _id: '1', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '2', text: 'my second tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '3', text: 'my third tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '4', text: 'my fourth tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '5', text: 'my firth tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  ];
const user = {
  handle: 'T_on_A',
  name: 'Teonna Zaragoza',
  image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg',
  bio: 'I am an avid trail runner, nurse and software developer'
};

export default function Profile() {
  return (
    <main>
      <User user={user}/>
      <Tweets tweets={tweets}/>
      <aside>
        <p>Trends</p>
      </aside>
    </main>
  );
}
