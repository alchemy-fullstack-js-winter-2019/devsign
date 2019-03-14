import React from 'react';
import CurrentUser from '../containers/CurrentUser';
import PopularChirps from '../containers/PopularChirps';
import Nav from './Nav';
import { Section, Main } from '../styles/mainStyle';

function Home() {
  return (
    <>
    <Nav />
    <Main>
      <CurrentUser />
      <Section>
        <PopularChirps />
      </Section>
    </Main>
    </>
  );
}

export default Home;
