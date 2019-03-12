import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImg, Handle, Text, Article } from '../styles/mainStyle';

function Tweet({ name, handle, text, profileImage }) {
  return (
    <Article>
      <header>
        <ProfileImg src={profileImage}/>
        <h2>{name} <Handle>{handle}</Handle></h2>
      </header>
      <Text>{text}</Text>
    </Article>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default Tweet;
