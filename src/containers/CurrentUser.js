import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { getUser, isUserLoading } from '../selectors/userDetails';
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
  user: getUser(state),
  loading: isUserLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);
