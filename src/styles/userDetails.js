import styled from 'styled-components';

export const Aside = styled.aside `
  display: none;

@media (min-width: 700px) {
  display: block;
  width: 25%;
  font-family: 'Prompt', sans-serif;
  background-color: white;
  border-bottom: #e2e2dc solid 2px;
  align-self: flex-start;
}
`;

export const Bio = styled.p `
  padding: 5px;
`;
