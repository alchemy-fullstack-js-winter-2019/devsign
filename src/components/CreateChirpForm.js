import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../styles/mainStyle';
import { ChirpForm, NewChirpButton, NewChirpInput } from '../styles/createChirpForm';

function CreateChirpForm({ text }) {
  return (
    <section>
      <ChirpForm>
        <Label htmlFor="newChirpText">Name</Label>
        <NewChirpInput readOnly={true} type="text" name="newChirpText" id="newChirpText" value={text} />
        <Label htmlFor="newChirp"></Label>
        <NewChirpButton id="newChirp">Chirp</NewChirpButton>
      </ChirpForm>
    </section>
  );
}

CreateChirpForm.propTypes = {
  text: PropTypes.string
};

export default CreateChirpForm;
