import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImageUrl } from '../../services/image';

function UserPic({ user, className }) {
  const { handle, userPic } = user;
  return (
    <figure className={className}>
      <img alt={`profile image for ${handle}`} src={getImageUrl(userPic, ['w_250'])} />
      <figcaption>{handle}</figcaption>
    </figure>
  );
}

UserPic.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default styled(UserPic)`
  display: inline-block;
  img {
    max-width: 250px;
  }
  figcaption {
    text-align: center;
  }
`;
