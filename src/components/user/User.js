import React from 'react';
import styles from './User.css';
import PropTypes from 'prop-types';
// import AllTweets from '../../containers/AllTweets';

function User() {
  return (
    <main>
      <section>
        {/* <AllTweets /> */}
        <div>
        </div>
      </section>
    </main>
  );
}
User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
