import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/users/User';
import { getUser } from '../../selectors/tweets';

class UserDisplay extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fetch: PropTypes.func
  };

  componentDidMount() {
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

const mapDispatchToProps = () => ({
  fetch() { 
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDisplay);
