import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './About.css';

export default function About() {
  return (
    <>
      <Header/>
      <section>
        <h3>About CARMEN</h3>
        <div className={styles.About}>
          <p>Mother,  student,  software developer, food and nutrition enthusiast.</p>
          <p>My philosophy lines up with that of Hippocrates, the Father of Medicine: Let food be thy medicine and medicine your food. </p>
          <p>I love food! I enjoy drying fruits and vegetables (kale chips are my favorite) and making health bars from raw nuts, seeds, cacao powder and dates.</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
