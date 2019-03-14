import React from 'react';
import { connect } from 'react-redux';
import { setSession } from '../../actions/session';
import PropTypes from 'prop-types';

class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.handleAuth();
  }
  render() {
    if(this.props.token) {
      return <Redirect to={ROUTES.HOME.linkTo()} />
    }
    return <h1>LOADING</h1>;
  }
}
export default Callback;
