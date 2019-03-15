import React from 'react';
import PropTypes from 'prop-types';
// import { getImageUrl } from '../services/image'; to get image from cloudinary


export default function UserInfo({ name, profileImage, handle }) {
  return (
    <>
    <figure >
      <img alt={`profile image of ${handle}`} src={profileImage} >{profileImage}</img>
      <figcaption>{handle}</figcaption>
    </figure>
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
