import React from 'react';
import CurrentUser from '../containers/CurrentUser';
import PopularChirps from '../containers/PopularChirps';
import Nav from './Nav';
import { Section, Main } from '../styles/mainStyle';
// import SearchForm from './SearchForm';
// import styled from 'styled-components';

// const MobileSearch = styled(SearchForm) `
//   display: block;
//   flex-direction: row;
//   align-items: center;
//   width: 100%;
//   background-color: white;
//   border: #e2e2dc solid 2px;
//   padding: 10px;
//   margin: 0;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

function Home() {
  return (
    <>
    <Nav />
    <Main>
      <CurrentUser />
      <Section>
        {/* <MobileSearch /> */}
        <PopularChirps />
      </Section>
    </Main>
    </>
  );
}

export default Home;
