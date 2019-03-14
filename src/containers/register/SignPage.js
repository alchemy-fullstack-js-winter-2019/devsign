import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SignForm from '../../components/register/SignForm';
import { getUser } from '../../selectors/tweets';

class SignPage extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  render() {

    return (
      <main>
        <SignForm {...{ ...this.props, signType: 'Sign In' }} />
        <SignForm {...{ ...this.props, signType: 'Sign Up' }} />
      </main>
    );
  } 
}

const mapStateToProps = state => ({
  username: getUser(state).username,
  password: ''
});

const mapDispatchToPorps = () => ({
  onChange() {}
});

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(SignPage);
