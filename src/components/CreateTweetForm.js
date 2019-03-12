import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from '../styles/mainStyle';

function CreateTweetForm({ text }) {
  return (
    <section>
      <Form>
        <Input readOnly={true} type="text" name="text" value={text} />
        <Button>Chirp</Button>
      </Form>
    </section>
  );
}

CreateTweetForm.propTypes = {
  text: PropTypes.string
};

export default CreateTweetForm;
