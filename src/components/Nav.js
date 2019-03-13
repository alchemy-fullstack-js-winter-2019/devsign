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
  margin: 0;
`;


function Nav() {
  return (
    <HideNav>
      <List>
        <StyledLink to="/home"><ListItem>Home</ListItem></StyledLink>
        <StyledLink to="/profile"><ListItem>Profile</ListItem></StyledLink>
        <StyledLink to="/followers"><ListItem>Followers</ListItem></StyledLink>
      </List>
      <SearchForm />
    </HideNav>
  );
}

export default Nav;
