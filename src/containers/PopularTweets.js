import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tweets from '../components/tweets/Tweets';
import PropTypes from 'prop-types';
import { getTweets } from '../selectors/tweets';
import { fetchTweets } from '../actions/tweets';

class PopularTweets extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array,
    fetch: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Tweets {...this.props}/>
    );
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
)(PopularTweets);
