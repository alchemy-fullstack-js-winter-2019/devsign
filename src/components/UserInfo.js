import React from 'react';
import PropTypes from 'prop-types';


export default function UserInfo({ name, profileImage, handle }) {
  return (
    <>
    <header>
      <img alt={profileImage} >{profileImage}</img>
    </header>
    <aside>
      <ul>
        <li>{name}</li>
        <li>{handle}</li>
      </ul>
    </aside>
    </>

  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired
};
