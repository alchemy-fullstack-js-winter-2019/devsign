import { connect } from 'react-redux';
import QuibForm from '../../components/quibs/QuibForm';
import { getBody } from '../../selectors/quibs';
import { createQuib } from '../../actions/quibs';

const mapStateToProps = state => ({
  body: getBody(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(body, event) {
    event.preventDefault();
    dispatch(createQuib({ body }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuibForm);
