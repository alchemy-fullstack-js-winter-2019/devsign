import React from 'react';
import UserDetails from './UserDetails';
import CreateChirpForm from './CreateChirpForm';
import Nav from './Nav';
import Chirps from './Chirps';
import { Main, Section } from '../styles/mainStyle';

const chirps = [
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  } 
];

const  user = {
  name: 'Kaiya',
  handle: '@ladybeard',
  profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
  bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Saddle_tor_to_Hey_tor_pano.jpg',
  bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
  location: 'Portland, OR'
};

function Profile() {
  const { name, handle, profileImage, bio, location } = user;
  return (
    <>
    <Nav />
      <CreateChirpForm />
    <Main>
      <UserDetails
        name={name}
        handle={handle}
        profileImage={profileImage}
        bio={bio}
        location={location}/>
      <Section>
        <Chirps chirps={chirps}/>
      </Section>
    </Main>
    </>
  );
}

export default Profile;
