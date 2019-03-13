import React from 'react';
import SearchForm from './SearchForm';
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
        <MobileProfileImage alt="profile pic" src="http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png"/>
      </StyledLink>
      
      <SearchForm />
    </NavBar>
  );
}

export default Nav;
