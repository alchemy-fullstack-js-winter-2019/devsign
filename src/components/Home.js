import React from 'react';

export default function Home() {
  return (
    <>
      <section>
        <figure>
          <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
          <h3>T_on_A</h3>
        </figure>
      </section>
      <section>
        <label>Post a Tweet</label>
        <input type="text" />
        <button>Tweet</button>
        <button>Add An Image</button>
        <button>Add A Gif</button>
        <button>Add Location</button>
      </section>
      <section>
        <ol>
          <li>List of tweets from users you are following</li>
        </ol>
      </section>
      <aside>
        <ul>
          <section>
            <figure>
              <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            </figure>
            <h3>Jill Hill</h3>
            <p>Todays lab sucks</p>
          </section>
          <section>
            <figure>
              <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            </figure>
            <h3>Jack Hill</h3>
            <p>Todays lab is AMAZING</p>
          </section>
          <section>
            <figure>
              <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            </figure>
            <h3>Hilly Jill</h3>
            <p>Todays lab is all uphill</p>
          </section>
        </ul>
      </aside>
    </>
  );
}
