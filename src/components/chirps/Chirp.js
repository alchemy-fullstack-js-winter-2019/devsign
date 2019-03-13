import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../user/Avatar';

function Chirp({ chirp, className }) {
  const { text, user } = chirp;
  return (
    <section className={className}>
      <Avatar user={user} />
      <p>{text}</p>
    </section>
  );
}

Chirp.propTypes = {
  chirp: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default styled(Chirp)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;