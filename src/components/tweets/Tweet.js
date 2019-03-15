import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPic from '../user/UserPic';

function Tweet({ tweet, className }) {
  const { text, user } = tweet;
  return (
    <section className={className}>
      <UserPic user={user} />
      <p>{text}</p>
    </section>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default styled(Tweet)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-family: "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } 
  background-color:#fff;
  border-radius:10px;
  margin:12px;
`;

