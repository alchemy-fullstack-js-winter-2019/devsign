import React from 'react';
import PropTypes from 'prop-types';
// import { handleAuth } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuth } from '../../actions/auth';
import { getToken } from '../../selectors/auth';
import { ROUTES } from '../../routes';


class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to={ROUTES.HOME.linkTo()} />;
    }
    return <h1>LOADING YOUR TWEETS...</h1>;
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setAuth());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
