import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import PropTypes from 'prop-types';
import Loading from '../../components/loading/Loading';

class CallBack extends PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.handleAuth();
  }
  render() {
    if(this.props.token) {
      return <Redirect to='/'/>;
    }
    return (
      <Loading />
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
