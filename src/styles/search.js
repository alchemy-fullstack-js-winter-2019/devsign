import styled from 'styled-components';
import { Form, Input, Button } from './mainStyle';

// export const MobileSearch = styled(Form) `
//   flex-direction: row;
//   align-items: center;
//   width: 100%;
//   background-color: white;
//   border: #e2e2dc solid 2px;
//   padding: 10px;
//   margin: 0;
// `;

export const MobileForm = styled(Form) `
  background-color: #fbe6d6;
  flex-direction: row;
  width: 35%;
  margin: 0;
  align-self: flex-end;
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
