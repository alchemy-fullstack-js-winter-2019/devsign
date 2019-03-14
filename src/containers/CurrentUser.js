import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { getUser, isUserLoading } from '../selectors/userDetails';
import { fetchUser } from '../actions/userDetails';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  user: getUser(state),
  loading: isUserLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(UserDetails));
