import React from 'react';
import PropTypes from 'prop-types';

export default function FollowerComponent({ followerImg, followerLink, bio }) {
  return (
    <>
    <section>
      <a href={followerLink}>
        <img src={followerImg}/>
        <p>{bio}</p>
      </a>
    </section>
    </>
  );

}

FollowerComponent.propTypes = {
  followerLink: PropTypes.string.isRequired,
  followerImg: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};
