import { Text } from '../styles/mainStyle';
import styled from 'styled-components';

export const HTwo = styled.h2 `
  margin: 0;

  @media (max-width: 700px) {
    font-size: 1.25em;
  }
`;

export const P = styled(Text) `
  margin: 0;
  padding: 0;
  padding-left: 13%;
  
  @media (max-width: 700px) {
    font-size: 0.75em;
  }
`;

export const Header = styled.header `
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;
