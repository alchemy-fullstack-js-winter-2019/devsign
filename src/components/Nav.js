import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, List, ShowNav } from '../styles/mainStyle';
import styled from 'styled-components';

const StyledLink = styled(Link) `
  text-decoration: none;
`;

function Nav() {
  return (
    <ShowNav>
      <List>
        <StyledLink to="/home"><ListItem>Home</ListItem></StyledLink>
        <StyledLink to="/profile"><ListItem>Profile</ListItem></StyledLink>
      </List>
    </ShowNav>
  );
}

export default Nav;
