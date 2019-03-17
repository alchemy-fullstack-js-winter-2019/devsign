import { connect } from 'react-redux';
import { getCreatedTweet } from '../selectors/createTweetSelector';
import CreateTweetForm from '../components/CreateTweetForm';
import { createTweet } from '../actions/createTweetAction';

const mapStateToProps = state => ({
  text: getCreatedTweet(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(createTweet(target.value));
  },
  onSubmit(event) {
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTweetForm);
