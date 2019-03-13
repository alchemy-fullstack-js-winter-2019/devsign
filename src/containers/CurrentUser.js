import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { getUser } from '../selectors/userDetails';
import { fetchUser } from '../actions/userDetails';
import PropTypes from 'prop-types';

class CurrentUser extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <UserDetails { ...this.props } />;
  }
}

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUser());
  }
});

export default connect()();
