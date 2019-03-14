import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tweets from '../components/tweets/Tweets';
import PropTypes from 'prop-types';
import { getTweets, isloading } from '../selectors/tweets';
import { fetchTweets } from '../actions/tweets';
import Loading from '../components/loading/Loading';

class PopularTweets extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  static defaultProps = {
    loading: false
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <Loading />;
    return (
      <Tweets {...this.props}/>
    );
  }
}
const mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: isloading(state)
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
