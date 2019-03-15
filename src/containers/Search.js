import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { getSearchTerm } from '../selectors/search';
import { updateSearchTerm } from '../actions/search';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
  onSubmit(event) {
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
