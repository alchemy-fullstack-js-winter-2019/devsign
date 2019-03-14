import React from 'react';
import User from '../user/User';
import ProfileContainer from '../../containers/ProfileContainer';
import styles from './Profile.css';
const user = {
  handle: 'T_on_A',
  name: 'Teonna Zaragoza',
  image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg',
  bio: 'I am an avid trail runner, nurse and software developer'
};

export default function Profile() {
  return (
    <main >
      <article>
        <User user={user} />
        <ProfileContainer />
      </article>
      <aside>
        <p>Trends</p>
      </aside>
    </main>
  );
}
