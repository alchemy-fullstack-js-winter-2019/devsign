import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweets';
import { getTweets } from '../../selectors/tweets';
import Tweets from '../../components/tweets/Tweets';

class TopTweets extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired 
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Tweets {...this.props} />;
  }
}

const mapStateToProps = state => ({
  tweets: getTweets(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTweets);
