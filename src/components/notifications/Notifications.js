import React from 'react';

export default function Notifications() {
  return (
    <article>
      <header>
        <h2>Notifications</h2>
      </header>
      <section>
        <ol>
          <li>
            <figure>
              <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            </figure>
            <h3>Hilly Jill</h3>
            <p>Liked your post</p>
          </li>
          <li>
            <figure>
              <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            </figure>
            <h3>Hilly Jill</h3>
            <p>New Tweet from Hilly Jill</p>
          </li>
        </ol>
      </section>
    </article>
  );
}
