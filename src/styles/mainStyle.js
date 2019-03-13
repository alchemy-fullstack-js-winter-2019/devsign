import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link) `
  text-decoration: none;
`;

export const StyledHeader = styled.header `
  font-family: 'Dosis', sans-serif;
  color: white;
  display: flex;
  justify-content: space-around;
`;

export const MainLogo = styled.h1 `
  font-size: 4em;
  margin: 0;
  margin-top: 0.5em;
`;

export const Main = styled.main `
  @media (min-width: 700px) {
    display: flex;
    border-top: #a2a1a1 solid 3px;
  }
`;

export const Form = styled.form `
  background-color: #c16834;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
`;

export const Label = styled.label `
  color: #c16834;
`;

export const MobileForm = styled(Form) `
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Input = styled.input `
  background-color: white;
  border-radius: 2px;
  border-top: #bdbbbb solid 1px;
  border-left: #bdbbbb solid 1px;
  border-right: #bdbbbb solid 3px;
  border-bottom: #a2a1a1 solid 3px;
  margin-bottom: 5px;
  padding: 5px;
`;

export const Button = styled.button `
  font-family: 'Prompt',sans-serif;
  background-color: #75b593;
  color: white;
  border-radius: 7px;
  border: 0;
  width: 100px;
  margin: 0 auto;
  padding: 5px;
  border-right: #5b8e73 solid 3px;
  border-bottom: #3a5648 solid 3px;
`;

export const P = styled.p `
  font-family: 'Prompt', sans-serif;
  text-decoration: none;
  color: black;
`;

export const NavBar = styled.nav `
  display: block;
`;

export const HideNav = styled(NavBar) `
  @media (max-width: 700px) {
    display: none;
  }
`;

export const List = styled.ul `
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li `
  display: inline;
  padding: 0 10px;
  color: black;
`;


export const Aside = styled.aside `
  font-family: 'Prompt', sans-serif;
  width: 100%;
  background-color: white;
  border-bottom: #e2e2dc solid 2px;

  @media (min-width: 700px) {
    width: 25%;
  }
`;

export const ProfileImg = styled.img `
  width: 50px;
  height: 50px;
  padding-left: 5px;
  float: left;
`;

export const BannerImg = styled.img `
  width: 100%;
  height: 20%;
`;

export const MobileBanner = styled(BannerImg) `
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Handle = styled.span `
  font-size: 0.5em;
`;

export const Bio = styled.p `
  padding: 5px;
`;

export const MobileBio = styled(Bio) `
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Text = styled.p `
  padding: 10px;
`;

export const Section = styled.section `
  font-family: 'Prompt', sans-serif;
  width: 100%;

  @media (min-width: 700px) {
    width: 70%;
  }
`;

export const Article = styled.article `
  font-family: 'Prompt', sans-serif;
  background-color: white;
  border: #e2e2dc solid 2px;
  padding: 10px;
`;


