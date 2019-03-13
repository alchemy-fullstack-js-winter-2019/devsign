import styled from 'styled-components';
import { Form, Input, Button } from './mainStyle';

export const ChirpForm = styled(Form)  `
  flex-direction: row;
  width: 100%;
  margin: 0.5em;
`;

export const NewChirpInput = styled(Input) `
  width: 100%;
`;

export const NewChirpButton = styled(Button) `
  margin: 0 2em;
`;
