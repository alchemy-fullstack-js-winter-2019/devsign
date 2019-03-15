import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../styles/mainStyle';
import { ChirpForm, NewChirpButton, NewChirpInput } from '../styles/createChirpForm';

function CreateChirpForm({ onChange, text }) {
  return (
    <section>
      <ChirpForm>
        <Label htmlFor="newChirpText">Name</Label>
        <NewChirpInput onChange={onChange} type="text" name="newChirpText" id="newChirpText" value={text} />
        <Label htmlFor="newChirp"></Label>
        <NewChirpButton id="newChirp">Post</NewChirpButton>
      </ChirpForm>
    </section>
  );
}

CreateChirpForm.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CreateChirpForm;
