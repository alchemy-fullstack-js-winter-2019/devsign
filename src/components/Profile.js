import React from 'react';
import CurrentUser from '../containers/CurrentUser';
import CreateChirpForm from './CreateChirpForm';
import Nav from './Nav';
import { Main, Section } from '../styles/mainStyle';
import UserProfileChirps from '../containers/UserProfileChirps';


function Profile() {
  return (
    <>
    <Nav />
      <CreateChirpForm />
    <Main>
      <CurrentUser />
      <Section>
        <UserProfileChirps />
      </Section>
    </Main>
    </>
  );
}

export default Profile;
