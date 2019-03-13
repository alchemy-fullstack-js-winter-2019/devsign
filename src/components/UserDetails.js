import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProfileImg, Handle, Bio } from '../styles/mainStyle';

export const Aside = styled.aside `
  display: none;

  @media (min-width: 700px) {
    width: 25%;
    font-family: 'Prompt', sans-serif;
    width: 100%;
    background-color: white;
    border-bottom: #e2e2dc solid 2px;
    align-self: flex-start;
  }
`;

function UserDetails({ name, handle, profileImage, bio, location }) {
  return (
    <Aside>
      <ProfileImg name="profileImage" src={profileImage} />
      <h2>{name} <Handle>{handle}</Handle></h2>
      <Bio>{bio}</Bio>
      {location && <Bio>{location}</Bio>}
    </Aside>
  );
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default UserDetails;
