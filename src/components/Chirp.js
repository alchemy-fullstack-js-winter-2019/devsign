import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImg, Handle, Text, Article } from '../styles/mainStyle';
import styled from 'styled-components';

const HTwo = styled.h2 `
  margin: 0;
`;

const P = styled(Text) `
  margin: 0;
  padding: 0;
  padding-left: 13%;
`;

function Chirp({ name, handle, text, profileImage }) {
  return (
    <Article>
      <header>
        <ProfileImg alt={name} src={profileImage}/>
        <HTwo>{name} <Handle>{handle}</Handle></HTwo>
      </header>
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
