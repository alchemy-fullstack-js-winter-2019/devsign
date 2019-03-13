import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';
import 'normalize.css';


const HeaderStyle = styles.header`
@import url('https://fonts.googleapis.com/css?family=Muli');
@media (min-width: 374px) {
  font-family: 'Muli', sans-serif;
  background: #b7fbff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
`;

const LinkStyle = styles(Link)`
@media (min-width: 374px) {
  margin-left: 2em;
  margin-right: .5em;
  font-size: 25px;
  text-decoration: none;
  color:#ffa1ac;
  }
`;

const LinkProfile = styles.a`
@media (min-width: 374px) {
  margin-left: 20px;
  margin-right: 40px;
  font-size: 20px;
  color:#ffa1ac;
  } 
@media (min-width: 414px) {
  margin-left: 40px;
  }
`;

const LinkChirps= styles.a`
@media (min-width: 374px) {
  margin-left: 80px;
  margin-right: 25px;
  font-size: 20px;
  color:#ffa1ac;
  }
`;

const NavStyle = styles.nav`
@media (min-width: 374px) {
  padding: 30px 0 30px 0;
  }
`;

const ChirpLogo = styles.h1`
@media (min-width: 374px) {
  letter-spacing: .04em;
  color: #ffa1ac;
  } 
`;
export default function Header() {
  return (
    <HeaderStyle>
      <NavStyle>
        <LinkProfile to="/">Profile</LinkProfile>
        <LinkStyle to="/"><i className="fas fa-kiwi-bird"></i></LinkStyle>
        <LinkChirps to="/">Chirps</LinkChirps> 
      </NavStyle>
    </HeaderStyle>
  );
}

