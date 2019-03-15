import React from 'react';
import styles from 'styled-components';

const FooterStyle = styles.footer`
@media (min-width: 374px) {
  color: #ffa1ac;
  text-align: center;
  font-family: 'Muli', sans-serif;
}
`;

function Footer() {
  return (
    <FooterStyle>
      <section>
        <h3>CHIRP 2019 ©</h3>
      </section>
    </FooterStyle>   
  );
}

export default Footer;
