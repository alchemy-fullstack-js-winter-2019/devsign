import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SignForm from '../../components/register/SignForm';

export default class SignPage extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    return (
      <main>
        <SignForm {...{ ...this.props, signType: 'Sign In' }} />
        <SignForm {...{ ...this.props, signType: 'Sign Up' }} />
      </main>
    );
  } 
}
