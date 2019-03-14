import { connect } from 'react-redux';
import Notifications from '../components/notifications/Notifications';
import { getNotifications, isLoading } from '../selectors/notifications';
import { fetchNotifications } from '../actions/notifications';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  notifications: getNotifications(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchNotifications());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Notifications));
