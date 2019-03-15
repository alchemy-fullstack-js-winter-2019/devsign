import React from 'react';
import CurrentUser from '../containers/CurrentUser';
import CreateChirp from '../containers/CreateChirp';
import Nav from './Nav';
import { Main, Section } from '../styles/mainStyle';
import UserProfileChirps from '../containers/UserProfileChirps';


function Profile() {
  return (
    <>
    <Nav />
    <Main>
      <CurrentUser />
      <Section>
        <CreateChirp />
        <UserProfileChirps />
      </Section>
    </Main>
    </>
  );
}

export default Profile;
