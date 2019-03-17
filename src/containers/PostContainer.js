import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTweet } from '../services/services';
import { createMyTweet } from '../actions/tweets';
import Post from '../components/post/Post';
class PostContainer extends PureComponent {
  static propTypes = {
    tweet: PropTypes.object,
    onSubmit: PropTypes.func 
  }

  componentDidMount() {
    this.props.onSubmit();
  }

  render() {
    return (
      <Post />
    );
  }
}

const mapStateToProps = state => ({
  post: createMyTweet(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(tweet, event) {
    event.preventDefault();
    return dispatch(createTweet(tweet));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
