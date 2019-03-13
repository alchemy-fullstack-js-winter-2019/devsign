import React from 'react';
import { connect } from 'react-redux';
import { handleAuth } from '../../services/auth';
import { setSession } from '../../actions/session'

class Callback extends React.PureComponent {
  static propTypes = {

  }
  componentDidMount() {

  }
}

const mapDispatchToProps = dispatch => {
  handleAuth() {
    dispatch(setSession())
  }
}