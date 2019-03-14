import React from 'react';
import style from './Home.css';
import PopularTweets from '../../containers/PopularTweets';
import Post from '../post/Post';
export default function Landing() {
  return (
    <main>
      <section>
        <Post />
      </section>
      <section className={style.MainTweets}>
        <PopularTweets />
      </section>
    </main>
  );
}
