import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/users/User';
import { getUser } from '../../selectors/tweets';
import { fetchUser } from '../../actions/tweets';

class UserDisplay extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    fetch: PropTypes.func
  };

  componentDidMount() {
    console.log('component mounted');
    this.props.fetch();
  }

  render() {
    const { user } = this.props;
    return <User {...user} />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDisplay);
