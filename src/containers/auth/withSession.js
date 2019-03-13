import React from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../selectors/session';

export const withSession = Component => {
  class WithSession extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    };
  }
};;

const mapStateToProps = state => ({
  token: getToken(state)
});
