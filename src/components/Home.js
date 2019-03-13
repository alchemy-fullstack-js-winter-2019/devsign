import React from 'react';
import UserDetails from './UserDetails';
import PopularChirps from '../containers/PopularChirps';
import Nav from './Nav';
import { Section, Main } from '../styles/mainStyle';

const  user = {
  name: 'Kaiya',
  handle: '@ladybeard',
  profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
  bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Saddle_tor_to_Hey_tor_pano.jpg',
  bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
  location: 'Portland, OR'
};

function Home() {
  const { name,  handle, profileImage, bannerImage, bio, location } = user;
  return (
    <>
    <Nav />
    <Main>
      <UserDetails
        name={name}
        handle={handle}
        profileImage={profileImage}
        bannerImage={bannerImage}
        bio={bio}
        location={location}
      />
      <Section>
        <PopularChirps />
      </Section>
    </Main>
    </>
  );
}

export default Home;
