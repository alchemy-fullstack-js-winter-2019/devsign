import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chirps from '../components/Chirps';
import { getAllChirps } from '../selectors/chirps';
import { fetchChirps } from '../actions/chirps';
import PropTypes from 'prop-types';

class PopularChirps extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Chirps { ...this.props } />;
  }
}

const mapStateToProps = state => ({
  chirps: getAllChirps(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchChirps());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularChirps);
