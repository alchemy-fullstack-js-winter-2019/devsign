import { connect } from 'react-redux';
import { fetchChirps } from '../actions/chirps';
import { withFetch } from '../components/withFetch';
import Chirps from '../components/chirps/Chirps';
import { getChirps, isChirpsLoading } from '../selectors/chirps';

const mapStateToProps = state => ({
  chirps: getChirps(state),
  loading: isChirpsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchChirps());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Chirps));
