import React from 'react';
import Search from '../containers/Search';
import { StyledLink } from '../styles/mainStyle';
import { NavBar, List, MainLogo, NavLi, NavLink, MobileProfileImage, LogoLink } from '../styles/nav';

function Nav() {
  return (
    <NavBar>
      <List>
        <MainLogo>
          <LogoLink to="/home">Chirp</LogoLink>
        </MainLogo>
        <NavLi>
          <NavLink to="/home">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/profile">Profile</NavLink>
        </NavLi>
      </List>

      <StyledLink to="profile">
        <MobileProfileImage alt="profile pic" src="https://joeschmoe.io/api/v1/jeane"/>
      </StyledLink>
      
      <Search />
    </NavBar>
  );
}

export default Nav;
