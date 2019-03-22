import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserHeader.css';

export default function UserHeader({ img, description, logoImage }){
  return (
    <>
    <section className={styles.userHead}>
      <img src={img} />
      <p className={styles.userDescription}>{description}</p>
      <img className={styles.logo} src={logoImage} />
    
    </section>
    </>
  );

}


UserHeader.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,

}
;
