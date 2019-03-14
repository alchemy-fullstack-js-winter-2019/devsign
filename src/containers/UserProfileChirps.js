import { connect } from 'react-redux';
import Chirps from '../components/Chirps';
import { getUserChirps, isUserChirpsLoading } from '../selectors/profile';
import { fetchUserChirps } from '../actions/profile';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  chirps: getUserChirps(state),
  loading: isUserChirpsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUserChirps());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Chirps));
