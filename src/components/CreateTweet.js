import React from 'react';
import PropTypes from 'prop-types';

export default function CreateTweet({ onChange, text }) {
  return (
    <section>
      <form>
        <label >Name</label>
        <input type="text" name="newTweet" value={text} onChange={onChange} />
        <label>Your Tweety Tweet to the World</label>
        <button>Fly</button>
      </form>
    </section>
  );
}

CreateTweet.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
