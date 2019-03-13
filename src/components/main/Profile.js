import React from 'react';
import styles from 'styled-components';

const ProfileAvatar = styles.img`
@media (min-width: 374px) {
  border-radius: 50%;
  width: 15vw;
  height: 8vh;
  border: 3px solid #b7fbff;
  }
`;

const ProfileUser = styles.aside`
@media (min-width: 374px) {
  font-family: 'Muli', sans-serif;
  color: #ffa1ac;
  margin: 10px;

  }
`;


function Profile() {
  return (
   <ProfileUser>
    <section>
      <h2><i className="fas fa-kiwi-bird"></i> PERSONAL USERNAME </h2>
      <ProfileAvatar src="/assets/drew.jpg" width="10%" />
      <p> A person who loves you will never kick you when your down or pour salad on your wounds</p>
    </section>
  </ProfileUser>
  );
}

export default Profile;