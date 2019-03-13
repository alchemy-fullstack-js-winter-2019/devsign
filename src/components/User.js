import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { handle, profileImg } = user;
  return ( 
    <figure>
      <img src={profileImg} />
      <figcaption>{handle}</figcaption>
    </figure>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
