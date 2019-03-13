import React from 'react';
import PropTypes from 'prop-types';
import Chirp from './Chirp';
import { List } from '../styles/mainStyle';

function Chirps({ chirps }) {

  const chirpList = chirps.map((chirp, i) => {
    return <li key={i}><Chirp
      profileImage={chirp.user.profileImage}
      name={chirp.user.name} 
      text={chirp.text}
      handle={chirp.user.handle}
    /></li>;
  });
  return (
    <List>
      {chirpList}
    </List>
  );
}

Chirps.propTypes = {
  chirps: PropTypes.array.isRequired
};

export default Chirps;
