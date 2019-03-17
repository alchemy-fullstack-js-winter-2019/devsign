import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/CreateTweetForm.css';
import Navigation from '../components/Navigation';

export default function CreateTweetForm({ onChange, text }) {
  return (
    <>
    <header>
      <Navigation />
    </header>
    <section>
      <form className={styles.form}>
        <label >Enter your message</label>
        <input type="text" name="newTweet" value={text} onChange={onChange} />
        <label></label>
        <button>Submit</button>
      </form>
    </section>
    </>
  );
}

CreateTweetForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired
};
