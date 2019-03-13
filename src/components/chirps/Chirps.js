import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chirp from './Chirp';

function Chirps({ chirps, className }) {
  const chirpItems = chirps.map(chirp => {
    return <li key={chirp._id}><Chirp chirp={chirp} /></li>;
  });

  return (
    <ul className={className}>
      {chirpItems}
    </ul>
  );
}

Chirps.propTypes = {
  chirps: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(Chirps)`
  list-style-type: none;
  padding: 0;
`;