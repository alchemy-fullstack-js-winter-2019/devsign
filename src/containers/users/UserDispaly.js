import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/users/User';

export default class UserDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return <User {...this.props} />;
  }
}
