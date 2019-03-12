import React from 'react';

export default function Profile() {
  return (
    <main>
      <article>
        <figure>
          <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
        </figure>
        <h3>Teonna</h3>
        <h4>T_on_A</h4>
        <p>Bio about me</p>
      </article>
      <article>
        <ol>
          <li>
            <p>January 23, 2019</p>
            <p>MongoDB for lyfe #MONGODB</p>
          </li>
        </ol>
      </article>
      <aside>
        <p>Trends</p>
      </aside>
    </main>
  );
}
