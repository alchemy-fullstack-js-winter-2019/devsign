import styled from 'styled-components';
import { Form, Input, Button } from './mainStyle';

export const MobileForm = styled(Form) `
  background-color: #fbe6d6;
  flex-direction: row;
  width: 75%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled(Input) `
  margin: 0.5em 0;
  width: 70%;
`;

export const SearchButton = styled(Button) `
  margin: 0.5em;
`;

export const Label = styled.label `
  color:  #fbe6d6;
`;
