import React from 'react';
import Profile from './Profile';
import styles from 'styled-components';
import tyler from '/assets/tyler.jpg';
import brantley from '/assets/brantley.jpg';
import khoman from '/assets/khoman.jpg';
import samantha from '/assets/samantha.jpg';

const ChirpsUsers = styles.aside`
@media (min-width: 374px) {
  color: #ffa1ac;
  text-align:center;
  font-family: 'Muli', sans-serif;
  border: 1pt solid #ffe0a3;
  margin: 10px;
  }
  @media (min-width: 700px) {
    color: #ffa1ac;
    text-align:left;
    font-family: 'Muli', sans-serif;
    border: 1pt solid #ffe0a3;
    margin: 10px;
    font-size: 25px;
    }
`;

const Avatar = styles.img`
@media (min-width: 374px) {
  border-radius: 50%;
  width: 15vw;
  height: 8vh;
  border: 3px solid #b7fbff;
  }
@media (min-width: 700px) {
    border-radius: 50%;
    width: 8vw;
    height: 8vh;
    border: 3px solid #b7fbff;
   }
@media (min-width: 900px) {
    border-radius: 50%;
    width: 6vw;
    height: 8vh;
    border: 3px solid #b7fbff;
   }
`;

function ChirpsFeed() {
  return (
    <section>
      <Profile />
      <ChirpsUsers>
        <h3><i className="fas fa-kiwi-bird"></i> Brantley </h3>
        <Avatar src={brantley}width="10%" height="50%" alt="person1"/>
        <p> I don't know who Steve Jobs is...</p>
      </ChirpsUsers>
      <ChirpsUsers>
          <h3><i className="fas fa-kiwi-bird"></i> Khoman</h3>
          <Avatar src={khoman} width="10%" height="50%" alt="person1" />
          <p> Mayonnaise is disgusting af, but it does wonders to my hair</p>
      </ChirpsUsers>
      <ChirpsUsers>
          <h3><i className="fas fa-kiwi-bird"></i> Samantha</h3>
          <Avatar src={samantha} width="10%" height="50%" alt="person1" />
          <p> Kurt Cobain is that guy from Glee, right?</p>
      </ChirpsUsers>
      <ChirpsUsers>
          <h3><i className="fas fa-kiwi-bird"></i> Tyler </h3>
          <Avatar src={tyler} width="10%" height="50%" alt="person1" />
          <p>I want my first daughter to be a girl</p>
      </ChirpsUsers>
    </section>
  );
}

export default ChirpsFeed;