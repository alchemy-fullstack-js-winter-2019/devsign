import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.css';


function Post({ tweet, onSubmit }) {
  return (
    <>
      <section className={styles.Post}>
        <form>
          <label>Post a Tweet</label>
          <input type="text" placeholder='Tweet at me' name="post" value={tweet}/>
          <button onSubmit={onSubmit.bind(tweet)}>teewT</button>
        </form>
      </section>
    </>
  );
}
Post.propTypes = {
  tweet: PropTypes.object,
  onSubmit: PropTypes.func
};

export default Post;
