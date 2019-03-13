import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TweetForm from '../../components/home/TweetForm';
import Tweets from '../../components/tweets/Tweets';
import { getTweets } from '../../selectors/tweets';


class Home extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  }

  state = {
    tweetText: ''
  }

  render() {
    return (
      <main>
        <TweetForm { ...{ ...this.props, tweetText: this.state.tweetText } } />
        <Tweets {...this.props} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  tweets: getTweets(state)
});

// const mapDispatchToProps = dispatch => ({
//   onChange() {

//   }
// });

export default connect(
  mapStateToProps
)(Home);
