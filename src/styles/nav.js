import styled from 'styled-components';
import { ListItem, StyledLink } from './mainStyle';

export const NavBar = styled.nav `
  display: flex;
  justify-content: space-between;
  background-color: #fbe6d6;
`;

export const List = styled.ul `
  width: 25%;
  padding: 5px;
  margin: 10px;
  margin-top: 5px;
`;

export const NavLi = styled(ListItem) `
  color: black;
  padding: 0 20px;
`;

export const MainLogo = styled(ListItem) `
  font-family: 'Dosis', sans-serif;
  font-size: 2em;
  margin: 0.5;
`;

export const MobileProfileImage = styled.img `
  float: right;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 85%;
  top: 1%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavLink = styled(StyledLink) `
  color: black;
`;

export const LogoLink = styled(StyledLink) `
  color: #cc5700;
`;
