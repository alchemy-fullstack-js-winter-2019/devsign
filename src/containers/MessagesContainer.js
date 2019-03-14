import { connect } from 'react-redux';
import { getMessages, isLoading } from '../selectors/messages';
import { fetchMessages } from '../actions/messages';
import { withFetch } from '../components/withFetch';
import Messages from '../components/messages/Messages';

const mapStateToProps = state => ({
  messages: getMessages(state),
  loading: isLoading(state)
});

const mapDispatchToState = dispatch => ({
  fetch() {
    dispatch(fetchMessages());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(withFetch(Messages));
