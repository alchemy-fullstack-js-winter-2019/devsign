import styled from 'styled-components';
import { ProfileImg } from './mainStyle';

export const Aside = styled.aside `
  display: none;

@media (min-width: 700px) {
  display: block;
  width: 25%;
  font-family: 'Prompt', sans-serif;
  background-color: white;
  border-bottom: #e2e2dc solid 2px;
  border-bottom: #b95000 solid 4px;
  border-right: #e6a573 solid 4px;
  border-top-left-radius: 7px;
  align-self: flex-start;
}
`;

export const Avatar = styled(ProfileImg) `
  width: 100px;
  height: 100px;
`;

export const Bio = styled.p `
  padding: 5px;
`;
