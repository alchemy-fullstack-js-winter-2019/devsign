import React from 'react';
import SearchForm from './SearchForm';
import { ListItem, StyledLink } from '../styles/mainStyle';
import styled from 'styled-components';

const NavBar = styled.nav `
  display: flex;
  align-items: space-between;
  background-color: #f3d8c4;
`;

const HideNav = styled(NavBar) `
  @media (max-width: 700px) {
    display: none;
  }
`;

const List = styled.ul `
  width: 25%;
  padding: 5px;
  margin: 10px;
`;

const NavLi = styled(ListItem) `
  color: #c16834;
  padding: 0 20px;
`;

export const MainLogo = styled(ListItem) `
  font-family: 'Dosis', sans-serif;
  font-size: 2em;
  margin: 0.5;
  color: white;
`;

function Nav() {
  return (
    <HideNav>
      <List>
        <StyledLink to="/home"><MainLogo>Chirp</MainLogo></StyledLink>
        <StyledLink to="/home"><NavLi>Home</NavLi></StyledLink>
        <StyledLink to="/profile"><NavLi>Profile</NavLi></StyledLink>
      </List>
      <SearchForm />
    </HideNav>
  );
}

export default Nav;
