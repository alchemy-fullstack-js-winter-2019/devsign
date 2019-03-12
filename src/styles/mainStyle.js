import styled from 'styled-components';

export const StyledHeader = styled.header `
  color: #c16834;
  display: flex;
  justify-content: space-around;
`;

export const Form = styled.form `
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  width: 70%;
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
  margin: 7px;
  padding: 5px;
`;

export const Button = styled.button `
  background-color: white;
  border-radius: 3px;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  border-right: #bdbbbb solid 3px;
  border-bottom: #a2a1a1 solid 3px;
`;

export const P = styled.p `
  text-decoration: none;
  color: white;
`;

export const ShowNav = styled.nav `
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;

export const List = styled.ul `
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li `
  display: inline;
  padding: 0 10px;
  color: white;
`;


export const Aside = styled.aside `
  width: 100%;
  background-color: white;
  padding: 10px;
  border-bottom: #e2e2dc solid 2px;
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

export const Text = styled.p `
  padding: 10px;
`;

export const Section = styled.section `
  width: 100%;
`;

export const Article = styled.article `
  background-color: white;
  border: #e2e2dc solid 2px;
  padding: 10px;
`;


