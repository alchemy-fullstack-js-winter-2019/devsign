import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string
    handleAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(token) {
      return 
    }
    return (
      <h1>Loading</h1>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect (

)(Callback);
