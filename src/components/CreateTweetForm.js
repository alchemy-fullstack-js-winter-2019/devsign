import React from 'react';
import PropTypes from 'prop-types';

function CreateTweetForm({ text }) {
  return (
    <section>
      <form>
        <input readOnly={true} type="text" name="text" value={text} />
        <button>Tweet</button>
      </form>
    </section>
  );
}

CreateTweetForm.propTypes = {
  text: PropTypes.string
};

export default CreateTweetForm;
