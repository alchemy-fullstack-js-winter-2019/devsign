import React from 'react';
import styles from './About.css';

export default function About() {
  return (
    <>
    <h2 className={styles.aboutHeader}>
      About Us
    </h2>
    <h3>Some Information Our values Blah blah blah blah</h3>
    <p>Some more information about us blah blah blah blah blah</p>
      
    <img className={styles.aboutImage} src="https://fakeimg.pl/640x360"/>
    </>
  );
}
