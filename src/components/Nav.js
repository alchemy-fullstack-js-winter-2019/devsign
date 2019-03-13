import React from 'react';
import SearchForm from './SearchForm';
import { ListItem, StyledLink } from '../styles/mainStyle';
import styled from 'styled-components';

const NavBar = styled.nav `
  display: flex;
  align-items: space-between;
  background-color: #fbe6d6;
`;

const List = styled.ul `
  width: 25%;
  padding: 5px;
  margin: 10px;
`;

const NavLi = styled(ListItem) `
  color: black;
  padding: 0 20px;
`;

const MainLogo = styled(ListItem) `
  font-family: 'Dosis', sans-serif;
  font-size: 2em;
  margin: 0.5;
`;

const MobileProfileImage = styled.img `
  float: right;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 85%;
  top: 4%;

  @media (min-width: 700) {
    display: none;
  }
`;

const NavLink = styled(StyledLink) `
  color: black;
`;

const LogoLink = styled(StyledLink) `
  color: #cc5700;
`;

function Nav() {
  return (
    <NavBar>
      <List>
        <MainLogo><LogoLink to="/home">Chirp</LogoLink></MainLogo>
        <NavLi><NavLink to="/home">Home</NavLink></NavLi>
        <NavLi><NavLink to="/profile">Profile</NavLink></NavLi>
      </List>
      <StyledLink to="profile"><MobileProfileImage alt="profile pic" src="http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png"/></StyledLink>
      <SearchForm />
    </NavBar>
  );
}

export default Nav;
