import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';
import { getImageUrl } from '../../services/images';

export default function Avatar({ user, className }) {
  const { handle, profileImg } = user;
  return (
    <ProfileUser>
      <figure className={className}>
        <i className="fas fa-kiwi-bird"><ProfileAvatar alt={`profile image for ${handle}`} src={getImageUrl(profileImg, ['w_250'])} /></i>
        <figcaption>{handle}</figcaption>
      </figure>
    </ProfileUser>
  );
}

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};


const ProfileAvatar = styles.img`
@media (min-width: 374px) {
  border-radius: 50%;
  width: 15vw;
  height: 8vh;
  border: 3px solid #b7fbff;
  }
@media (min-width: 700px) {
  width: 8vw;
  height: 8vh;
  }
@media (min-width: 700px) {
  width: 6vw;
  height: 8vh;
  }
`;

const ProfileUser = styles.aside`
@media (min-width: 374px) {
  font-family: 'Muli', sans-serif;
  color: #ffa1ac;
  margin: 10px;
  font-size: 25px;

  }
`;

