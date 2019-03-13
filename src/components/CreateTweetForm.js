import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Label } from '../styles/mainStyle';

function CreateTweetForm({ text }) {
  return (
    <section>
      <Form>
        <Label htmlFor="newChirpText">Name</Label>
        <Input readOnly={true} type="text" name="newChirpText" id="newChirpText" value={text} />
        <Label htmlFor="newChirp"></Label>
        <Button id="newChirp">Chirp</Button>
      </Form>
    </section>
  );
}

CreateTweetForm.propTypes = {
  text: PropTypes.string
};

export default CreateTweetForm;
