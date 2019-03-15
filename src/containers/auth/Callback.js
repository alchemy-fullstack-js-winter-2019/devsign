import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import PropTypes from 'prop-types';
import Landing from '../../components/landing/Landing';

class CallBack extends PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  }
  componentDidMount() {
    console.log('cmsm');

    this.props.handleAuth();
  }
  render() {
    if(this.props.token) {
      return <Redirect to='/'/>;
    }
    return (
      <h2>LOADING</h2>
    );
  }
}
const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CallBack);
