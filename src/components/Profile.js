import React from 'react';
import styles from './Profile.css';

export default function Profile() {
  return (
    <>
    <h2 className={styles.profileHeader}>
      Profile Username
    </h2>
    <section className={styles.tweetWrapper}>
      <h3>Most retweeted tweet</h3>
      <p>Some random tweet</p>
      <p>301 retweets</p>
      <p>98 likes</p>
      
      <img src="https://fakeimg.pl/640x360" alt='profile placeholder'/>
    </section>
    </>
  );
}
