import styled from 'styled-components';
import { Form, Input, Button } from './mainStyle';

export const ChirpForm = styled(Form)  `
  flex-direction: row;
  align-items: center;
  width: 98%;
  background-color: white;
  border: #e2e2dc solid 2px;
  padding: 8px;
  margin: 0;
`;

export const NewChirpInput = styled(Input) `
  width: 100%;
  padding: 10px;
`;

export const NewChirpButton = styled(Button) `
  margin: 0 1em;
`;
