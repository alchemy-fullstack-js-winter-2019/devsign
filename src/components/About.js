import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './About.css';

export default function About() {
  return (
    <>
      <Header/>
      <section  id="carmen"className={styles.About}>
        <h3>About CARMEN</h3>
        <div>
          <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>Mother,  student,  software developer, food and nutrition enthusiast.</p>
          <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>Health philosophy lines up with Hippocrates: Let food be thy medicine and medicine your food. </p>
          <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>Loves and passionate about REAL food! </p>
          <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>Enjoys drying fruits and vegetables (kale chips are her favorite)!</p>   
          <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/>Concocts health bars from raw nuts, seeds, cacao powder and dates.</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
