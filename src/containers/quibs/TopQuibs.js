import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuibs } from '../../actions/quibs';
import { getQuibs } from '../../selectors/quibs';
import Quibs from '../../components/quibs/Quibs';

class TopQuibs extends PureComponent {
  static propTypes = {
    quibs: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired 
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Quibs {...this.props} />;
  }
}

const mapStateToProps = state => ({
  quibs: getQuibs(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchQuibs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopQuibs);
