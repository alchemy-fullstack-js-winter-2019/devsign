import React from 'react';
import PropTypes from 'prop-types';

export default function Follower({ details }) {
  const { userName, img, bio, followsYou, userLink } = details;
  return (
    <section>
      <a href={userLink}>
        <div>
          <img src={img} />
        </div>
        <div>
          <p>{userName}</p>
          <p>{bio}</p>
          <p>{followsYou}</p>
        </div>
      </a>
    </section>
  );
}

Follower.propTypes = {
  details: PropTypes.object.isRequired,
};
