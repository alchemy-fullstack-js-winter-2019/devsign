import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tweet from './Tweet';

function Tweets({ tweets, className }) {
  const tweetItems = tweets.map(tweet => {
    return <li key={tweet._id}><Tweet tweet={tweet} /></li>;
  });

  return (
    <ul className={className}>
      {tweetItems}
    </ul>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(Tweets)`
  list-style-type: none;
  box-sixing:border-box;
  background-color: rgba(55, 147, 210, 0.8);
  padding: 2.5%;
  margin: 0 auto;
  width:100%;

  
`;
