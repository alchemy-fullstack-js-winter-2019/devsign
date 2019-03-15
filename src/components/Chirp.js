import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImg, Handle, Article } from '../styles/mainStyle';
import { Header, P, HTwo } from '../styles/chirp';

function Chirp({ name, handle, text, profileImage }) {
  return (
    <Article>
      <Header>
        <ProfileImg alt={name} src={profileImage}/>
        <HTwo>{name} <Handle>{handle}</Handle></HTwo>
      </Header>
      <P>{text}</P>
    </Article>
  );
}

Chirp.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default Chirp;
