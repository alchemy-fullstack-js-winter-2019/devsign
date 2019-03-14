import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions/tweetsAction';
import Home from '../components/Home';
import { getTweets } from '../selectors/tweets';
import PropTypes from 'prop-types';

class AllTweets extends PureComponent {
    static propTypes = {
      tweets: PropTypes.array.isRequired,
      fetch: PropTypes.func.isRequired
    };

    componentDidMount() {
      fetchTweets();
    }

    render() {
      return <Home {...this.props} />;
    }
}
const  mapStateToProps = state => ({
  tweets: getTweets(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTweets);
