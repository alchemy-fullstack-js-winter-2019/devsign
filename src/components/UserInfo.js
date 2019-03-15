import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from '../services/image';

// name, profileImage, handle
export default function UserInfo({ user }) {
  const { handle, profileImage, name } = user;
  return (
    <>
    <figure >
      <img alt={`profile image of ${handle}`} src={getImageUrl(profileImage, ['w_250'])} />
      <figcaption>{handle}</figcaption>
    </figure>
    <aside>
      <ul>
        <li>{name}</li>
       
      </ul>
    </aside>
    </>

  );
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
