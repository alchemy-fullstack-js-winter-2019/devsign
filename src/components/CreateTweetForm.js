import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button, Label } from '../styles/mainStyle';

const ChirpForm = styled(Form)  `
  flex-direction: row;
  width: 100%;
  margin: 0.5em;
`;

const NewChirpInput = styled(Input) `
  width: 100%;
`;

const NewChirpButton = styled(Button) `
  margin: 0 2em;
`;

function CreateTweetForm({ text }) {
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

CreateTweetForm.propTypes = {
  text: PropTypes.string
};

export default CreateTweetForm;
