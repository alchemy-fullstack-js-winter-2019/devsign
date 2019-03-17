import React from 'react';
import style from './Home.css';
import PopularTweets from '../../containers/PopularTweets';
import PostContainer from '../../containers/PostContainer';
export default function Landing() {
  console.log('landing');

  return (
    <main>
      <section>
        <PostContainer />
      </section>
      <section className={style.MainTweets}>
        <PopularTweets />
      </section>
    </main>
  );
}
