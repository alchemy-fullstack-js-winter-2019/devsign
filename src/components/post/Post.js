import React from 'react';
import styles from './Post.css';
function Post() {
  return (
    <>
      <section className={styles.Post}>
        <form>
          <label>Post a Tweet</label>
          <input type="text" placeholder='Tweet at me'/>
          <button>teewT</button>
        </form>
      </section>
    </>
  );
}

export default Post;
