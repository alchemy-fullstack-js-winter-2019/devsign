import { connect } from 'react-redux';
import CreateChirpForm from '../components/CreateChirpForm';
import { getCreatedChirp } from '../selectors/createChirp';
import { createChirp } from '../actions/createChirp';

const mapStateToProps = state => ({
  text: getCreatedChirp(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(createChirp(target.value));
  },
  onSubmit(event) {
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChirpForm);
