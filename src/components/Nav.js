import React from 'react';
import SearchForm from './SearchForm';
import { ListItem, List, HideNav, StyledLink } from '../styles/mainStyle';


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
