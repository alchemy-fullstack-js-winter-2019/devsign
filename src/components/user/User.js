import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { handle, profileImg } = user;
  return ( 
    <figure>
      <figcaption>{handle}</figcaption>
      <img src={profileImg} />
    </figure>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
